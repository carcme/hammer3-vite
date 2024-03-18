import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { splitVendorChunkPlugin } from "vite";

import { dependencies } from "./package.json";

const reactDeps = Object.keys(dependencies).filter(
  (key) => key === "react" || key.startsWith("react-")
);

const manualChunks = {
  vendor: reactDeps,
  ...Object.keys(dependencies).reduce((chunks, name) => {
    if (!reactDeps.includes(name)) {
      chunks[name] = [name];
    }
    return chunks;
  }, {}),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
