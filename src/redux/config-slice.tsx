import { wrapperColors } from "@/components/common/snippet/wrapper-colors";
import { editorLanguages } from "@/components/common/snippet/editor-languages";
import { editorThemes } from "@/components/common/snippet/editor-themes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ConfigState {
  language: { label: string; value: string };
  theme: { label: string; value: string; bg: string };
  backgroundColor: string;
  padding: number;
  borderRadius: number;
  showWindowChrome: boolean;
}

const initialState: ConfigState = {
  language: editorLanguages[0]!,
  theme: editorThemes[0]!,
  backgroundColor: wrapperColors.gradients[0]!,
  padding: 48,
  borderRadius: 12,
  showWindowChrome: true,
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<{ label: string; value: string }>) {
      state.language = action.payload;
    },
    setTheme(
      state,
      action: PayloadAction<{ label: string; value: string; bg: string }>,
    ) {
      state.theme = action.payload;
    },
    setBackgroundColor(state, action: PayloadAction<string>) {
      state.backgroundColor = action.payload;
    },
    setPadding(state, action: PayloadAction<number>) {
      state.padding = action.payload;
    },
    setBorderRadius(state, action: PayloadAction<number>) {
      state.borderRadius = action.payload;
    },
    setShowWindowChrome(state, action: PayloadAction<boolean>) {
      state.showWindowChrome = action.payload;
    },
  },
});

export const {
  setLanguage,
  setTheme,
  setBackgroundColor,
  setPadding,
  setBorderRadius,
  setShowWindowChrome,
} = configSlice.actions;
export default configSlice.reducer;
