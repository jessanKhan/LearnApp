import {StyleSheet, Dimensions} from 'react-native';

let deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    screen: {
        flex:1,
        paddingHorizontal: 8,
    },
    youtube: {
        marginTop: 16,
        alignSelf: 'stretch',
        height: 235
    },
    bgImage: {
        height: deviceHeight,
        width: "100%",
    },
    title: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold"
    },
    textContainer: {
        flex: 1,
        marginVertical: 16
    },
    videoTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },
    videoDescription: {
        marginTop: 8,
        color: "#ddd",
        width: "100%",
    }
});

export default styles;