import { StyleSheet, Dimensions } from 'react-native';

//GET DEVICE'S SCREEN INFORMATION
let deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingBottom: 10
    },
    text: {
        fontSize: 16,
        paddingBottom: 16,
        fontFamily: 'Montseratt',
        paddingHorizontal: 20,
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    itemContainer: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        //alignItems: "center",
        // marginHorizontal: 16,
        // marginVertical: 16,

    },
    flag: {
        width: 45,
        height: 25,

    },
    placeHolder: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        //borderTopWidth: 1.5,
        borderBottomColor: "#000",
        //borderTopColor: "#ddd",
        height: 45,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    arrow: {
        //marginBottom: 10,
    },
    image: {
        width: "100%",
        height: deviceHeight / 3.2
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        letterSpacing: 0.8,
        paddingBottom: 15,
        fontFamily: 'Montseratt',
    },
    title2: {
        fontSize: 28,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        letterSpacing: 0.8,
        paddingBottom: 15,
        fontFamily: 'Montseratt',
    },
    backButtonContainer: {
        position: "absolute",
        top: 40,
        left: 25,
        zIndex: 100
    },
    shareButtonContainer: {
        position: "absolute",
        top: 25,
        right: 25,
        zIndex: 100
    }
})

export default styles;