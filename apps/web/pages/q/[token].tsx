import Link from "next/link";
import Head from "next/head";
import type { GetServerSideProps } from "next";
import type { Queue } from "@work-queue/types";
import { ShareButton } from "@/components/ShareButton";
import { SlackConnectButton } from "@/components/SlackConnectButton";
import { QueueItemsList } from "@/components/QueueItemsList";
import { getSession } from "@helpers/api/auth";
import { fetchQueueWithUser } from "@helpers/api/db/queues";

interface QueuePageProps {
  queue: Queue;
  isOwner: boolean;
}

export const getServerSideProps: GetServerSideProps<QueuePageProps> = async ({
  req,
  query,
}) => {
  const token = query.token as string;

  const queue = await fetchQueueWithUser({ shareToken: token });

  if (!queue) {
    return { notFound: true };
  }

  const session = await getSession({ req });
  const isOwner = session?.user.id === queue.userId;

  return {
    props: {
      queue: JSON.parse(JSON.stringify(queue)),
      isOwner,
    },
  };
};

export default function QueuePage({ queue, isOwner }: QueuePageProps) {
  return (
    <>
      <Head>
        <title>{queue.name} - Queue Manager</title>
      </Head>
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
                {!isOwner && queue.user ? (
                  <div className="text-gray-600 dark:text-gray-400">
                    by {queue.user.name}
                  </div>
                ) : null}
                {!isOwner ? (
                  <div className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-4 py-2 rounded-md inline-block">
                    View only
                  </div>
                ) : null}
              </div>
              {isOwner ? (
                <div className="flex items-center gap-2">
                  <SlackConnectButton />
                  <ShareButton shareToken={queue.shareToken} />
                </div>
              ) : null}
            </div>

            <QueueItemsList
              shareToken={queue.shareToken}
              initialItems={queue.items ?? []}
              isOwner={isOwner}
            />
          </div>
        </div>
      </div>
    </>
  );
}
