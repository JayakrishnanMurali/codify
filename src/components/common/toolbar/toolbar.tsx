"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useImageGen from "@/hooks/useImagegen";
import {
  setBorderRadius,
  setLanguage,
  setPadding,
  setShowWindowChrome,
  setTheme,
} from "@/redux/config-slice";
import { useAppDispatch, useAppSelector } from "@/redux/redux-hooks";
import { Download, Monitor } from "lucide-react";
import { editorLanguages } from "../snippet/editor-languages";
import { editorThemes } from "../snippet/editor-themes";
import { ColorPopup } from "./color-popup";

const PADDING_OPTIONS = [16, 32, 48, 64, 96] as const;
const BORDER_RADIUS_OPTIONS = [0, 8, 12, 16, 24] as const;

export const Toolbar = () => {
  const { language, theme, padding, borderRadius, showWindowChrome } =
    useAppSelector((state) => state.config);
  const dispatch = useAppDispatch();
  const { downloadImageAsPng } = useImageGen();

  return (
    <TooltipProvider>
      <div className="flex flex-wrap items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
        {/* Theme */}
        <Select
          value={theme.value}
          onValueChange={(value) => {
            const selectedTheme = editorThemes.find((t) => t.value === value);
            if (selectedTheme) dispatch(setTheme(selectedTheme));
          }}
        >
          <SelectTrigger className="h-8 w-[148px] text-xs">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            {editorThemes.map((t) => (
              <SelectItem value={t.value} key={t.value} className="text-xs">
                <span className="flex items-center gap-2">
                  <span
                    className="inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full border border-border/40"
                    style={{ background: t.bg }}
                  />
                  {t.label}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Language */}
        <Select
          value={language.value}
          onValueChange={(value) => {
            const selectedLanguage = editorLanguages.find(
              (l) => l.value === value,
            );
            if (selectedLanguage) dispatch(setLanguage(selectedLanguage));
          }}
        >
          <SelectTrigger className="h-8 w-[120px] text-xs">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            {editorLanguages.map((lang) => (
              <SelectItem
                value={lang.value}
                key={lang.value}
                className="text-xs"
              >
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Background color */}
        <Tooltip>
          <TooltipTrigger asChild>
            <div>
              <ColorPopup />
            </div>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Background</p>
          </TooltipContent>
        </Tooltip>

        <div className="h-4 w-px bg-border" />

        {/* Padding */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-muted-foreground">Padding</span>
          <select
            value={padding}
            onChange={(e) => dispatch(setPadding(Number(e.target.value)))}
            className="h-8 rounded-md border border-input bg-background px-2 text-xs focus:outline-none focus:ring-1 focus:ring-ring"
          >
            {PADDING_OPTIONS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Border radius */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-muted-foreground">Radius</span>
          <select
            value={borderRadius}
            onChange={(e) =>
              dispatch(setBorderRadius(Number(e.target.value)))
            }
            className="h-8 rounded-md border border-input bg-background px-2 text-xs focus:outline-none focus:ring-1 focus:ring-ring"
          >
            {BORDER_RADIUS_OPTIONS.map((r) => (
              <option key={r} value={r}>
                {r === 0 ? "None" : r}
              </option>
            ))}
          </select>
        </div>

        <div className="h-4 w-px bg-border" />

        {/* Window chrome toggle */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={showWindowChrome ? "secondary" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => dispatch(setShowWindowChrome(!showWindowChrome))}
            >
              <Monitor className="h-3.5 w-3.5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>{showWindowChrome ? "Hide" : "Show"} window chrome</p>
          </TooltipContent>
        </Tooltip>

        <div className="ml-auto">
          <Button
            onClick={downloadImageAsPng}
            size="sm"
            className="h-8 gap-1.5 text-xs"
          >
            <Download className="h-3.5 w-3.5" />
            Export PNG
          </Button>
        </div>
      </div>
    </TooltipProvider>
  );
};
