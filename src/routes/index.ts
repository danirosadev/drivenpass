import { Router } from "express";
import { userRouter } from "./users-router";
import { credentialRouter } from "./credential-router";
import { networkRouter } from "./network-router";

export const router = Router();

router.use("/users", userRouter);
router.use("/credentials", credentialRouter);
router.use("/networks", networkRouter);