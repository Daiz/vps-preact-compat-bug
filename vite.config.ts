import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tsConfigPaths from "vite-tsconfig-paths";
import ssr from "vite-plugin-ssr/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsConfigPaths(), preact(), ssr()],
});
