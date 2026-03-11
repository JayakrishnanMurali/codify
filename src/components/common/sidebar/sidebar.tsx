"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useImageGen from "@/hooks/useImagegen";
import {
  setBackgroundColor,
  setBorderRadius,
  setExportScale,
  setFontSize,
  setLanguage,
  setLineNumbers,
  setPadding,
  setShadow,
  setShowWindowChrome,
  setTheme,
  setWindowTitle,
  type ShadowValue,
} from "@/redux/config-slice";
import { useAppDispatch, useAppSelector } from "@/redux/redux-hooks";
import { Clipboard, Download } from "lucide-react";
import React from "react";
import { editorLanguages } from "../snippet/editor-languages";
import { editorThemes } from "../snippet/editor-themes";
import { backgroundPresets } from "../snippet/wrapper-colors";

const FONT_SIZE_OPTIONS = [12, 13, 14, 15, 16] as const;
const SHADOW_OPTIONS: { label: string; value: ShadowValue }[] = [
  { label: "None", value: "none" },
  { label: "Soft", value: "soft" },
  { label: "Medium", value: "medium" },
  { label: "Bold", value: "bold" },
];
const EXPORT_SCALES = [1, 2, 3] as const;

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
    {children}
  </p>
);

const Row = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-center justify-between gap-2">
    <span className="min-w-0 flex-shrink-0 text-xs text-muted-foreground">
      {label}
    </span>
    <div className="flex-shrink-0">{children}</div>
  </div>
);

const Toggle = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
}) => (
  <button
    onClick={() => onChange(!checked)}
    className={`relative inline-flex h-5 w-9 flex-shrink-0 items-center rounded-full transition-colors focus:outline-none ${
      checked ? "bg-foreground" : "bg-muted"
    }`}
  >
    <span
      className={`inline-block h-3.5 w-3.5 transform rounded-full bg-background transition-transform ${
        checked ? "translate-x-[18px]" : "translate-x-0.5"
      }`}
    />
  </button>
);

const Divider = () => <div className="h-px bg-border" />;

export const Sidebar = () => {
  const config = useAppSelector((state) => state.config);
  const dispatch = useAppDispatch();
  const { downloadImageAsPng, copyImageToClipboard } = useImageGen();

  return (
    <aside className="flex h-full w-64 flex-shrink-0 flex-col overflow-y-auto border-l border-border bg-card">
      <div className="flex flex-col gap-5 p-4">
        {/* ── EDITOR ── */}
        <section className="flex flex-col gap-3">
          <SectionLabel>Editor</SectionLabel>

          <Row label="Theme">
            <Select
              value={config.theme.value}
              onValueChange={(value) => {
                const t = editorThemes.find((t) => t.value === value);
                if (t) dispatch(setTheme(t));
              }}
            >
              <SelectTrigger className="h-7 w-36 text-xs">
                <SelectValue />
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
          </Row>

          <Row label="Language">
            <Select
              value={config.language.value}
              onValueChange={(value) => {
                const l = editorLanguages.find((l) => l.value === value);
                if (l) dispatch(setLanguage(l));
              }}
            >
              <SelectTrigger className="h-7 w-36 text-xs">
                <SelectValue />
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
          </Row>

          <Row label="Font size">
            <Select
              value={String(config.fontSize)}
              onValueChange={(v) => dispatch(setFontSize(Number(v)))}
            >
              <SelectTrigger className="h-7 w-20 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {FONT_SIZE_OPTIONS.map((size) => (
                  <SelectItem
                    value={String(size)}
                    key={size}
                    className="text-xs"
                  >
                    {size}px
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Row>

          <Row label="Line numbers">
            <Toggle
              checked={config.lineNumbers}
              onChange={(v) => dispatch(setLineNumbers(v))}
            />
          </Row>
        </section>

        <Divider />

        {/* ── FRAME ── */}
        <section className="flex flex-col gap-3">
          <SectionLabel>Frame</SectionLabel>

          {/* Background grid — ray.so style */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs text-muted-foreground">Background</span>
            <div className="grid grid-cols-5 gap-1.5">
              {backgroundPresets.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => dispatch(setBackgroundColor(preset.value))}
                  title={preset.name}
                  className={`relative h-8 overflow-hidden rounded-md transition-transform hover:scale-105 focus:outline-none ${
                    config.backgroundColor === preset.value
                      ? "ring-2 ring-foreground ring-offset-1 ring-offset-card"
                      : "ring-1 ring-white/10"
                  }`}
                >
                  <div
                    style={{ background: preset.value }}
                    className="absolute inset-0"
                  />
                  {(preset.value === "#ffffff" ||
                    preset.value === "#f8fafc") && (
                    <div className="absolute inset-0 border border-border/50 rounded-md" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Padding */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Padding</span>
              <span className="text-xs text-muted-foreground">
                {config.padding}px
              </span>
            </div>
            <input
              type="range"
              min={16}
              max={96}
              step={8}
              value={config.padding}
              onChange={(e) => dispatch(setPadding(Number(e.target.value)))}
              className="slider w-full"
            />
          </div>

          {/* Border radius */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Radius</span>
              <span className="text-xs text-muted-foreground">
                {config.borderRadius}px
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={24}
              step={4}
              value={config.borderRadius}
              onChange={(e) =>
                dispatch(setBorderRadius(Number(e.target.value)))
              }
              className="slider w-full"
            />
          </div>

          <Row label="Shadow">
            <Select
              value={config.shadow}
              onValueChange={(v) => dispatch(setShadow(v as ShadowValue))}
            >
              <SelectTrigger className="h-7 w-24 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {SHADOW_OPTIONS.map((opt) => (
                  <SelectItem
                    value={opt.value}
                    key={opt.value}
                    className="text-xs"
                  >
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Row>
        </section>

        <Divider />

        {/* ── WINDOW ── */}
        <section className="flex flex-col gap-3">
          <SectionLabel>Window</SectionLabel>

          <Row label="Chrome">
            <Toggle
              checked={config.showWindowChrome}
              onChange={(v) => dispatch(setShowWindowChrome(v))}
            />
          </Row>

          <div className="flex flex-col gap-1.5">
            <span className="text-xs text-muted-foreground">Title</span>
            <input
              type="text"
              value={config.windowTitle}
              onChange={(e) => dispatch(setWindowTitle(e.target.value))}
              placeholder="index.ts"
              className="h-7 w-full rounded-md border border-input bg-background px-2 text-xs text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
        </section>

        <Divider />

        {/* ── EXPORT ── */}
        <section className="flex flex-col gap-3">
          <SectionLabel>Export</SectionLabel>

          <Row label="Scale">
            <div className="flex items-center gap-1">
              {EXPORT_SCALES.map((scale) => (
                <button
                  key={scale}
                  onClick={() => dispatch(setExportScale(scale))}
                  className={`h-7 w-8 rounded text-xs transition-colors focus:outline-none ${
                    config.exportScale === scale
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  {scale}x
                </button>
              ))}
            </div>
          </Row>

          <Button
            onClick={downloadImageAsPng}
            size="sm"
            className="h-8 w-full gap-2 text-xs"
          >
            <Download className="h-3.5 w-3.5" />
            Download PNG
          </Button>

          <Button
            onClick={copyImageToClipboard}
            variant="outline"
            size="sm"
            className="h-8 w-full gap-2 text-xs"
          >
            <Clipboard className="h-3.5 w-3.5" />
            Copy Image
          </Button>
        </section>
      </div>
    </aside>
  );
};
