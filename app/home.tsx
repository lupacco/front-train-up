import { Platform, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import Ionicons from "@expo/vector-icons/Ionicons"
import WorkoutsContainer from '../components/WorkoutsContainer';
import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/userContext';
import { AuthenticationContextType, UserContextType } from '../@types/types';
import { AuthContext } from '../contexts/authContext';
import { fetchInstanceWithToken } from '../utils/fetchInstances';

export default function HomeScreen() {
  const {user, setUser} = useContext(UserContext) as UserContextType
  const {auth} = useContext(AuthContext) as AuthenticationContextType

  const fetchUser = async () => {
    const response = await fetchInstanceWithToken("/customer/token", auth?.token, {
      method: 'GET',
    });

    if('error' in response){
      console.log(response)
      return;
    }

    setUser(response)
  }

  

  useEffect(() => {
    fetchUser()
    
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Welcome, {user?.name}!</Text>
        <Link href="/">
          <Ionicons style={styles.profileIcon} name="person-circle"/>                
        </Link>
      </View>


      <Text style={styles.label}>Workouts</Text>
      <WorkoutsContainer/>

      <Text style={styles.label}>Calendar</Text>
      <WorkoutsContainer/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'space-between', //maybe remove after make calendar
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomColor: "#c0c0c0",
    borderBottomWidth: 1
  },
  h1: {
    fontSize: 24,
    fontFamily: Platform.select({
        android: 'RussoOne_400Regular'
    })
  },
  profileIcon: {
    fontSize: 40,
    color: '#c0c0c0'
  },
  label: {
    width: '80%',
    marginTop: 16,
    color: '#c0c0c0',
    fontSize: 16,
    fontFamily: Platform.select({
        android: 'RussoOne_400Regular'
    })
  }
});
