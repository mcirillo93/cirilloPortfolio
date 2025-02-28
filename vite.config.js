import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".", // Ensure Vite finds index.html in the project root
  build: {
    outDir: "dist"
  }
});