import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: "./runtimeConfig",
                replacement: "./runtimeConfig.browser",
            },
        ],
    },
});
