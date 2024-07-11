import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

export default function ExercisesContainer() {
    const [selectedExercise, setSelectedExercise] = useState<number|null>(null);


    type Exercise = {
        name: string,
        series: number,
        reps: number[]
        weight: Float[]
    }

    const exercises: Exercise[] = [
        {
            name: "Exerciseee",
            series: 4,
            reps: [12, 10, 10, 8],
            weight: [10, 12, 15, 17.5]
        },
        {
            name: "Exercise",
            series: 4,
            reps: [12, 10, 10, 8],
            weight: [10, 12, 15, 17.5]
        },
        {
            name: "Exercise",
            series: 4,
            reps: [12, 10, 10, 8],
            weight: [10, 12, 15, 17.5]
        },
        {
            name: "Exercise",
            series: 4,
            reps: [12, 10, 10, 8],
            weight: [10, 12, 15, 17.5]
        },
        {
            name: "Exercise",
            series: 4,
            reps: [12, 10, 10, 8],
            weight: [10, 12, 15, 17.5]
        },
        {
            name: "Exercise",
            series: 4,
            reps: [12, 10, 10, 8],
            weight: [10, 12, 15, 17.5]
        },
    ]

    return (
        <View style={styles.exercisesContainer}>
            <Pressable onPress={() => alert("Add exercise")}>
                <Ionicons style={styles.addIcon} name="add-circle" />
            </Pressable>
            <ScrollView style={styles.exercises}>

                {exercises.map((exercise, index) => (
                    <Pressable onPress={e => {
                        if(index === selectedExercise){
                            console.log(`Close exercise ${index}`)
                            setSelectedExercise(null)
                        }else{
                            console.log(`Open exercise ${index}`)
                            setSelectedExercise(index)
                        }
                    }} style={[styles.exercise, selectedExercise === index ? {height: 128} : {}, exercises.length === index + 1 ? { borderBottomWidth: 0 } : {}]}>
                        <Text>{exercise.name} {index}</Text>
                        {index === selectedExercise && (
                            <View>
                                <Text>Series: {exercise.series}</Text>
                                <Text>Reps: {exercise.reps}</Text>
                                <Text>Weight: {exercise.weight}</Text>
                            </View>
                        )}
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