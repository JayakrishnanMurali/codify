import { Loader2 } from "lucide-react";
import React from "react";

export const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <Loader2 className="h-10 w-10 animate-spin text-primary" />
    </div>
  );
};
