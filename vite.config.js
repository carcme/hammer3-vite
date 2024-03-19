import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path, { resolve } from "path";
import { splitVendorChunkPlugin } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react(), splitVendorChunkPlugin()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@public": path.resolve(__dirname, "./public"),
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        about: resolve(root, "about", "index.html"),
        booking: resolve(root, "booking", "index.html"),
        contact: resolve(root, "contact", "index.html"),
        faq: resolve(root, "faq", "index.html"),
        gallery: resolve(root, "gallery", "index.html"),
        mystery: resolve(root, "mystery", "index.html"),
      },
    },
  },
});
