export interface TikTokPost {
  id: string;
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
  effect?: string;
}