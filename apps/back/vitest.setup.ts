if (typeof window !== "undefined") {
  import("@testing-library/jest-dom/matchers").then(({ default: matchers }) => {
    import("vitest").then(({ expect }) => {
      expect.extend(matchers);
    });
  });
}
