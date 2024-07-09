import { View, Text, StyleSheet, TextInput, Platform, Pressable } from "react-native";
import { Link } from 'expo-router';
import { ButtonSubmit } from "../components/ButtonSubmit";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons"
import { router } from "expo-router";

export default function LoginScreen(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    type User = {
        id: string,
        username: string,
        email: string,
        name: string,
        birthdate: Date,
        password: string
    }

    const users: User[] = [
        {
            id: "aa2bc0c3-45cd-4a10-ad10-109c0a0d03da",
            username: "lucas",
            email: "lucas@email.com",
            name: "lucas pagotto",
            password: "senha",
            birthdate: new Date("1999-04-20")
        },
        {
            id: "bb2bc0c3-45cd-4a10-ad10-109c0a0d03db",
            username: "henry",
            email: "henry@email.com",
            name: "Pedro Henrique",
            password: "senha",
            birthdate: new Date("2000-06-10")
        }

    ]

    const submitForm = () => {

        let lucas = users[0]

        if(email != lucas.email || password != lucas.password){
            console.log("Email or password is wrong")
        } else{
            console.log(lucas)
            router.push("/home")
        }
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
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                />
                <Text style={styles.text}>Forgot your password?</Text>
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
        margin: 24,
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