import { Request, Response } from "express";

export function errorHandler(err: Error, req: Request, res: Response) {
  console.error("Internal Server Error:", err);
  res.status(500).json({ message: "Internal server error" });
}
