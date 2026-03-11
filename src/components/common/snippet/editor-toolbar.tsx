"use client";

import { useAppSelector } from "@/redux/redux-hooks";

export const EditorToolbar = () => {
  const { windowTitle } = useAppSelector((state) => state.config);

  return (
    <div className="relative flex items-center pb-4">
      <div className="flex items-center gap-1.5">
        <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <div className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>

      {windowTitle && (
        <div className="absolute inset-x-0 flex justify-center pointer-events-none">
          <span
            className="text-xs font-medium"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {windowTitle}
          </span>
        </div>
      )}
    </div>
  );
};
