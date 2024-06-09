import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5170,
    proxy: {
      "/api": {
        target: "https://chat-app-01-backend.onrender.com",
      },
    },
  },
});
