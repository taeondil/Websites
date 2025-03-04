import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialAccountCardProps {
  platform: string;
  username: string;
  url: string;
  icon: React.ReactNode;
}

export function SocialAccountCard({ platform, username, url, icon }: SocialAccountCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex items-center space-x-4 hover:bg-white/20 transition-all duration-300"
    >
      <div className="p-3 bg-white/10 rounded-xl">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-semibold">{platform}</h3>
        <p className="text-white/80">{username}</p>
      </div>
    </a>
  );
}