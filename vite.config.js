import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  let configs = {
    //   server: {
    //     proxy: {
    //       "/api_data_go_kr": {
    //         target: "https://apis.data.go.kr",
    //         changeOrigin: true,
    //         secure: false,
    //         rewrite: (path) => path.replace(/^\/api/, ""),
    //       },
    //     },
    //   },
    plugins: [vue()],
  };
  if (command === "dev") {
    configs.base = "/"; // for build
    // base: process.env.VITE_BASE_PATH, // for build
  } else {
    configs.base = "/project_yojulab_front/"; // for build
    configs.build = {
      outDir: "docs",
      emptyOutDir: true,
    };
  }
  return defineConfig(configs);
});
