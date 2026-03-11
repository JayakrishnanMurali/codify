import { toPng } from "html-to-image";
import { toast } from "sonner";

const useImageGen = () => {
  const downloadImageAsPng = async () => {
    const snippetElement = document.getElementById("snippet");

    if (!snippetElement) return;

    try {
      const dataUrl = await toPng(snippetElement, {
        pixelRatio: 2,
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
        description: "Could not generate the image. Try again.",
      });
    }
  };

  return { downloadImageAsPng };
};

export default useImageGen;
