import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export, same as the Endolift sibling site (see docs/decisions.md #3).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
