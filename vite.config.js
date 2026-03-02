import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    proxy: {
      "/api/1inch": {
        target: "https://api.1inch.dev",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/1inch/, ""),
      },
    },
  },
});
