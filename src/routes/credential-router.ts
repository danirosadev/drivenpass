import { Router } from "express";
import * as credentialController from "../controllers/credential-controller";
import { authenticateToken } from "../middlewares/token-middleware";
import { joiValidation } from "../middlewares/joi-middleware";
export const credentialRouter = Router();

credentialRouter.get("", authenticateToken, credentialController.allTitles);
credentialRouter.get("/:id", authenticateToken, credentialController.infoById);
credentialRouter.post("/create", authenticateToken, joiValidation.createCredential, credentialController.newCredential);
credentialRouter.delete("/:id", authenticateToken, credentialController.deleteById);