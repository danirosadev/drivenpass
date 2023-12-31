import { Network } from "@prisma/client";
import * as networkRepository from "../repositories/network-repository";
import { ErrorInfo } from "../middlewares/error-middleware";
import { TitlesList } from "../types/users-types";
import * as userValidator from "../utils/validators/users-validators";
import { securityUtils } from "../utils/handlers/security-handlers";
import { IInsertNetwork, INetworkRequest } from "../interfaces/network-interface";

export async function getAllCredentials (userId: string){
    const response: TitlesList | null = await networkRepository.networkTitles(userId);
    return response;
};

export async function getCredentialById (userId: string, id: string){
    const network : Network = await ensureNetworkExists(id);
    await userValidator.checkIfBelongsToUser(userId, network);
    const decryptedNetwork = securityUtils.decryptObjectPassword(network);
    return decryptedNetwork;
};

export async function createNetwork(request: INetworkRequest, userId: string){
    const network : IInsertNetwork = {...request, userId};
    const encryptedNetwork = await securityUtils.encryptObjectPassword(network);
    await networkRepository.insertData(encryptedNetwork as IInsertNetwork);
};

export async function deleteNetworkById(userId:string, id: string){
    const network: Network= await ensureNetworkExists(id);
    await userValidator.checkIfBelongsToUser(userId, network);
    await networkRepository.deleteById(id);
};

async function ensureNetworkExists(id: string){
    const network: Network | null = await networkRepository.searchById(id);
    if(!network) throw new ErrorInfo("error_not_found", "This network doesn't exists");
    return network;
};