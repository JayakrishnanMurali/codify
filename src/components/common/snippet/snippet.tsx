"use client";

import React, { useRef } from "react";
import { MonacoEditor } from "./monaco-editor";
import { useAppSelector } from "@/redux/redux-hooks";

export const Snippet = () => {
  const { color } = useAppSelector((state) => state.config);

  // const snippetRef = useRef<HTMLDivElement>(null);

  return (
    <div
      // ref={snippetRef}
      id="snippet"
      style={{ background: color }}
      className="rounded-lg p-16"
    >
      <MonacoEditor />
    </div>
  );
};
