import { StyleSheet, Dimensions } from 'react-native';

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    bgImage: {
        height: deviceHeight,
        width: "100%",
    },
    drawerHeader: {
        paddingTop: 40,
        paddingLeft: 15,
        paddingRight: 15,
        //paddingBottom: 25,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    LanguageSelect: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: "#565e75",
        color: "white",
        padding: 12,
        fontSize: 15,
        textAlign: "center",
        textAlignVertical: "center",
        fontFamily: 'montserrat',
    },
    sectionContainer: {
        flex: 1,
        marginTop: "20%",
        alignItems: "center",

    },
    userSection: {
        alignItems: "center",
    },
    userName: {
        paddingTop: 15,
        color: "#a3a8b4",
        fontSize: 18,
        textAlign: "center"
    },
    headers: {
        paddingVertical: 7,
        color: "white",
        fontSize: 18,
        fontFamily: 'montserrat',
        alignItems: "center",
        justifyContent: "center"
    },
    footerBar: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 25,
    },
    footer: {
        height: 100,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#353e54",
    },
    logo: {
        width: 200,
        height: 50,
    },
    closeButtonTouch: {
        padding: 20,
        width: 100,
        height: 100,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22,
        backgroundColor: "rgba(0,0,0,0.5)"

    },
    modalView: {
        margin: 20,
        backgroundColor: "#1C324E",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 5,
        padding: 10,
        elevation: 5,
        marginTop: 25

    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    rateText: {
        color: "#fff",
        fontSize: 20
    },
    sectionTwo: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 5,
        flexDirection: "row",
        justifyContent: "center",
    },
    sectionThree: {
        paddingLeft: 15,
        paddingRight: 15,
        //paddingBottom: 25,
        flexDirection: "row",
        justifyContent: "center",
    },
    username: {
        paddingTop: 15,
        color: "#fff",
        fontSize: 18,
        fontFamily: 'montserrat'
    },
})

export default styles;