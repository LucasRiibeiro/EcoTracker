import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerClima: {
        alignSelf: "center",
        color: "green",
        fontSize: 20,
        fontWeight: "bold",
    },
    headerPoluicao: {
        alignSelf: "center",
        color: "orange",
        fontSize: 20,
    },
    container: {
        flex: 1,
        marginTop: 25,
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#007FBC",
        borderRadius: 10,
    },
    inputContainer: {
        alignItems: "center",
        backgroundColor: "#2A598F",
        borderRadius: 10,
        marginBottom: 15,
    },
    heading: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
    },
    italicText: {
        fontStyle: "italic",
        marginVertical: 15,
        fontSize: 17,
        color: "#fff",
    },
    picker: {
        width: 200,
        marginVertical: 10,
        backgroundColor: "#466F8F",
        borderRadius: 10,
        color: "#fff",
    },
    weatherContainer: {
        padding: 5,
        marginTop: 5,
        backgroundColor: "#052103",
        borderRadius: 10,
    },
    pollutionContainer: {
        padding: 5,
        marginTop: 10,
        backgroundColor: "#5E4004",
        borderRadius: 10,
    },
    weatherText: {
        fontSize: 13,
        marginVertical: 5,
        alignSelf: "center",
        color: "#fff",
    },
    pollutionText: {
        fontSize: 13,
        marginVertical: 5,
        alignSelf: "center",
        color: "#fff",
    },
});
