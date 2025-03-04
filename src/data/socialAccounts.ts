import { Instagram, Twitter, Youtube, Music } from 'lucide-react';

export interface SocialAccount {
  platform: string;
  url: string;
  icon: string;
  description: string;
  username: string;
}

export const socialAccounts: SocialAccount[] = [
  {
    platform: 'Instagram',
    username: '@taeondil',
    url: 'https://instagram.com/taeondil',
    icon: '/public/images/instagram.png',
    description: 'Takip etmek için tıklayın'
  },
  {
    platform: 'X (Twitter)',
    username: '@taeondil',
    url: 'https://twitter.com/taeondil',
    icon: '/public/images/twitter.png',
    description: 'Takip etmek için tıklayın'
  },
  {
    platform: 'YouTube',
    username: 'Taeondil',
    url: 'https://youtube.com/@Taeondil0',
    icon: '/public/images/youtube.png',
    description: 'Takip etmek için tıklayın'
  },
  {
    platform: 'Spotify',
    username: 'Taeondil',
    url: 'https://open.spotify.com/show/1qlKCco2L739TCOgZ9OflI?si=79b9ad15dbd64644',
    icon: '/public/images/spotify.png',
    description: 'Takip etmek için tıklayın'
  }
];