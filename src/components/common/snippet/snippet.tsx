"use client";

import React from "react";
import { MonacoEditor } from "./monaco-editor";
import { useAppSelector } from "@/redux/redux-hooks";

export const Snippet = () => {
  const { color } = useAppSelector((state) => state.config);

  return (
    <div style={{ background: color }} className="rounded-lg p-16">
      <MonacoEditor />
    </div>
  );
};
