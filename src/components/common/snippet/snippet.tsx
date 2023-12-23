"use client";

import { useAppSelector } from "@/redux/redux-hooks";
import { Editor } from "./editor";

export const Snippet = () => {
  const { color } = useAppSelector((state) => state.config);

  return (
    <div id="snippet" style={{ background: color }} className="rounded-lg p-16">
      <Editor />
    </div>
  );
};
