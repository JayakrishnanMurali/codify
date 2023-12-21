"use client";

import Editor from "@monaco-editor/react";
import { useMemo } from "react";
import { DEFAULT_OPTIONS, DEFAULT_SETTINGS } from "./monaco-settings";
import { useAppSelector } from "@/redux/redux-hooks";
import { sampleJsCode } from "./monaco-sample-js-code";

export const MonacoEditor = () => {
  const { language, theme } = useAppSelector((state) => state.config);

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
        defaultLanguage={language.value}
        language={language.value}
        defaultValue={sampleJsCode}
        options={editorOptions}
        theme={theme.value}
        loading={<></>}
      />
    </div>
  );
};
