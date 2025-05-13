import { Request, Response } from "express";
import { describe, expect, it, vi } from "vitest";

import { errorHandler } from "../errorHandler.js";

describe("errorHandler", () => {
  it("should log the error and send a 500 response", () => {
    const mockErr = new Error("Test error");
    const mockReq = {} as Request;
    const mockRes = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;

    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    errorHandler(mockErr, mockReq, mockRes);

    expect(consoleSpy).toHaveBeenCalledWith("Internal Server Error:", mockErr);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "Internal server error",
    });

    consoleSpy.mockRestore();
  });
});
