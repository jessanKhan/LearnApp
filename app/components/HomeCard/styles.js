import { StyleSheet, Dimensions } from 'react-native';

//GET DEVICE'S SCREEN INFORMATION
let deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingBottom: deviceHeight / 100
    },
    imageBackground: {
        width: "100%",
        height: deviceHeight / 3
    },
    background: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        backgroundColor: "rgba(28, 41, 69, .3)"
    },

    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    title: {
        fontFamily: 'montserrat',
        fontSize: 36,
        color: "white",
        textAlign: "center",
        letterSpacing: 0.8
    },
    counter: {
        position: "absolute",
        top: 28,
        right: 25,
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: "#FF0069",
    },
    counterText: {
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center",
        color: "#FFF"
    },
    counterinvisible: {
        position: "absolute",
        top: 28,
        right: 25,
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: "#FF0069",
    },

});

export default styles;