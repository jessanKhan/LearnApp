import { StyleSheet, Dimensions } from 'react-native';

//GET DEVICE'S SCREEN INFORMATION
let deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    loadingIndicator: {
        paddingVertical: deviceHeight / 2.5
    },
    title: {
        fontSize: 16,
        color: "#333",
        marginBottom: 8,
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16,
        marginTop: 24,
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