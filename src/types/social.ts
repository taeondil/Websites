export interface Video {
  id: string;
  platform: 'youtube' | 'tiktok';
  url: string;
  title: string;
  thumbnail: string;
}