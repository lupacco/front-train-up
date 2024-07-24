import { createContext, ReactNode, useState } from "react";
import { Authentication, AuthenticationContextType } from "../@types/types";

export const AuthContext = createContext<AuthenticationContextType|undefined>(undefined)

export const AuthContextProvider = ({children} : {children : ReactNode}) => {
    const [auth, setAuth] = useState<Authentication|null>(null)

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    );
}