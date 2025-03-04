import React from 'react';

interface AdBannerProps {
  className?: string;
  slot: string;
}

export function AdBanner({ className = '', slot }: AdBannerProps) {
  React.useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('Error loading ad:', err);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-YOUR_CLIENT_ID" // Google Ads hesabınızdan alacağınız client ID
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}