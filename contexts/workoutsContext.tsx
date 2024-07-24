import { createContext, ReactNode, useState } from "react";

export const WorkoutsContext = createContext<any|undefined>(undefined)

export const WorkoutsContextProvider = ({children} : {children: ReactNode}) => {
    const [workouts, setWorkouts] = useState<any|null>([])


    return (
        <WorkoutsContext.Provider value= {{workouts, setWorkouts}}>
            {children}
        </WorkoutsContext.Provider>
    );
}