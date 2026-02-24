import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ShareButton } from "@/components/ShareButton";
import { SlackConnectButton } from "@/components/SlackConnectButton";
import { QueueItemsList } from "@/components/QueueItemsList";
import { getSession } from "@/lib/auth-helpers";

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
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  if (!queue) {
    notFound();
  }

  const session = await getSession();
  const isOwner = session?.user.id === queue.userId;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
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
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                {queue.name}
              </div>
              {!isOwner && queue.user && (
                <div className="text-gray-600 dark:text-gray-400">by {queue.user.name}</div>
              )}
              {!isOwner && (
                <div className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-3 py-1 rounded-md inline-block">
                  View only
                </div>
              )}
            </div>
            {isOwner && (
              <div className="flex items-center gap-2">
                <SlackConnectButton />
                <ShareButton shareToken={queue.shareToken} />
              </div>
            )}
          </div>

          <QueueItemsList
            shareToken={queue.shareToken}
            initialItems={queue.items}
            isOwner={isOwner}
          />
        </div>
      </div>
    </div>
  );
}
