import React, { useCallback } from "react";

export const useExternalRouter = () => {
  const push = useCallback((link: string) => {
    window.open(link, "_blank");
  }, []);

  return { push };
};
