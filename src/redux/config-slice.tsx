import { wrapperColors } from "@/components/common/snippet/wrapper-colors";
import { editorLanguages } from "@/components/common/snippet/editor-languages";
import { editorThemes } from "@/components/common/snippet/editor-themes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ConfigState {
  language: { label: string; value: string };
  theme: { label: string; value: string };
  color: string;
}

const initialState = {
  language: editorLanguages[0],
  theme: editorThemes[0],
  color: wrapperColors.gradients[0],
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
    setTheme(state, action: PayloadAction<{ label: string; value: string }>) {
      state.theme = action.payload;
    },
    setColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
  },
});

export const { setColor, setLanguage, setTheme } = configSlice.actions;
export default configSlice.reducer;
