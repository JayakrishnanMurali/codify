import { useState } from "react";
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
import { useAppSelector } from "@/redux/redux-hooks";

export const Editor = () => {
  const [editorHeight, setEditorHeight] = useState("100px");

  function onChange(newValue: string) {
    const lines = newValue.split("\n").length;
    const newHeight = `${Math.max(lines * 16.1, 100)}px`;
    setEditorHeight(newHeight);
  }

  const { theme, language } = useAppSelector((state) => state.config);

  return (
    <div>
      <AceEditor
        mode={language.value}
        wrapEnabled
        theme={theme.value}
        onChange={onChange}
        style={{ minHeight: editorHeight, height: "auto" }}
        name="UNIQUE_ID_OF_DIV"
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
        }}
      />
    </div>
  );
};
