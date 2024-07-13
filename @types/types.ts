import { Float } from "react-native/Libraries/Types/CodegenTypes";

export type User = {
    id: string,
    username: string,
    email: string,
    name: string,
    birthdate: Date,
    password: string
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