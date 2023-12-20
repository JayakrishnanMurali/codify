"use client";

import Editor, { EditorProps } from "@monaco-editor/react";
import { useMemo } from "react";
import { DEFAULT_SETTINGS } from "./monaco-settings";

export const MonacoEditor = () => {
  const DEFAULT_OPTIONS = {
    fixedOverflowWidgets: true,
    lineNumbers: "off",
    tabSize: 2,
    insertSpaces: false,
    minimap: {
      enabled: false,
    },
    fontSize: 16,
    cursorBlinking: "smooth",
  } as const satisfies EditorProps["options"];

  const editorOptions = useMemo(() => {
    return {
      ...DEFAULT_OPTIONS,
      ...DEFAULT_SETTINGS,
      fontSize: parseInt(DEFAULT_SETTINGS.fontSize),
      tabSize: parseInt(DEFAULT_SETTINGS.tabSize),
    };
  }, [DEFAULT_SETTINGS]);

  return (
    <div>
      <Editor
        className="min-h-[40vh]"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        options={editorOptions}
        theme="vs-dark"
        loading={<></>}
      />
    </div>
  );
};
