import React from 'react';
import { AdBanner } from './AdBanner';

export function InArticleAd() {
  return (
    <div className="my-8 mx-auto max-w-3xl">
      <AdBanner 
        slot="IN_ARTICLE_AD_SLOT_ID"
        className="min-h-[250px] bg-white/5 rounded-xl overflow-hidden" 
      />
    </div>
  );
}