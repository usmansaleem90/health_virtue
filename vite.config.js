import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from 'vite-plugin-pwa'



const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ['logo_.png' ],
  manifest: 
  {
    name: "New Health Virtue",
    short_name: "Health Virtue",
    description: "An app that helps the patients to find them peace.",
    icons: [
      
      {
        src: "./logo_.png",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
        purpose:"mastable any"
      },
      {
        src: '/logo_.png',
        sizes:'192x192',
        type:'image/png',
        purpose:"mastable any"
      },
      {
        src: "./logo_.png",
        sizes: "512x512",
        type: "image/png",
        purpose:"mastable any"
      },
    ],
    theme_color: "#181818",
    background_color: "#e8eac2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
  
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  server: {
    port: 3000,  // Change to your desired port
  },
  plugins: [react(), VitePWA(manifestForPlugin)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});