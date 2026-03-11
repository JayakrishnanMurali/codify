export interface BackgroundPreset {
  name: string;
  value: string;
}

export const backgroundPresets: BackgroundPreset[] = [
  // Dark gradients
  {
    name: "Midnight",
    value: "linear-gradient(140deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
  },
  {
    name: "Galaxy",
    value: "linear-gradient(140deg, #0d1117 0%, #161b22 100%)",
  },
  {
    name: "Ocean",
    value: "linear-gradient(140deg, #020617 0%, #0f172a 50%, #1e3a5f 100%)",
  },
  {
    name: "Storm",
    value: "linear-gradient(140deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  },
  {
    name: "Void",
    value: "linear-gradient(140deg, #09090b 0%, #27272a 100%)",
  },
  {
    name: "Violet",
    value: "linear-gradient(140deg, #1a0533 0%, #2d0748 100%)",
  },
  {
    name: "Royal",
    value: "linear-gradient(140deg, #3b1f6b 0%, #6b21a8 100%)",
  },
  {
    name: "Iris",
    value: "linear-gradient(140deg, #667eea 0%, #764ba2 100%)",
  },
  // Vivid gradients
  {
    name: "Flamingo",
    value: "linear-gradient(140deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    name: "Sky",
    value: "linear-gradient(140deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    name: "Mint",
    value: "linear-gradient(140deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    name: "Sunset",
    value: "linear-gradient(140deg, #fa709a 0%, #fee140 100%)",
  },
  {
    name: "Mango",
    value: "linear-gradient(140deg, #f7971e 0%, #ffd200 100%)",
  },
  {
    name: "Fire",
    value: "linear-gradient(140deg, #f12711 0%, #f5af19 100%)",
  },
  {
    name: "Aurora",
    value: "linear-gradient(140deg, #a18cd1 0%, #fbc2eb 100%)",
  },
  {
    name: "Peach",
    value: "linear-gradient(140deg, #ffecd2 0%, #fcb69f 100%)",
  },
  // Light gradients
  {
    name: "Ice",
    value: "linear-gradient(140deg, #e0f2fe 0%, #bae6fd 100%)",
  },
  {
    name: "Spring",
    value: "linear-gradient(140deg, #f0fdf4 0%, #bbf7d0 100%)",
  },
  {
    name: "Rose",
    value: "linear-gradient(140deg, #fdf2f8 0%, #fce7f3 100%)",
  },
  {
    name: "Lavender",
    value: "linear-gradient(140deg, #eff6ff 0%, #dbeafe 100%)",
  },
  // Solids
  { name: "Pitch", value: "#000000" },
  { name: "Obsidian", value: "#0a0a0a" },
  { name: "Onyx", value: "#18181b" },
  { name: "Slate", value: "#1e293b" },
  { name: "Snow", value: "#ffffff" },
  { name: "Pearl", value: "#f8fafc" },
];

// Legacy export kept for backward compat
export const wrapperColors = {
  gradients: backgroundPresets
    .filter((p) => p.value.startsWith("linear"))
    .map((p) => p.value),
  solid: backgroundPresets
    .filter((p) => !p.value.startsWith("linear"))
    .map((p) => p.value),
};
