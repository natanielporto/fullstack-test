import sharedConfig from "@mosano-test-fullstack/vitest-config";
import { mergeConfig } from "vitest/config";
import path from "path";

export default mergeConfig(sharedConfig, {
  test: {
    globals: true,
    environment: "node",
    include: ["src/**/__tests__/*.test.ts"],
    root: "./",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
