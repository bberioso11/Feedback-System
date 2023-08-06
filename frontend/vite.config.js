import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/authenticate": "http://localhost:3000",
      "/api": "http://localhost:3000",
    },
    changeOrigin: true,
  },
  plugins: [react()],
});
