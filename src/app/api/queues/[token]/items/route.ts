import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth-helpers";

interface RouteParams {
  params: Promise<{ token: string }>;
}

export async function POST(request: Request, { params }: RouteParams) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { token } = await params;
    const body = await request.json();
    const { title, description } = body as {
      title: string;
      description?: string;
    };

    if (!title || title.trim().length === 0) {
      return NextResponse.json(
        { error: "Item title is required." },
        { status: 400 }
      );
    }

    const queue = await prisma.queue.findUnique({
      where: { shareToken: token },
      include: {
        items: {
          orderBy: { position: "desc" },
          take: 1,
        },
      },
    });

    if (!queue) {
      return NextResponse.json({ error: "Queue not found." }, { status: 404 });
    }

    if (queue.userId !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const nextPosition =
      queue.items.length > 0 ? queue.items[0].position + 1 : 0;

    const item = await prisma.queueItem.create({
      data: {
        title: title.trim(),
        description: description?.trim() ?? null,
        position: nextPosition,
        queueId: queue.id,
      },
    });

    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error("Failed to create item.", error);
    return NextResponse.json(
      { error: "Failed to create item." },
      { status: 500 }
    );
  }
}
