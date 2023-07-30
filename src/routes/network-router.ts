import { Router } from "express";
import * as networkController from "../controllers/network-controller";
import { joiValidation } from "../middlewares/joi-middleware";
import { authenticateToken } from "../middlewares/token-middleware";
export const networkRouter = Router();

networkRouter.get("", authenticateToken, networkController.allTitles);
networkRouter.get("/:id", authenticateToken, networkController.InfoById);
networkRouter.post("/create", authenticateToken, joiValidation.createNetwork, networkController.newNetwork);
networkRouter.delete("/:id", authenticateToken, networkController.deleteById);