const promptData = [
  {
    style: "Minimalist",
    prompt:
      "minimalistic vector art, centered, 3D, symmetrical, monochromatic, minimalistic, vivid colors and gradients, 4k, artstation, centered",
  },
  {
    style: "Metallic",
    prompt:
      "metallic iridesecnt material, 3D render isometric perspective, centered, vector art, symmetrical, minimalistic, vivid colors",
  },
  {
    style: "Polygon",
    prompt:
      "vector art, symmetrical, digital painting, low poly, artstation, polygonal, 4k, darkish background, centered",
  },
  {
    style: "Pixelated",
    prompt:
      "densley packed pixelated, symetrical, minimalistic icon, centered, 3D, vector art, 4k, artstation, darkish background",
  },
  {
    style: "Clay",
    prompt:
      "clay render, isometric perspective on diffused light, centered, vector art, symmetrical, minimalistic, vivid color, centered",
  },
  {
    style: "Gradient",
    prompt:
      "minimalisc icon, gradient, vivid colors and gradients, 4k, artstation, centered",
  },
  {
    style: "Flat",
    prompt:
      "flat icon design, 2d vector art, minimal colors, sharp edges, 4k, artstatiom, darkish background, centered",
  },
  {
    style: "Illustrated",
    prompt:
      "drawn art, drawing, sketch, illustrative, centered, symetrical, vivid colors and gradients, darkish background, 4k,artstation",
  },
  {
    style: "Realism",
    prompt:
      "realistic, realism, 3D render, isometric perspective, centered, vector art, symmetrical, minimalistic, vivid colors and gradient",
  },
];

export function generatePrompt(
  prompt: string,
  color: string,
  style: string,
  type: string,
  shape: string
): string {
  const keywords = promptData.find((item) => item.style === style);

  return `${prompt}, ${color}, ${type}, ${shape} app icon, ${
    keywords?.prompt || ""
  }`;
}
