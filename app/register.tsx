import { View, Text, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import { Link } from 'expo-router';

export default function RegisterScreen() {
    return (
        <View style={styles.container}>
            <Text>Train up</Text>

            <Text></Text>
            <Button label="Register" />
            <Link href="/login">Sign in with an existing account</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });