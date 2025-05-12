import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import { errorHandler } from "./middlewares/errorHandler.js";
import userRoutes from "./user/user.routes.js";

dotenv.config();

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASS = process.env.MONGO_PASS;
const MONGO_DB = process.env.MONGO_DB;

if (!MONGO_USER || !MONGO_PASS) {
  throw new Error("MONGO_USER or MONGO_PASS is not defined in the .env file");
}

const MONGO_URI = `mongodb://${MONGO_USER}:${MONGO_PASS}@localhost:27017/${MONGO_DB}?authSource=admin`;

const PORT = process.env.PORT || 3000;

if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined in the .env file");
}

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/users", userRoutes);
app.use(errorHandler);

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
