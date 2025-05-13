import { Request, Response } from "express";
import { describe, expect,it, vi } from "vitest";

import { asyncHandler } from "../asyncHandlers.js";

describe("asyncHandler", () => {
  it("should call next with error when promise rejects", async () => {
    const req = {} as Request;
    const res = {} as Response;
    const next = vi.fn();

    const error = new Error("Test error");
    const failingHandler = async () => {
      throw error;
    };

    const wrapped = asyncHandler(failingHandler);

    await wrapped(req, res, next);

    expect(next).toHaveBeenCalledWith(error);
  });

  it("should execute the handler without error", async () => {
    const req = {} as Request;
    const res = {} as Response;
    const next = vi.fn();

    const successHandler = vi.fn().mockResolvedValue(undefined);

    const wrapped = asyncHandler(successHandler);

    await wrapped(req, res, next);

    expect(successHandler).toHaveBeenCalled();
    expect(next).not.toHaveBeenCalledWith(expect.any(Error));
  });
});
