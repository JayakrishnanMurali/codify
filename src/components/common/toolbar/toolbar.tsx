"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/redux/redux-hooks";
import { ArrowDownToLine, Copy, Sparkles } from "lucide-react";
import { monacoLanguages } from "../snippet/monaco-languages";
import { setLanguage, setTheme } from "@/redux/config-slice";
import { monacoThemes } from "../snippet/monaco-themes";
import { ColorPopup } from "./color-popup";

export const Toolbar = () => {
  const { language, theme } = useAppSelector((state) => state.config);

  const dispatch = useAppDispatch();

  return (
    <div className=" rounded-lg bg-accent/70 p-2">
      <div className="grid grid-cols-4 gap-3">
        <Select
          defaultValue={theme.value}
          value={theme.value}
          onValueChange={(val) => {
            dispatch(
              setTheme(
                monacoThemes.find((theme) => theme.value === val) || theme,
              ),
            );
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a theme" />
          </SelectTrigger>
          <SelectContent>
            {monacoThemes.map((theme) => (
              <SelectItem value={theme.value} key={theme.value}>
                {theme.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          defaultValue={language.value}
          value={language.value}
          onValueChange={(val) => {
            dispatch(
              setLanguage(
                monacoLanguages.find((lang) => lang.value === val) || language,
              ),
            );
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            {monacoLanguages.map((language) => (
              <SelectItem value={language.value} key={language.value}>
                {language.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex flex-row gap-x-3">
          <ColorPopup />

          <Button variant="outline" className="items-center gap-x-1">
            <Sparkles className="h-4 w-4" />
          </Button>

          <Button variant="outline" className="items-center gap-x-1">
            <Copy className="h-4 w-4" />
          </Button>
        </div>

        <Button variant="default" className="items-center gap-x-1">
          <ArrowDownToLine className="h-4 w-4" />
          Export
        </Button>
      </div>
    </div>
  );
};
