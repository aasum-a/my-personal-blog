export type Post = {
  id: string;
  title: string;
  content: string;
};

export type CardData = {
  totalPosts: number;
  totalComments: number;
  totalViews: number;
  pendingDrafts: number;
};
