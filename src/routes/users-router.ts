import { Router } from "express";
import * as userController from "../controllers/users-controller";
import { joiValidation } from "../middlewares/joi-middleware";
import { authenticateToken } from "../middlewares/token-middleware";

export const userRouter = Router();

userRouter.post("/sign-up", joiValidation.signUp, userController.signUp);
userRouter.post("/sign-in", joiValidation.signIn, userController.signIn);
userRouter.get("/categories-count", authenticateToken, userController.sumOfEachType)