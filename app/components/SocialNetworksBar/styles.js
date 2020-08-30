import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
    },
    facebookIconContainer: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: 'center',
        backgroundColor: "#3B5998"
    },
    twitterIconContainer: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: 'center',
        backgroundColor: "#1DA1F2"
    },
    googleIconContainer: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: 'center',
    },
});

export default styles;