import Script from "next/script";
import React from "react";

export const GoogleAnalytics = () => {
  const googleAnalyticsCode = "";

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsCode}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        type="text/javascript"
      >
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', '${googleAnalyticsCode}');
        `}
      </Script>
    </>
  );
};
