import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import ExerciseCard from "./ExerciseCard";
import { exercises } from "../@types/mock";

export default function ExercisesContainer() {
    const [selectedExercise, setSelectedExercise] = useState<number|null>(null);


    
    

    return (
        <View style={styles.exercisesContainer}>
            <Pressable onPress={() => alert("Add exercise")}>
                <Ionicons style={styles.addIcon} name="add-circle" />
            </Pressable>
            <ScrollView style={styles.exercises}>

                {exercises.map((exercise, index) => (
                    <ExerciseCard
                        index={index}
                        exercise={exercise}
                        selectedExercise={selectedExercise}
                        setSelectedExercise={setSelectedExercise}
                        exercises={exercises}
                    />
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
    
})