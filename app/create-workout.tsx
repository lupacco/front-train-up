import { Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons"
import { Link, router } from "expo-router";
import { useState } from "react";
import ExercisesContainer from "../components/ExercisesContainer";

export default function CreateWorkoutScreen(){
    const [name, setName] = useState("");
    const [selectedIcon, setSelectedIcon] = useState(0)

    const createWorkout = () => {
        router.push("/home");
    }

    const icons = [
        6 , 1, 7 , 3, 4
    ]

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Link style={styles.close} href="/home">
                    <Ionicons style={styles.closeIcon} name="close"/>                
                </Link>
                <Text style={styles.h1}>Create your workout</Text>
            </View>

            <View style={styles.form}>
                <View style={styles.formField}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                <View style={styles.formField}>
                    <Text style={styles.label}>Icon</Text>
                    <ScrollView horizontal>
                        <View style={styles.iconsContainer}>

                            {icons.map((e, index)=> (
                                <Pressable onPress={e => {setSelectedIcon(index)}} style={[styles.iconBox, index === selectedIcon ? {borderColor: 'yellow', borderWidth: 3} : {}]}>
                                    <Ionicons style={styles.icon} name="barbell"/> 
                                </Pressable>
                            ))}                                                       
                            
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.formField}>
                    <Text style={styles.label}>Exercises</Text>
                    <ExercisesContainer/>
                </View>

                
            </View>

            <View style={styles.bottom}>
                <Pressable onPress={createWorkout} style={styles.createBtn}>
                    <Text style={styles.btnText}>Create</Text>
                </Pressable>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        position: 'relative',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 4,
        paddingVertical: 8,
        borderBottomColor: "#c0c0c0",
        borderBottomWidth: 1
    },
    close: {
        position: 'absolute',
        left: 16
    },
    closeIcon: {
        fontSize: 32,
        color: '#c0c0c0'
    },
    h1: {
        fontSize: 24,
            fontFamily: Platform.select({
                android: 'RussoOne_400Regular'
            })
    },
    form: {
        width: '100%',
        height: 650,
        padding: 24,

    },
    formField: {
        marginBottom: 32,
    },
    label: {
        fontSize: 18,
        fontFamily: Platform.select({
            android: 'RussoOne_400Regular'
        }),
        color: '#c0c0c0',
        marginBottom: 12,
    },
    input: {
        borderColor: '#c0c0c0',
        borderWidth: 1,
        borderRadius: 10,
        height: 48,
        fontSize: 10,
        paddingLeft: 8,
        fontFamily: Platform.select({
            android: 'Inter_400Regular'
        })
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    iconBox: {
        width: 72,
        height: 72,
        borderWidth: 1,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16
    },
    icon: {
        fontSize: 48,
    },
    
    bottom: {
        alignItems: 'center'
    },
    createBtn: {
        backgroundColor: '#589057',
        width: 128,
        height: 128,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontFamily: Platform.select({
            android: 'RussoOne_400Regular'
        }),
        fontSize: 24,
        color: '#fff'
    }

})