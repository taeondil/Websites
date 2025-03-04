export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  spotifyUrl: string;
  date: string;
  duration: string;
  transcript?: string;
  imageUrl?: string;
}