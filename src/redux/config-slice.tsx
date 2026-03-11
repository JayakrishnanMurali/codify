import { backgroundPresets } from "@/components/common/snippet/wrapper-colors";
import { editorLanguages } from "@/components/common/snippet/editor-languages";
import { editorThemes } from "@/components/common/snippet/editor-themes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ShadowValue = "none" | "soft" | "medium" | "bold";

interface ConfigState {
  language: { label: string; value: string };
  theme: { label: string; value: string; bg: string };
  backgroundColor: string;
  padding: number;
  borderRadius: number;
  showWindowChrome: boolean;
  windowTitle: string;
  fontSize: number;
  lineNumbers: boolean;
  shadow: ShadowValue;
  exportScale: number;
}

const initialState: ConfigState = {
  language: editorLanguages[0]!,
  theme: editorThemes[0]!,
  backgroundColor: backgroundPresets[0]!.value,
  padding: 48,
  borderRadius: 12,
  showWindowChrome: true,
  windowTitle: "",
  fontSize: 14,
  lineNumbers: false,
  shadow: "bold",
  exportScale: 2,
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
    setWindowTitle(state, action: PayloadAction<string>) {
      state.windowTitle = action.payload;
    },
    setFontSize(state, action: PayloadAction<number>) {
      state.fontSize = action.payload;
    },
    setLineNumbers(state, action: PayloadAction<boolean>) {
      state.lineNumbers = action.payload;
    },
    setShadow(state, action: PayloadAction<ShadowValue>) {
      state.shadow = action.payload;
    },
    setExportScale(state, action: PayloadAction<number>) {
      state.exportScale = action.payload;
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
  setWindowTitle,
  setFontSize,
  setLineNumbers,
  setShadow,
  setExportScale,
} = configSlice.actions;
export default configSlice.reducer;
