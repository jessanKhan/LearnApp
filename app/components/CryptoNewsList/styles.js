// import {StyleSheet, Dimensions} from 'react-native';

// let deviceHeight = Dimensions.get("window").height;

// const styles = StyleSheet.create({
//     screen: {
//         flex:1,
//     },
//     newsContainer: {
//         height: 130,
//         overflow: "hidden",
//         marginTop: 24,
//         marginBottom: 16
//     },
//     row: {
//         flex: 1,
//         flexDirection: "row",
//     },
//     imageContainer: {
//         flex: 1,
//         paddingHorizontal: 8,
//         height: "100%",
//     },
//     descriptionContainer: {
//         flex: 2,
//         justifyContent: "flex-start",
//         paddingRight: 18,
//     },
//     bgImage: {
//        flex: 1,
//     },
//     newsImage: {
//         width: "100%",
//         height: "100%",
//     },
//     newsTitle: {
//         color: "#fff",
//         fontSize: 12,
//         fontWeight: "bold"
//     },
//     newsRating: {
//         color: "gray",
//     },  
//     newsDescription: {
//         color: "#FFF",
//         width: "100%",
//     }
// });

// export default styles;
import { StyleSheet, Dimensions, CheckBox } from 'react-native';
import { node } from 'prop-types';

let deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#2E3B55",

    },

    domain: {
        color: "#fff",
        fontSize: 15,
        alignSelf: "flex-end",
        marginTop: 5,
        // width: "95%",
        marginHorizontal: 5,
        backgroundColor: "#2E3B55",

    },
    domainContainer: {
        backgroundColor: "#2E3B55",
        alignSelf: "flex-end",
        // width: "auto",
        //alignItems: "center",
        right: 10,
        //alignContent: "center",
        borderRadius: 7,
        // justifyContent: "flex-end",
        paddingBottom: 10,
        marginBottom: 10,
        //width: 100

    },
    newsContainer: {
        height: 280,
        overflow: "hidden",
        marginTop: 8,
        marginBottom: 7,
        //paddingVertical: 5,
        //marginHorizontal: 3,
        marginLeft: 8,
        marginRight: 8,
        borderWidth: 1, borderColor: "#354f72", borderRadius: 10,
        backgroundColor: "#354f72",


    },
    row: {
        flex: 1,
        flexDirection: "column",


    },
    imageContainer: {
        flex: 1.5,
        padding: 0,
        //height: "50%",
        //paddingBottom: 35,
        //borderWidth: 1, borderColor: "#1C324E", borderRadius: 5,
        //margin: 0,
        marginBottom: 5,
        backgroundColor: "#1C324E"

    },
    descriptionContainer: {
        flex: 1.3,
        justifyContent: "flex-start",
        paddingRight: 18,
        paddingLeft: 10,
        marginBottom: 40
    },
    bgImage: {
        flex: 1,
    },
    newsImage: {
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    newsTitle: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 10

    },
    newsRating: {
        color: "gray",
    },
    newsDescription: {
        color: "#FFF",
        width: "100%",
    },
    sourcelink: {
        flexDirection: "column",
        color: "#fff"

    },
    BadgeStyle: {
        backgroundColor: '#FF0069',
        height: 22,
        width: 40,
        borderRadius: 10,

    },
    BadgeStyle2: {
        display: "none"
    },
    Badgetext: {
        color: "#fff"
    },
    ActivityIndicatorStyle: {
        position: 'absolute',
        left: "46%",
        right: 0,
        top: "38%",
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30

    },
    NoNetView: {
        alignItems: "center",
        justifyContent: "center",
        top: '44%'
    },
    NetErrorText: {
        color: "#fff"
    },
    NetErrorButton: {
        width: 80,
        backgroundColor: '#303B55',
        margin: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //marginTop: 50,
        backgroundColor: 'rgba(0, 0, 0, .5)'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        //alignItems: "center",
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
        elevation: 2
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
    CheckBoxStyle: {
        width: 400
    },
    filterStyle: {
        flexDirection: "row", alignSelf: "flex-end", justifyContent: "flex-end", alignItems: "center", right: 5
    },
    filterText: {
        color: "#fff", textAlign: "center"
    }
    ,
    filterIcon: {
        width: 25, margin: 5
    },
    filterIconImage: {
        height: 25, width: 25
    },
});

export default styles;