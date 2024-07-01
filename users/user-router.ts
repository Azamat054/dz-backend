import { Router } from "express";
import userController from "./user-controller";

const userRouter = Router();

userRouter.get("/:email", userController.getUserByEmail);
userRouter.get("/:id", userController.getUserById);
userRouter.post("/", userController.createUser);
userRouter.put("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.get('/', userController.getUser)

export default userRouter;