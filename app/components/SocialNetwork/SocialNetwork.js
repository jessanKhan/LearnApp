import React from 'react';
import {
    View,
    ImageBackground,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

let deviceHeight = Dimensions.get("window").height;

import CloseIcon from '../SVG/CloseIcon';

const bgImage = require('../../images/SocialNetwork.png')

const SocialNetwork = props => {
    
    const color = props.navigation.getParam('color');
    const text = props.navigation.getParam('text');
    
    return(
        <View style={{flex: 1, backgroundColor: color}}>
            <ImageBackground 
                source={bgImage}
                style={styles.drawerImage}
                resizeMode="cover">

                <View style={styles.backButton}>
                    <TouchableOpacity style={styles.touchable} onPress={()=>{props.navigation.goBack()}}>
                            <CloseIcon fill={"#FFF"} width={24} height={24}/>
                    </TouchableOpacity>  
                </View>
                <Text style={styles.textMessage}>{text}</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    textMessage: {
        position: "absolute",
        fontFamily: 'montseratt',
        bottom: deviceHeight/6,
        left: 20,
        color: "#FFF",
        fontSize: 16
    },
    backButton: {
        position: "absolute",
        right: 0,
        top: 0,
        zIndex: 100,
        width: 100,
        height: 100,
    },
    drawerImage: {
        height: deviceHeight,
        width: "100%",
    },
    touchable: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
}) 

export default SocialNetwork;