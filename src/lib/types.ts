export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

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
  userId: string;
  user?: User;
  items?: QueueItem[];
  _count?: {
    items: number;
  };
}
