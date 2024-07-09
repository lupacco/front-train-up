import { View, Text, StyleSheet, Platform } from "react-native";


export function ButtonSubmit({label}: {label: string}){
    return (
            <View style={styles.submit}>
                <Text style={styles.buttonText}>{label}</Text>
            </View>
    );
}

const styles = StyleSheet.create({
      submit: {
        margin: 16,
        justifyContent: 'center', 
        alignItems: 'center', 
        width: 250,
        height: 48,
        backgroundColor: '#ffae0b',
        borderRadius: 25
    },
    buttonText: {
        color: '#fff',
        fontFamily: Platform.select({
            android: 'RussoOne_400Regular'
        })
    }
})