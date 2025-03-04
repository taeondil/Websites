import React from 'react';
import { AdBanner } from './AdBanner';

export function AdSidebar() {
  return (
    <div className="hidden lg:block w-64 space-y-6">
      {/* Sabit sidebar reklamı */}
      <div className="sticky top-24">
        <AdBanner 
          slot="SIDEBAR_AD_SLOT_ID" 
          className="min-h-[600px] bg-white/5 rounded-xl overflow-hidden" 
        />
      </div>
    </div>
  );
}