import {StyleSheet, Dimensions} from 'react-native';

let deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    bgImage: {
        height: deviceHeight,
        width: "100%",
    },
    loadingIndicator: {
        paddingVertical: deviceHeight/2.5
    },
})

export default styles;