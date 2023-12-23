"use client";

import { useState, useRef, useEffect } from "react";
import AceEditor from "react-ace";

import { editorLanguages } from "./editor-languages";
import { editorThemes } from "./editor-themes";

editorLanguages.forEach((lang) => {
  require(`ace-builds/src-noconflict/mode-${lang.value}`);
  require(`ace-builds/src-noconflict/snippets/${lang.value}`);
});

editorThemes.forEach((theme) => {
  require(`ace-builds/src-noconflict/theme-${theme.value}`);
});

import "ace-builds/src-noconflict/ext-language_tools";
import { useAppDispatch, useAppSelector } from "@/redux/redux-hooks";
import { EditorWrapper } from "./editor-wrapper";
import { sampleCode } from "./editor-sample-code";
import { setEditorRef } from "@/redux/config-slice";

export const Editor = () => {
  const [value, setValue] = useState(sampleCode);
  const [editorHeight, setEditorHeight] = useState("100px");
  const editorRef = useRef<AceEditor | null>(null);

  const onChange = (newValue: string) => {
    setValue(newValue);
    const lines = newValue.split("\n").length;
    const newHeight = `${Math.max(lines * 16.1, 100)}px`;
    setEditorHeight(newHeight);
  };

  const { theme, language } = useAppSelector((state) => state.config);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (editorRef) {
      dispatch(setEditorRef(editorRef.current));
    }
  }, [editorRef]);

  return (
    <EditorWrapper>
      <AceEditor
        ref={editorRef}
        mode={language.value}
        wrapEnabled
        theme={theme.value}
        onChange={onChange}
        value={value}
        style={{ minHeight: editorHeight, height: "auto" }}
        name="ace-editor"
        editorProps={{ $blockScrolling: true }}
        focus
        width="100%"
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: false,
          highlightActiveLine: false,
          showGutter: false,
          showFoldWidgets: false,
          displayIndentGuides: false,
          showPrintMargin: false,
          highlightGutterLine: false,
        }}
      />
    </EditorWrapper>
  );
};
