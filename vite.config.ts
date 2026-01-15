import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

import { existsSync } from "fs";

// Plugin to handle all imports from src/ (both /path and path)
const srcAliasPlugin = () => {
  return {
    name: "src-alias",
    resolveId(id: string) {
      // Skip URLs, data URIs, and relative imports
      if (id.includes("://") || id.startsWith("data:") || id.startsWith(".")) {
        return null;
      }

      let resolved: string;

      // Handle imports starting with / (but not //)
      if (id.startsWith("/") && !id.startsWith("//")) {
        resolved = path.resolve(__dirname, "./src", id.slice(1));
      }
      // Handle bare imports - try resolving from src/
      else if (!id.startsWith("/")) {
        resolved = path.resolve(__dirname, "./src", id);
      } else {
        return null;
      }

      // Check if file exists (with common extensions)
      const extensions = [
        "",
        ".tsx",
        ".ts",
        ".jsx",
        ".js",
        "/index.tsx",
        "/index.ts",
        "/index.jsx",
        "/index.js",
      ];
      for (const ext of extensions) {
        const fullPath = resolved + ext;
        if (existsSync(fullPath)) {
          return fullPath;
        }
      }

      // File doesn't exist in src/, let Vite try node_modules
      return null;
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), srcAliasPlugin()],
  server: {
    port: 3000,
    open: true,
  },
  publicDir: "public",
});
