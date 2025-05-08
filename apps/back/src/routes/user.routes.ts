import { Router } from "express";
import { User } from "../models/User";
import { userSchema, userUpdateSchema } from "../schemas/user.schema";

const router = Router();

// Create
router.post("/", async (req, res) => {
  const result = userSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json(result.error.format());

  const newUser = await User.create(result.data);
  res.status(201).json(newUser);
});

// Read
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Update full (PUT)
router.put("/:id", async (req, res) => {
  const result = userSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json(result.error.format());

  const user = await User.findByIdAndUpdate(req.params.id, result.data, {
    new: true,
  });
  res.json(user);
});

// Update parcial (PATCH)
router.patch("/:id", async (req, res) => {
  const result = userUpdateSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json(result.error.format());

  const user = await User.findByIdAndUpdate(req.params.id, result.data, {
    new: true,
  });
  res.json(user);
});

// Delete
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;
