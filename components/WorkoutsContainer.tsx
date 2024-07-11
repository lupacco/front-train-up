import { ScrollView, StyleSheet, View } from "react-native";
import WorkoutCard from './WorkoutCard';
import { Link } from "expo-router";

export default function WorkoutsContainer(){
    type Workout = {
        name: string
    }
    
    const workouts: Workout[] = [
    {
        name: "biceps"
    },
    {
        name: "peito"
    },
    {
        name: "triceps"
    },
    {
        name: "perna"
    },
    {
        name: "ombro"
    },
    {
        name: "costas"
    },
    {
        name: "peito 2"
    },
    {
        name: "biceps 2"
    },
    {
        name: "biceps 3"
    },
    ]
    
    return (
        <View style={styles.workoutsDelimiter}>
        <ScrollView horizontal >
          <View style={styles.workoutsContainer}>
              {workouts.map((workout, index) => (
                <WorkoutCard key={index} name={workout.name}/>
              ))}
          </View>
        </ScrollView>
        <View style={styles.addContainer} >
          <Link href="/create-workout" style={styles.add}>Add +</Link>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    workoutsDelimiter: {
        alignItems: 'center',
        width: '85%',
        height: '35%',
        paddingVertical: 24
      },
      workoutsContainer: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      addContainer: {
        width: '80%',
      },
      add: {
        color: '#a2a2a2',
        textAlign: 'right',
        alignSelf: 'flex-end'
      },
})