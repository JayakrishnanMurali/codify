"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { codeToHtml } from "shiki";
import { useAppSelector } from "@/redux/redux-hooks";

const SAMPLE_CODE = `// Fibonacci sequence
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(10);
console.log(result); // 55`;

const LIGHT_THEME_BACKGROUNDS = new Set([
  "#ffffff",
  "#eff1f5",
  "#faf4ed",
  "#f8f8f8",
]);

export const Editor = () => {
  const { theme, language, fontSize, lineNumbers } = useAppSelector(
    (state) => state.config,
  );
  const [code, setCode] = useState(SAMPLE_CODE);
  const [highlightedHtml, setHighlightedHtml] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isLightTheme = LIGHT_THEME_BACKGROUNDS.has(theme.bg);
  const caretColor = isLightTheme ? "#111827" : "#e2e8f0";
  const lineNumberColor = isLightTheme
    ? "rgba(0,0,0,0.25)"
    : "rgba(255,255,255,0.2)";

  const fontSizePx = `${fontSize}px`;
  const lineHeightValue = "1.65";

  const sharedStyle: React.CSSProperties = {
    fontFamily:
      "var(--font-geist-mono), ui-monospace, 'Cascadia Mono', monospace",
    fontSize: fontSizePx,
    lineHeight: lineHeightValue,
    tabSize: 2,
    margin: 0,
    padding: 0,
    whiteSpace: "pre",
    overflowWrap: "normal",
    wordBreak: "normal",
  };

  useEffect(() => {
    let cancelled = false;

    codeToHtml(code || " ", {
      lang: language.value,
      theme: theme.value,
      transformers: [
        {
          pre(node) {
            const style = String(node.properties.style ?? "");
            const colorMatch = style.match(/color:\s*[^;]+/);
            node.properties.style = [
              "background: transparent",
              "margin: 0",
              "padding: 0",
              "overflow: visible",
              colorMatch ? colorMatch[0] : "",
            ]
              .filter(Boolean)
              .join("; ");
          },
        },
      ],
    })
      .then((html) => {
        if (!cancelled) setHighlightedHtml(html);
      })
      .catch(() => {
        if (!cancelled) {
          const escaped = code
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
          setHighlightedHtml(
            `<pre style="margin:0;padding:0;background:transparent;color:${caretColor}"><code>${escaped}</code></pre>`,
          );
        }
      });

    return () => {
      cancelled = true;
    };
  }, [code, language.value, theme.value, fontSize]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const target = e.currentTarget;
        const selectionStart = target.selectionStart;
        const selectionEnd = target.selectionEnd;
        const updatedCode =
          code.substring(0, selectionStart) +
          "  " +
          code.substring(selectionEnd);
        setCode(updatedCode);
        requestAnimationFrame(() => {
          target.selectionStart = target.selectionEnd = selectionStart + 2;
        });
      }
    },
    [code],
  );

  const lineCount = code.split("\n").length;
  const lineNumberWidth = lineCount >= 100 ? 36 : lineCount >= 10 ? 28 : 20;

  return (
    <div className="flex min-w-[320px]">
      {/* Line numbers gutter */}
      {lineNumbers && (
        <div
          className="select-none pr-4 text-right"
          style={{
            width: `${lineNumberWidth}px`,
            fontFamily:
              "var(--font-geist-mono), ui-monospace, 'Cascadia Mono', monospace",
            fontSize: fontSizePx,
            lineHeight: lineHeightValue,
            color: lineNumberColor,
            flexShrink: 0,
          }}
        >
          {Array.from({ length: lineCount }, (_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
      )}

      {/* Editor: highlighted pre + textarea overlay in same grid cell */}
      <div className="relative grid flex-1">
        <div
          className="pointer-events-none select-none overflow-visible [grid-area:1/1]"
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          style={sharedStyle}
          aria-hidden
        />
        <textarea
          ref={textareaRef}
          className="resize-none overflow-hidden border-none bg-transparent outline-none [grid-area:1/1]"
          style={{
            ...sharedStyle,
            color: "transparent",
            caretColor,
            WebkitTextFillColor: "transparent",
          }}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          data-gramm="false"
        />
      </div>
    </div>
  );
};
