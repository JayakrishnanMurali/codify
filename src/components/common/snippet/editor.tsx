import { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

export const Editor = () => {
  const [editorHeight, setEditorHeight] = useState("100px");

  function onChange(newValue: string) {
    const lines = newValue.split("\n").length;
    const newHeight = `${Math.max(lines * 16, 100)}px`;
    setEditorHeight(newHeight);
  }

  return (
    <div>
      <AceEditor
        mode="python"
        wrapEnabled
        theme="monokai"
        onChange={onChange}
        style={{ minHeight: editorHeight, height: "auto" }}
        className="padding-16"
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
