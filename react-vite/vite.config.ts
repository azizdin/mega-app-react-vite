import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      { find: "@data", replacement: path.resolve(__dirname, "src/data") },
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
      { find: "@config", replacement: path.resolve(__dirname, "src/config") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
    ],
  },
  plugins: [react()],
});
