import { View, Text, StyleSheet, TextInput, Platform, Pressable } from "react-native";
import { Link } from 'expo-router';
import { ButtonSubmit } from "../components/ButtonSubmit";
import { useContext, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons"
import { router } from "expo-router";
import { fetchInstance } from "../utils/fetchInstances";
import { AuthContext } from "../contexts/authContext";
import { AuthenticationContextType, User, UserContextType } from "../@types/types";
import { UserContext } from "../contexts/userContext";

export default function LoginScreen(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const {setAuth} = useContext(AuthContext) as AuthenticationContextType
    const {setUser} = useContext(UserContext) as UserContextType
        
    const submitForm = async () => {
        
        const response = await fetchInstance("/authenticate", {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            })
        })

        if('error' in response){
            console.log("error")
            setError(true)
            return;
        } 
        setError(false)
        setAuth(response)

        const userToRequest ={
            username: username
        } as User 

        setUser(userToRequest)
        
        router.push('/home')
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            
                <Link style={styles.close} href="/">
                    <Ionicons style={styles.closeIcon} name="close"/>                
                </Link>
                <Text style={styles.logo}>Train up</Text>
            </View>


            <View style={styles.form}>
                <Text style={styles.h1}>Sign in with an existing account</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                />
                <Pressable>
                    <Text style={styles.text}>Forgot your password?</Text>
                </Pressable>
                <Text>{error === true && 'Authentication error'}</Text>
            </View>

            <View style={styles.bottom}>
                <Link href="/register">
                    <Text style={styles.text}>Don't have an account? Register here!</Text>
                </Link>

                <Pressable onPress={submitForm}>
                    <ButtonSubmit label="Sign In"/>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      height: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative'
    },
    header: {
        margin: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        padding: 8,
        position: "relative",
        
    },
    close: {
        position: 'absolute',
        left: 16
    },
    closeIcon: {
        fontSize: 40,
        color: '#c0c0c0'
    },
    logo: {
        fontSize: 20,
        fontFamily: Platform.select({
            android: 'RussoOne_400Regular'
        })
    },
    h1: {
        fontSize: 24,
        width: 300,
        margin: 48,
        textAlign: 'center',
        fontFamily: Platform.select({
            android: 'RussoOne_400Regular'
        })
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 128
    },
    input: {
        margin: 8,
        borderColor: '#c0c0c0',
        borderWidth: 1,
        borderRadius: 5,
        width: 360,
        height: 64,
        fontSize: 10,
        paddingLeft: 8,
        fontFamily: Platform.select({
            android: 'Inter_400Regular'
        })
    },
    bottom: {
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        fontFamily: Platform.select({
            android: 'Inter_400Regular'
        })
    }

  });