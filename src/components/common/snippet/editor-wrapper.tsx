"use client";

import { useAppSelector } from "@/redux/redux-hooks";
import React from "react";
import { EditorToolbar } from "./editor-toolbar";

export const EditorWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme, showWindowChrome } = useAppSelector((state) => state.config);

  return (
    <div
      style={{ backgroundColor: theme.bg }}
      className="px-6 py-5"
    >
      {showWindowChrome && <EditorToolbar />}
      {children}
    </div>
  );
};
