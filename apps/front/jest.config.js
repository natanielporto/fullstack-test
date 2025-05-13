export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      { tsconfig: "<rootDir>/tsconfig.json", useESM: true },
    ],
    "^.+\\.(js|jsx)$": ["babel-jest", { presets: ["next/babel"], esm: true }],
    "^.+\\.ts$": [
      "ts-jest",
      { tsconfig: "<rootDir>/tsconfig.json", useESM: true },
    ],
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "mjs", "cjs"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/__mocks__/(.*)$": "<rootDir>/__mocks__/$1",
  },
  testRunner: "jest-circus/runner",
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
};
