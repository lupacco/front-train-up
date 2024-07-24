import { createContext, ReactNode, useState } from "react";
import { User, UserContextType } from "../@types/types";



export const UserContext = createContext<UserContextType|undefined>(undefined)

export const UserContextProvider = ({children} : {children : ReactNode}) => {
    const [user, setUser] = useState<User|null>(null)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
