"use client";

import { useAppSelector } from "@/redux/redux-hooks";
import { Editor } from "./editor";
import { EditorWrapper } from "./editor-wrapper";

export const Snippet = () => {
  const { backgroundColor, padding, borderRadius } = useAppSelector(
    (state) => state.config,
  );

  return (
    <div
      id="snippet"
      style={{ background: backgroundColor, padding: `${padding}px` }}
      className="flex items-center justify-center rounded-xl"
    >
      <div
        style={{ borderRadius: `${borderRadius}px`, overflow: "hidden" }}
        className="shadow-2xl"
      >
        <EditorWrapper>
          <Editor />
        </EditorWrapper>
      </div>
    </div>
  );
};
