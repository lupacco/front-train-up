import { ScrollView, StyleSheet, View } from "react-native";
import WorkoutCard from './WorkoutCard';
import { Link } from "expo-router";
import { WorkoutsContext } from "../contexts/workoutsContext";
import { useContext, useEffect } from "react";
import { fetchInstanceWithToken } from "../utils/fetchInstances";
import { AuthenticationContextType, UserContextType } from "../@types/types";
import { UserContext } from "../contexts/userContext";
import { AuthContext } from "../contexts/authContext";

export default function WorkoutsContainer(){
  const {user} = useContext(UserContext) as UserContextType
  const {auth} = useContext(AuthContext) as AuthenticationContextType
  const {workouts, setWorkouts} = useContext(WorkoutsContext) 
    
  const fetchUserWorkouts = async () => {
    const response = await fetchInstanceWithToken(`/workout/${user?.id}`, auth?.token, {
      method: 'GET'
    })

    if('error' in response){
      console.log('error')
      return;
    }
    
    setWorkouts(response)
  }

  useEffect(() => {
    fetchUserWorkouts()
  }, [user])
    
  return (
      <View style={styles.workoutsDelimiter}>
      <ScrollView horizontal >
        <View style={styles.workoutsContainer}>
            {workouts.map((workout : any, index : number) => (
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