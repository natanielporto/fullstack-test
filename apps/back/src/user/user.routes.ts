import { Router } from "express";

import { asyncHandler } from "../utils/asyncHandlers.js";
import * as UserController from "./user.controller.js";

const router = Router();

router
  .route("/")
  .post(asyncHandler(UserController.createUser))
  .get(asyncHandler(UserController.getUsers));

router
  .route("/:id")
  .get(asyncHandler(UserController.getUser))
  .put(asyncHandler(UserController.updateUser))
  .delete(asyncHandler(UserController.deleteUser));

export default router;
