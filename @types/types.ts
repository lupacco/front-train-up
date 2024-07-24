import { Float } from "react-native/Libraries/Types/CodegenTypes";

export type User = {
    id: string | undefined,
    username: string | undefined,
    email: string | undefined,
    name: string | undefined,
    birthdate: Date | undefined,
    password: string | undefined, //todo remove,
}

export type Authentication = {
    token: string | undefined,
    refreshToken: string | undefined
}

export interface UserContextType {
    user: User | null;
    setUser: (user: User) => void;
}

export interface AuthenticationContextType {
    auth: Authentication | null,
    setAuth: (auth: Authentication) => void
}

export type Workout = {
    name: string
}

export type Exercise = {
    name: string,
    series: number,
    reps: number[]
    weight: Float[]
};

export interface AuthRequest {
    username: string;
    password: string;
}