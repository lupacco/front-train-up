import { Slot } from "expo-router";
import { UserContextProvider } from "../contexts/userContext";
import { AuthContextProvider } from "../contexts/authContext";

const RootLayout = () => {
    return (
        <AuthContextProvider>
            <UserContextProvider>
                <Slot/>
            </UserContextProvider>
        </AuthContextProvider>
    );
}

export default RootLayout;