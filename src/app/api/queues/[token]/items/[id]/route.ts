import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth-helpers";
import { syncSlackStatusForQueue } from "@/lib/slack";

interface RouteParams {
  params: Promise<{ token: string; id: string }>;
}

export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { token, id } = await params;
    const body = await request.json();
    const { title, description, status } = body as {
      title?: string;
      description?: string;
      status?: string;
    };

    const queue = await prisma.queue.findUnique({
      where: { shareToken: token },
    });

    if (!queue) {
      return NextResponse.json({ error: "Queue not found." }, { status: 404 });
    }

    if (queue.userId !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const existingItem = await prisma.queueItem.findFirst({
      where: { id, queueId: queue.id },
    });

    if (!existingItem) {
      return NextResponse.json({ error: "Item not found." }, { status: 404 });
    }

    const updateData: {
      title?: string;
      description?: string | null;
      status?: string;
    } = {};

    if (title !== undefined) {
      if (title.trim().length === 0) {
        return NextResponse.json(
          { error: "Item title cannot be empty." },
          { status: 400 }
        );
      }
      updateData.title = title.trim();
    }

    if (description !== undefined) {
      updateData.description = description.trim() || null;
    }

    if (status !== undefined) {
      const validStatuses = ["pending", "in-progress", "completed"];
      if (!validStatuses.includes(status)) {
        return NextResponse.json(
          { error: "Invalid status value." },
          { status: 400 }
        );
      }
      updateData.status = status;
    }

    const item = await prisma.queueItem.update({
      where: { id },
      data: updateData,
    });

    await syncSlackStatusForQueue({ queueId: queue.id });

    return NextResponse.json(item);
  } catch (error) {
    console.error("Failed to update item.", error);
    return NextResponse.json(
      { error: "Failed to update item." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { token, id } = await params;

    const queue = await prisma.queue.findUnique({
      where: { shareToken: token },
    });

    if (!queue) {
      return NextResponse.json({ error: "Queue not found." }, { status: 404 });
    }

    if (queue.userId !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const existingItem = await prisma.queueItem.findFirst({
      where: { id, queueId: queue.id },
    });

    if (!existingItem) {
      return NextResponse.json({ error: "Item not found." }, { status: 404 });
    }

    await prisma.queueItem.delete({
      where: { id },
    });

    await syncSlackStatusForQueue({ queueId: queue.id });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete item.", error);
    return NextResponse.json(
      { error: "Failed to delete item." },
      { status: 500 }
    );
  }
}
