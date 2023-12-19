import React from "react";
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex flex-col items-center justify-center gap-y-2">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <p className="hidden text-center text-sm text-muted-foreground">
          Please wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;
