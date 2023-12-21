import { languages } from "@/components/common/snippet/monaco-languages";
import { monacoThemes } from "@/components/common/snippet/monaco-themes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ConfigState {
  language: { label: string; value: string };
  theme: { label: string; value: string };
  color: string;
}

const initialState = {
  language: languages[0],
  theme: monacoThemes[0],
  color: "#00FF00",
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
