export interface QueueItem {
  id: string;
  title: string;
  description: string | null;
  position: number;
  status: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  queueId: string;
}

export interface Queue {
  id: string;
  name: string;
  shareToken: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  items?: QueueItem[];
  _count?: {
    items: number;
  };
}
