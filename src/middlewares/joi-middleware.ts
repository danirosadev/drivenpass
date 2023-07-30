import { noteSchema } from "../schemas/note-schema";
import { cardSchema } from "../schemas/card-schema";
import { signInSchema, signUpSchema } from "../schemas/users-schema";
import { networkSchema } from "../schemas/network-schema";
import { credentialSchema } from "../schemas/credential-schema";
import { Request, Response, NextFunction } from "express";
import { ErrorInfo } from "./error-middleware";

export const joiValidation = {
    signUp: (req: Request, _res:Response, next: NextFunction) => {
        const request = req.body;
        const validation = signUpSchema.validate(request, {abortEarly: false});
        if(validation.error) throw new ErrorInfo("error_unprocessable_entity", validation.error.message);
        next();
    },
    signIn: (req: Request, _res:Response, next: NextFunction) => {
        const request = req.body;
        const validation = signInSchema.validate(request, {abortEarly: false});
        if(validation.error) throw new ErrorInfo("error_unprocessable_entity", validation.error.message);
        next();
    },
    createCard: (req: Request, _res:Response, next: NextFunction) => {
        const request = req.body;
        const validation = cardSchema.validate(request, {abortEarly: false});
        if(validation.error) throw new ErrorInfo("error_unprocessable_entity", validation.error.message);
        next();
    },
    createCredential:(req: Request, _res:Response, next: NextFunction) =>{
        const request = req.body;
        const validation = credentialSchema.validate(request, {abortEarly: false});
        if(validation.error) throw new ErrorInfo("error_unprocessable_entity", validation.error.message);
        next();
    },
    createNetwork:(req: Request, _res:Response, next: NextFunction) =>{
        const request = req.body;
        const validation = networkSchema.validate(request, {abortEarly: false});
        if(validation.error) throw new ErrorInfo("error_unprocessable_entity", validation.error.message);
        next();
    },
    createNote:(req: Request, _res:Response, next: NextFunction) =>{
        const request = req.body;
        const validation = noteSchema.validate(request, {abortEarly: false});
        if(validation.error) throw new ErrorInfo("error_unprocessable_entity", validation.error.message);
        next();
    },
}