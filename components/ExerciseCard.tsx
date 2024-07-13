import { Pressable, StyleSheet, Text, View } from "react-native";
import { Exercise } from "../@types/types";

export default function ExerciseCard({index, exercise, selectedExercise, setSelectedExercise, exercises} : {index: number, exercise: Exercise, selectedExercise: number|null, setSelectedExercise: Function, exercises: Exercise[]}){
    
    
    return (
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
                    <Text>Reps: {exercise.reps.map((r, i) => (
                        i !== exercise.reps.length - 1 ? (`${r} - `) : (`${r}`)
                    ))}</Text>
                    <Text>Weight: {exercise.weight.map((w, i) => (
                        i !== exercise.weight.length - 1 ? (`${w}kg - `) : (`${w}kg`)
                    ))}</Text>
                </View>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    exercise: {
        borderColor: '#c0c0c0',
        borderBottomWidth: 1,
        padding: 8,
        height: 64,
    },
})