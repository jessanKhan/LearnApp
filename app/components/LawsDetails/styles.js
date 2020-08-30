import { StyleSheet, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 16
    },
    loadingIndicator: {
        paddingVertical: deviceHeight / 3.6,
    },
    title: {
        marginVertical: 24,
        fontWeight: "bold"
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