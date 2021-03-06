import { Client as Appwrite, Account, Databases } from "appwrite";
import { atom } from "recoil";
import { User } from "./types";

export const Server = {
    endpoint: process.env.REACT_APP_ENDPOINT || "",
    project: process.env.REACT_APP_PROJECT || "",
    collectionID: process.env.REACT_APP_COLLECTION_ID || "",
    databaseID: process.env.REACT_APP_DATABASE_ID || "",
};

export const client = new Appwrite()
    .setEndpoint(Server.endpoint)
    .setProject(Server.project);
const account = new Account(client);
const database = new Databases(client, Server.databaseID);

export const appwrite = { account, database };


export const userState = atom<User>({
    key: "user",
    default: null,
});