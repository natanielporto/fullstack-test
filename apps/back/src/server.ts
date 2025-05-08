import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes";

const MONGO_URI = process.env.MONGO_URI as string;

dotenv.config();

const app = express();
app.use(express.json());
app.use("/users", userRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Fail connecting to MongoDB:", err));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port: ${PORT}`);
});
