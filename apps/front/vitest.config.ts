import { mergeConfig } from "vitest/config";
import sharedConfig from "@mosano-test-fullstack/vitest-config";
import path from "path";

export default mergeConfig(sharedConfig, {
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
