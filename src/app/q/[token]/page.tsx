import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ShareButton } from "@/components/ShareButton";
import { QueueItemsList } from "@/components/QueueItemsList";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ token: string }>;
}

export default async function QueuePage({ params }: PageProps) {
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
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="flex flex-col gap-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                &larr; Back to all queues
              </Link>
              <div className="text-3xl font-bold text-gray-900">
                {queue.name}
              </div>
              <div className="text-gray-600">
                {queue.items.length}{" "}
                {queue.items.length === 1 ? "item" : "items"} in queue
              </div>
            </div>
            <ShareButton shareToken={queue.shareToken} />
          </div>

          <QueueItemsList
            shareToken={queue.shareToken}
            initialItems={queue.items}
          />
        </div>
      </div>
    </div>
  );
}
