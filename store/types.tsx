import type { Client as Appwrite } from "appwrite";

type User = {
    $id: string;
    email: string;
    name: string;
};

export type {
  User
}