import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-ignore just for the import
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
});
