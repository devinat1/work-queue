import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateShareToken } from "@/lib/utils";
import { getSession } from "@/lib/auth-helpers";

export async function GET() {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const queues = await prisma.queue.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        _count: {
          select: { items: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(queues);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Failed to fetch queues:", errorMessage, error);
    return NextResponse.json(
      { error: "Failed to fetch queues.", details: errorMessage },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { name } = body as { name: string };

    if (!name || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Queue name is required." },
        { status: 400 }
      );
    }

    const shareToken = generateShareToken();

    const queue = await prisma.queue.create({
      data: {
        name: name.trim(),
        shareToken,
        userId: session.user.id,
      },
    });

    return NextResponse.json(queue, { status: 201 });
  } catch (error) {
    console.error("Failed to create queue.", error);
    return NextResponse.json(
      { error: "Failed to create queue." },
      { status: 500 }
    );
  }
}
