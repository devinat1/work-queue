import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface RouteParams {
  params: Promise<{ token: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { token } = await params;

    const queue = await prisma.queue.findUnique({
      where: { shareToken: token },
      include: {
        items: {
          orderBy: { position: "asc" },
        },
      },
    });

    if (!queue) {
      return NextResponse.json({ error: "Queue not found." }, { status: 404 });
    }

    return NextResponse.json(queue);
  } catch (error) {
    console.error("Failed to fetch queue.", error);
    return NextResponse.json(
      { error: "Failed to fetch queue." },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const { token } = await params;
    const body = await request.json();
    const { name } = body as { name: string };

    if (!name || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Queue name is required." },
        { status: 400 }
      );
    }

    const queue = await prisma.queue.update({
      where: { shareToken: token },
      data: { name: name.trim() },
    });

    return NextResponse.json(queue);
  } catch (error) {
    console.error("Failed to update queue.", error);
    return NextResponse.json(
      { error: "Failed to update queue." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    const { token } = await params;

    await prisma.queue.delete({
      where: { shareToken: token },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete queue.", error);
    return NextResponse.json(
      { error: "Failed to delete queue." },
      { status: 500 }
    );
  }
}
