import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {

        padding: 15,
        backgroundColor: '#8257e5'
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 24,
        maxWidth: 160,
        marginVertical: 30,

    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

export default styles