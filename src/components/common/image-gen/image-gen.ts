"use client";

import domToImage from "dom-to-image";
import { toast } from "sonner";

export const imageGen = async () => {
  const htmlNode = document.getElementById("snippet");

  if (htmlNode) {
    try {
      const dataUrl = await domToImage.toPng(htmlNode);
      if (dataUrl) {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = new Date().toISOString() + ".png";
        document.body.appendChild(link);
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
      }
    } catch (error) {
      toast.error("Error generating image", {
        description: "Something went wrong while generating the image.",
      });
    }
  }
};
