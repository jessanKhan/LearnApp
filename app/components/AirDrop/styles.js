import {StyleSheet, Dimensions} from 'react-native';

//GET DEVICE'S SCREEN INFORMATION
let deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    descriptionContainer: {
        flex:1,
        paddingHorizontal: 24,
        marginTop: 24
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        paddingVertical: 8
    },
    description: {
        paddingBottom: 16
    },
    
    // LIKES & VIEWS INFO
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    itemInfoText: {
        fontSize: 16,
        color: "#006DD8",
        fontWeight: "bold",
        textAlign: "center"
    },
    itemInfoContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 33,
        width: "48%",
    },

    //MODAL WINDOW STYLING
    
    modalContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: deviceHeight/1.24,
        backgroundColor: "rgba(255,255,255,0.95)",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    modalButton: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 24
    },
    testContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 48,
    },
    testTitle: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        paddingVertical: 8,
        color: "#608CB3"
    },
    
    testInner: {
        flex: 1,
        height: deviceHeight/1.8,
        justifyContent: "center", 
        alignItems: "center"
    },
    testButton: {
        width: 200,
        height: 50,
        backgroundColor: "#B8CFE3",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 16,
        borderRadius: 20
    },
    testButtonText: {
        color: "#52616E",
        fontSize: 16
    },
    
    testSubTitleGreat: {
        textAlign: "center",
        fontSize: 16,
        paddingVertical: 8,
        color: "#025939"
    },
    testSubTitleGood: {
        textAlign: "center",
        fontSize: 16,
        paddingVertical: 8,
        color: "#BF5B04"
    },
    testSubTitleBad: {
        textAlign: "center",
        fontSize: 16,
        paddingVertical: 8,
        color: "#BF0B1A"
    },
    testResultGreat: {
        fontSize: 32,
        marginVertical: 16,
        color: "#025939"
    },
    testResultGood: {
        fontSize: 32,
        marginVertical: 16,
        color: "#BF5B04"
    },
    testResultBad: {
        fontSize: 32,
        marginVertical: 16,
        color: "#BF0B1A"
    },
    question: {
        fontSize: 16,
        paddingVertical: 8,
        textAlign: "center",
        color: "#333"
    },
    answer: {
        height: 120,
        flexDirection: "row",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#ddd"
    },

})

export default styles;