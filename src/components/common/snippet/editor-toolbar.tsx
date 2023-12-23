import React from "react";

export const EditorToolbar = () => {
  return (
    <div className="flex items-center space-x-2 pb-4">
      <div className="h-3 w-3 rounded-full bg-red-500"></div>
      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
      <div className="h-3 w-3 rounded-full bg-green-500"></div>
    </div>
  );
};
