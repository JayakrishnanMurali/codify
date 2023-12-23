"use client";

import { useAppSelector } from "@/redux/redux-hooks";
import React from "react";
import { EditorToolbar } from "./editor-toolbar";

export const EditorWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useAppSelector((state) => state.config);

  return (
    <div style={{ backgroundColor: theme.bg }} className="rounded-md p-4">
      <EditorToolbar />
      {children}
    </div>
  );
};
