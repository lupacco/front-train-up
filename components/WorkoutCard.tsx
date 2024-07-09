import { Platform, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function WorkoutCard({name}: {name: string}){
    

    return(
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Ionicons style={styles.icon} name="barbell"/> 
            </View>
            <Text style={styles.text}>{name}</Text>
        </View>
    );
}

let color = '#999'

const styles = StyleSheet.create({
   container: {
    width: 64,
    height: 'auto',
    marginHorizontal: 24,
    marginBottom: 16,
    alignItems: 'center',
},
iconContainer: {
    width: 72,
    height: 72,
    borderWidth: 1,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 48,
    // color: color,
  },
  text: {
    color: '#999',
    fontSize: 12,
    fontFamily: Platform.select({
        android: 'Inter_400Regular'
    })
  }
})