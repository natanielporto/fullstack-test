import { Request, Response } from "express";
import { userSchema, userUpdateSchema } from "@mosano-test-fullstack/schemas";
import * as UserRepository from "./user.repository";

export async function createUser(req: Request, res: Response) {
  const result = userSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json(result.error.format());

  const newUser = await UserRepository.createUser(result.data);
  return res.status(201).json(newUser);
}

export async function getUsers(req: Request, res: Response) {
  const users = await UserRepository.findAllUsers();
  return res.json(users);
}

export async function updateUser(req: Request, res: Response) {
  const result = userSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json(result.error.format());

  const user = await UserRepository.updateUser(req.params.id, result.data);
  return res.json(user);
}

export async function patchUser(req: Request, res: Response) {
  const result = userUpdateSchema.safeParse(req.body);
  if (!result.success) return res.status(400).json(result.error.format());

  const user = await UserRepository.updateUser(req.params.id, result.data);
  return res.json(user);
}

export async function deleteUser(req: Request, res: Response) {
  await UserRepository.deleteUser(req.params.id);
  return res.status(204).send();
}
