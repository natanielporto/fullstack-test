import sharedConfig from "@mosano-test-fullstack/vitest-config";
import path from "path";
import { mergeConfig } from "vitest/config";

export default mergeConfig(sharedConfig, {
  test: {
    globals: true,
    environment: "node",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
