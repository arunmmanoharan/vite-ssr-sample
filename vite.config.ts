import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import path from "path";
import { includes, split } from "lodash";
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), tsconfigPaths(), viteCommonjs(), react()],
  ...(process.env.NODE_ENV === 'production' ? { ssr: {noExternal: ["@mui/material", "@mui/utils", "@mui/base", "@mui/icons-material"]} } : {}),
  server: { port: 3000 },
  build: {
    minify: false,
    chunkSizeWarningLimit: 1500,
    outDir: path.resolve(__dirname, "build"),
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (includes(id, "node_modules")) {
            return split(split(id.toString(), "node_modules/")[1], "/")[0].toString();
          }
        },
      },
    },
  },
  // @ts-ignore
});
