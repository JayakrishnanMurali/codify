import { toPng } from "html-to-image";
import { toast } from "sonner";
import { useAppSelector } from "@/redux/redux-hooks";

const useImageGen = () => {
  const { exportScale } = useAppSelector((state) => state.config);

  const getSnippetElement = () => document.getElementById("snippet");

  const downloadImageAsPng = async () => {
    const snippetElement = getSnippetElement();
    if (!snippetElement) return;

    try {
      const dataUrl = await toPng(snippetElement, {
        pixelRatio: exportScale,
        skipFonts: false,
      });

      const downloadLink = document.createElement("a");
      downloadLink.href = dataUrl;
      downloadLink.download = `codify-${Date.now()}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch {
      toast.error("Export failed", {
        description: "Could not generate the image.",
      });
    }
  };

  const copyImageToClipboard = async () => {
    const snippetElement = getSnippetElement();
    if (!snippetElement) return;

    try {
      const dataUrl = await toPng(snippetElement, {
        pixelRatio: exportScale,
        skipFonts: false,
      });

      const response = await fetch(dataUrl);
      const blob = await response.blob();

      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);

      toast.success("Copied to clipboard");
    } catch {
      toast.error("Copy failed", {
        description: "Your browser may not support clipboard image writing.",
      });
    }
  };

  return { downloadImageAsPng, copyImageToClipboard };
};

export default useImageGen;
