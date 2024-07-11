import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ExercisesContainer() {
    const [selectedExercise, setSelectedExercise] = useState<number|null>(null);


    type Exercise = {
        name: string
    }

    const exercises: Exercise[] = [
        {
            name: "Exercise"
        },
        {
            name: "Exercise"
        },
        {
            name: "Exercise"
        },
        {
            name: "Exercise"
        },
        {
            name: "Exercise"
        },
        // {
        //     name: "Exercise"
        // },
        // {
        //     name: "Exercise"
        // },
        // {
        //     name: "Exercise"
        // },
        // {
        //     name: "Exercise"
        // },
        // {
        //     name: "Exercise"
        // },
        // {
        //     name: "Exercise"
        // },
        // {
        //     name: "Exercise"
        // },
    ]

    return (
        <View style={styles.exercisesContainer}>
            <Pressable onPress={() => alert("Add exercise")}>
                <Ionicons style={styles.addIcon} name="add-circle" />
            </Pressable>
            <ScrollView style={styles.exercises}>

                {exercises.map((e, index) => (
                    <Pressable onPress={e => {
                        if(index === selectedExercise){
                            console.log(`Close exercise ${index}`)
                            setSelectedExercise(null)
                        }else{
                            console.log(`Open exercise ${index}`)
                            setSelectedExercise(index)
                        }
                    }} style={[styles.exercise, selectedExercise === index ? {height: 128} : {}, exercises.length === index + 1 ? { borderBottomWidth: 0 } : {}]}>
                        <Text>Exercise {index}</Text>
                        {}
                    </Pressable>
                ))}



            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    exercisesContainer: {
        alignItems: 'center',
        maxHeight: 300

    },
    addIcon: {
        fontSize: 32,
        marginBottom: 12,
        color: '#c0c0c0'
    },
    exercises: {
        width: '100%',
        borderRadius: 10,
        borderColor: '#c0c0c0',
        borderWidth: 1
    },
    exercise: {
        borderColor: '#c0c0c0',
        borderBottomWidth: 1,
        padding: 8,
        height: 64,
    },
})