"use client";

import { useAppSelector } from "@/redux/redux-hooks";
import type { ShadowValue } from "@/redux/config-slice";
import { Editor } from "./editor";
import { EditorWrapper } from "./editor-wrapper";

const SHADOW_MAP: Record<ShadowValue, string> = {
  none: "none",
  soft: "0 8px 24px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15)",
  medium: "0 16px 48px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.2)",
  bold: "0 24px 80px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.3)",
};

export const Snippet = () => {
  const { backgroundColor, padding, borderRadius, shadow } = useAppSelector(
    (state) => state.config,
  );

  return (
    <div
      id="snippet"
      style={{ background: backgroundColor, padding: `${padding}px` }}
      className="flex items-center justify-center rounded-xl"
    >
      <div
        style={{
          borderRadius: `${borderRadius}px`,
          overflow: "hidden",
          boxShadow: SHADOW_MAP[shadow],
        }}
      >
        <EditorWrapper>
          <Editor />
        </EditorWrapper>
      </div>
    </div>
  );
};
