import { Slot } from "expo-router";
import { UserContextProvider } from "../contexts/userContext";
import { AuthContextProvider } from "../contexts/authContext";
import { WorkoutsContextProvider } from "../contexts/workoutsContext";

const RootLayout = () => {
    return (
        <AuthContextProvider>
            <UserContextProvider>
                <WorkoutsContextProvider>
                    <Slot/>
                </WorkoutsContextProvider>
            </UserContextProvider>
        </AuthContextProvider>
    );
}

export default RootLayout;