import { defineConfig, mergeConfig } from "vitest/config";
import defaultConfig from "./vite.config";

const testConfig = defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});

export default mergeConfig(defaultConfig, testConfig);
