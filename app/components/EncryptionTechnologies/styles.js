import { StyleSheet, Dimensions } from 'react-native';

//GET DEVICE'S SCREEN INFORMATION
let deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    titleContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        paddingHorizontal: 24
    },
    title: {
        fontSize: 16,
        paddingVertical: 12,
        color: "#333"
    },
    statisticContainer: {
        flexDirection: "row",
        paddingVertical: 12,
        justifyContent: "center"
    },
    statisticText: {
        color: "#0176FF",
        fontWeight: "bold",
        fontSize: 12,
        paddingHorizontal: 4
    },
    NoNetView: {
        alignItems: "center", justifyContent: "center", top: '44%'
    },
    NetErrorText: {
        color: "#fff"
    },
    NetErrorButton: {
        width: 80, backgroundColor: '#303B55', margin: 20
    },
    bgImage: {
        height: deviceHeight,
        width: "100%",
    },
    backButtonContainer: {
        position: 'absolute',
        top: 35,
        // left: 25,
        zIndex: 100,
    },
    touchable: {
        width: 24,
        height: 24,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,

    },
});

export default styles;