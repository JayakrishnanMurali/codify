import { env } from "@/env";
import Script from "next/script";
import React from "react";

export const ClarityAnalytics = () => {
  const code = env.NEXT_PUBLIC_CLARITY_ANALYTICS;

  const clarityCode = `
(function (c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${code}");`;

  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {clarityCode}
    </Script>
  );
};
