import { Item } from "./item";

export interface User extends Item {
    email: string;
    names: string;
    lastNames: string;
    photoURL?: string;
    emailVerified?: boolean;
    password?: string;
}