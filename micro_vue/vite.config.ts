import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base: mode === "development" ? "/micro" : "/micro",
    plugins: [
      vue(),
      qiankun("micro", {
        useDevMode: true
      })
    ],
    server: {
      host: "0.0.0.0",
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }
  });
};
