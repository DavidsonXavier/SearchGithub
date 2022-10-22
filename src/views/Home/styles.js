import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'column'
    },
    containerInput: {
        flexDirection: "row",
        alignItems: 'center',
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    text: {
        color: '#000',
        marginLeft: 5,
    },
    button: {
        marginTop: 5,
    },
    input: {
        height: 40,
        width: 200,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#FFF"
    },

    textAlert: {
        color: '#FF0000',
    }
})