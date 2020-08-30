import { StyleSheet, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    newsContainer: {
        flex: 1,
        marginVertical: 24
    },
    bgImage: {
        height: deviceHeight,
        width: "100%",
    },
    videoImage: {
        width: "100%",
        height: deviceHeight / 3.6
    },
    videoTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    videoDescription: {
        color: "gray",
        width: "100%",
        height: 50,

    }
})

export default styles;