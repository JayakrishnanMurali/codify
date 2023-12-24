import { wrapperColors } from "@/components/common/snippet/wrapper-colors";
import { editorLanguages } from "@/components/common/snippet/editor-languages";
import { editorThemes } from "@/components/common/snippet/editor-themes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type AceEditor from "react-ace";

interface ConfigState {
  language: { label: string; value: string };
  theme: { label: string; value: string; bg: string };
  color: string;
  // There is a type issue here. Correct it later.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editorRef: any;
}

const initialState = {
  language: editorLanguages[0],
  theme: editorThemes[0],
  color: wrapperColors.gradients[0],
  editorRef: null,
} as ConfigState;

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setLanguage(
      state,
      action: PayloadAction<{ label: string; value: string }>,
    ) {
      state.language = action.payload;
    },
    setTheme(
      state,
      action: PayloadAction<{ label: string; value: string; bg: string }>,
    ) {
      state.theme = action.payload;
    },
    setColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
    setEditorRef(state, action: PayloadAction<AceEditor | null>) {
      state.editorRef = action.payload;
    },
  },
});

export const { setColor, setLanguage, setTheme, setEditorRef } =
  configSlice.actions;
export default configSlice.reducer;
