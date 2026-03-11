import React from "react";

export const ProductHuntTag = () => {
  return (
    <a
      href="https://www.producthunt.com/posts/codify-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-codify&#0045;2"
      target="_blank"
      rel="noreferrer"
      className="hidden items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-[#ff6154]/50 hover:text-foreground sm:flex"
    >
      {/* Product Hunt cat logo */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 26.245 26.243"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.244 13.121a13.122 13.122 0 1 1-26.244 0 13.122 13.122 0 0 1 26.244 0"
          fill="#ff6154"
        />
        <path
          d="M14.82 13.452h-3.04V9.85h3.04a1.801 1.801 0 0 1 0 3.6m0-6.008H9.372v11.314h2.408v-3.9h3.04a4.207 4.207 0 1 0 0-8.414"
          fill="#fff"
        />
      </svg>
      Featured on Product Hunt
    </a>
  );
};
