import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth-helpers";
import { syncSlackStatusForQueue } from "@/lib/slack";

interface RouteParams {
  params: Promise<{ token: string }>;
}

interface ReorderItem {
  id: string;
  position: number;
}

export async function PATCH(request: Request, { params }: RouteParams) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { token } = await params;
    const body = await request.json();
    const { items } = body as { items: ReorderItem[] };

    if (!items || !Array.isArray(items)) {
      return NextResponse.json(
        { error: "Items array is required." },
        { status: 400 }
      );
    }

    const queue = await prisma.queue.findUnique({
      where: { shareToken: token },
    });

    if (!queue) {
      return NextResponse.json({ error: "Queue not found." }, { status: 404 });
    }

    if (queue.userId !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const updatePromises = items.map((item) =>
      prisma.queueItem.update({
        where: { id: item.id },
        data: { position: item.position },
      })
    );

    await Promise.all(updatePromises);

    const updatedItems = await prisma.queueItem.findMany({
      where: { queueId: queue.id },
      orderBy: { position: "asc" },
    });

    await syncSlackStatusForQueue({ queueId: queue.id });

    return NextResponse.json(updatedItems);
  } catch (error) {
    console.error("Failed to reorder items.", error);
    return NextResponse.json(
      { error: "Failed to reorder items." },
      { status: 500 }
    );
  }
}
