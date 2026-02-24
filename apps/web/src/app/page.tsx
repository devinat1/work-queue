import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { CreateQueueForm } from "@/components/CreateQueueForm";
import { QueueListHome } from "@/components/QueueListHome";
import { UserMenu } from "@/components/UserMenu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getSession } from "@/lib/auth-helpers";

export const dynamic = "force-dynamic";

export default async function Home() {
  const session = await getSession();

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="flex flex-col gap-8 items-center text-center">
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">Queue</div>
              <div className="text-gray-600 dark:text-gray-400">
                Track and share your work queues
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <Link
                href="/sign-in"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-6 py-3 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 font-medium"
              >
                Create Account
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    );
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">My Queues</div>
              <div className="text-gray-600 dark:text-gray-400">
                Create and manage your work queues
              </div>
            </div>
            <UserMenu userName={session.user.name} userEmail={session.user.email} />
          </div>

          <CreateQueueForm />

          <div className="flex flex-col gap-4">
            <div className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Your Queues
            </div>
            <QueueListHome initialQueues={queues} />
          </div>
        </div>
      </div>
    </div>
  );
}
