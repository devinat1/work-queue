import { prisma } from "@/lib/prisma";
import { CreateQueueForm } from "@/components/CreateQueueForm";
import { QueueListHome } from "@/components/QueueListHome";

export const dynamic = "force-dynamic";

export default async function Home() {
  const queues = await prisma.queue.findMany({
    include: {
      _count: {
        select: { items: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-bold text-gray-900">My Queues</div>
            <div className="text-gray-600">
              Create and manage your work queues
            </div>
          </div>

          <CreateQueueForm />

          <div className="flex flex-col gap-4">
            <div className="text-lg font-medium text-gray-700">
              Your Queues
            </div>
            <QueueListHome initialQueues={queues} />
          </div>
        </div>
      </div>
    </div>
  );
}
