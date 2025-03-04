export interface TikTokPost {
  id: string;
  title: string;
  views: number;
  likes: number;
  shares: number;
  comments: number;
  thumbnailUrl: string;
  url: string;
}

export const DEMO_TIKTOK_POSTS: TikTokPost[] = [
  {
    id: '1',
    title: 'FIND SYNONYMS',
    views: 1953,
    likes: 420,
    shares: 31,
    comments: 78,
    thumbnailUrl: 'https://i.hizliresim.com/nz26zpg.png?_gl=1*1mn81f4*_ga*MTMyMzA4NzEwMi4xNzMxOTYzMTk5*_ga_M9ZRXYS2YN*MTczOTMxMzc1Ny4xNC4xLjE3MzkzMTM3ODEuMzYuMC4w',
    url: 'https://www.tiktok.com/@taeondil/video/7430514006521171218'
  },
  {
    id: '2',
    title: 'VOCABULARY TEST',
    views: 1500,
    likes: 313,
    shares: 50,
    comments: 58,
    thumbnailUrl: 'https://i.hizliresim.com/59cfo17.png?_gl=1*1qobyaj*_ga*MTMyMzA4NzEwMi4xNzMxOTYzMTk5*_ga_M9ZRXYS2YN*MTczOTMxMzc1Ny4xNC4xLjE3MzkzMTQ2OTkuNDUuMC4w',
    url: 'https://vm.tiktok.com/ZMkGu9bKA/'
  },
];