import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "/jutamanee.github.io/", // ชื่อ repo ของคุณ
  plugins: [vue()],
});
