export interface QueueItem {
  id: string;
  title: string;
  description: string | null;
  position: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  queueId: string;
}

export interface Queue {
  id: string;
  name: string;
  shareToken: string;
  createdAt: string;
  updatedAt: string;
  items?: QueueItem[];
  _count?: {
    items: number;
  };
}
