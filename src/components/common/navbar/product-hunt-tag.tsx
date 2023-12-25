"use client";
import { useTheme } from "next-themes";
import React from "react";

export const ProductHuntTag = () => {
  const { theme } = useTheme();

  return (
    <div className="hidden sm:block">
      <a
        href="https://www.producthunt.com/posts/codify-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-codify&#0045;2"
        target="_blank"
      >
        <img
          src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=431274&theme=${theme}`}
          alt="Codify - &#0032;Create&#0032;&#0038;&#0032;share&#0032;aesthetic&#0032;images&#0032;of&#0032;your&#0032;source&#0032;code | Product Hunt"
          style={{ width: "250px", height: "54px" }}
          width="250"
          height="54"
        />
      </a>
    </div>
  );
};
