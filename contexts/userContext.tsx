import { createContext, ReactNode, useState } from "react";
import { User } from "../@types/types";

export const UserContext = createContext<User|undefined>(undefined)

export const UserContextProvider = ({children} : {children : ReactNode}) => {
    const [user, setUser] = useState<User|null>(null)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
