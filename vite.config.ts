import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "/my-vue-site/", // ชื่อ repo ของคุณ
  plugins: [vue()],
});
