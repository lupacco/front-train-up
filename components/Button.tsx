import { Pressable, View, Text, StyleSheet, Platform } from "react-native";


export function Button({label}: any){
    // let [fontsLoaded] = 
    return (
        <View style={styles.container}>
            <Pressable style={styles.submit} onPress={() => alert("You pressed a button!")}>
                <Text style={styles.buttonText}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue'
    },
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