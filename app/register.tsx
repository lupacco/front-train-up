import { View, Text, StyleSheet, TextInput, Platform, Pressable, TouchableOpacity } from "react-native";
import { Button } from "../components/Button";
import { Link } from 'expo-router';
import Ionicons from "@expo/vector-icons/Ionicons"
import { useEffect, useState } from "react";
import DatePicker from "@react-native-community/datetimepicker"

export default function RegisterScreen() {

    const formatDate = (rawDate: any) => {
        let date = new Date(rawDate);

        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();

        return `${year}-${month}-${day}`
    }

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');

    const [date, setDate] = useState(new Date());
    const [birthdate, setBirthdate] = useState(formatDate(date));
    const [showPicker, setShowPicker] = useState(false);

    const toggleDatePicker = () => setShowPicker(!showPicker);
    const onChange = ({ type }: any, selectedDate: any) => {
        if (type == "set") {
            const currentDate = selectedDate;
            setDate(currentDate);

            if (Platform.OS === "android") {
                toggleDatePicker();
                setBirthdate(formatDate(currentDate));
            }
            
        } else {
            toggleDatePicker();
        }
    }
    const confirmIOSDate = () => {
        setBirthdate(date.toDateString());
        toggleDatePicker();
    }

    

    useEffect(() => {
        console.log("birthdate: "+birthdate + " type: "+typeof(birthdate));
        console.log("date: "+ date.toDateString()+ " type: "+typeof(date));
    } , [birthdate])

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
                        value={date}
                        display="spinner"
                        onChange={onChange}

                    />
                )}

                <Pressable onPress={toggleDatePicker}>
                    <TextInput
                        style={styles.input}
                        editable={false}
                        placeholder={"Birthdate"}
                        value={date.toDateString()}
                        onChangeText={setBirthdate}
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
                    </View><View style={styles.bottom}>
                            <Link href="/login">
                                <Text style={styles.text}>Already have an account? Sign In</Text>
                            </Link>
                            <Button label="Sign In" />
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
    submit: {
        backgroundColor: 'red'
    },
    text: {
        fontFamily: Platform.select({
            android: 'Inter_400Regular'
        })
    }

});