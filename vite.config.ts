import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: true,
    proxy: {
      "/api": {
        target: "https//some-url-need-to-replaced.com",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
  plugins: [react()],
});

