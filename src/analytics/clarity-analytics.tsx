import { env } from "@/env";
import Script from "next/script";
import React from "react";

export const ClarityAnalytics = () => {
  const clarityCode = env.NEXT_PUBLIC_CLARITY_ANALYTICS;
  return (
    <Script
      type="text/javascript"
      strategy="afterInteractive"
      src={`https://www.clarity.ms/tag/${clarityCode}`}
    />
  );
};
