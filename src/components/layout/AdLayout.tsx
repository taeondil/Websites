import React from 'react';
import { AdSidebar } from '../ads/AdSidebar';

interface AdLayoutProps {
  children: React.ReactNode;
}

export function AdLayout({ children }: AdLayoutProps) {
  return (
    <div className="flex gap-8">
      <main className="flex-1">{children}</main>
      <AdSidebar />
    </div>
  );
}