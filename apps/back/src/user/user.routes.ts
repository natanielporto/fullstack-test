import { Router } from "express";
import * as UserController from "./user.controller";
import { asyncHandler } from "../utils/asyncHandlers";

const router = Router();

router
  .route("/")
  .post(asyncHandler(UserController.createUser))
  .get(asyncHandler(UserController.getUsers));

router
  .route("/:id")
  .put(asyncHandler(UserController.updateUser))
  .patch(asyncHandler(UserController.patchUser))
  .delete(asyncHandler(UserController.deleteUser));

export default router;
