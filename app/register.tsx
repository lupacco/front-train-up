import { View, Text, StyleSheet, TextInput, Platform, Pressable, TouchableOpacity } from "react-native";
import { Link, router } from 'expo-router';
import Ionicons from "@expo/vector-icons/Ionicons"
import { useState } from "react";
import DatePicker from "@react-native-community/datetimepicker"
import { ButtonSubmit } from "../components/ButtonSubmit";
import { fetchInstance } from "../utils/fetchInstances";

export default function RegisterScreen() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');

    const [birthdate, setBirthdate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);


    const toggleDatePicker = () => setShowPicker(!showPicker);

    const confirmIOSDate = () => {
        toggleDatePicker();
    }

    const submitForm = async () => {

        if(password !== confirmPwd){
            console.log("Passwords must be equal")
        } else{
            const request = {
                name,
                username,
                email,
                password,
                birthdate
            }

            const response = await fetchInstance("/register", {
                method: 'POST',
                body: JSON.stringify(request)
            })

            if('error' in response){
                console.log("error")
                console.log(response)
                return;
            } 
            router.push("/login")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Link style={styles.close} href="/">
                    <Ionicons style={styles.closeIcon} name="close" />
                </Link>
                <Text style={styles.logo}>Train up</Text>
            </View>


            <View style={styles.form}>
                <Text style={styles.h1}>Register here</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
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
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="Confirm password"
                    value={confirmPwd}
                    onChangeText={setConfirmPwd}
                />



                {showPicker && (
                    <DatePicker
                        mode="date"
                        value={birthdate}
                        display="spinner"
                        onChange={(event, selectedDate : any) => {
                            const currentDate = selectedDate;
                            setShowPicker(false)
                            setBirthdate(currentDate);
                        }}

                    />
                )}

                <Pressable onPress={toggleDatePicker}>
                    <TextInput
                        style={styles.input}
                        editable={false}
                        placeholder={"Birthdate"}
                        value={birthdate.toDateString()}
                    />
                </Pressable>

                {showPicker && Platform.OS === "ios" && (
                    <>
                        <View>
                            <TouchableOpacity >
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={confirmIOSDate}>
                                <Text>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                        )}
            </View>
            <View style={styles.bottom}>
                    <Link href="/login">
                        <Text style={styles.text}>Already have an account? Sign In</Text>
                    </Link>
                    <Pressable onPress={() => submitForm()}>
                        <ButtonSubmit label="Register" />
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
        marginBottom: 48,
        textAlign: 'center',
        fontFamily: Platform.select({
            android: 'RussoOne_400Regular'
        })
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        margin: 8,
        borderColor: '#c0c0c0',
        color: "#000",
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