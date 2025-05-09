import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./user/user.routes";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined in the .env file");
}

const app = express();

app.use(express.json());
app.use("/users", userRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Internal Server Error:", err);
  res.status(500).json({ message: "Internal server error" });
});

async function startServer() {
  try {
    await mongoose.connect(MONGO_URI as string);
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
}

startServer();
