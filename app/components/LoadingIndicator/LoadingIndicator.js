import React from 'react';
import {
    View,
    ImageBackground,
    ActivityIndicator,
} from 'react-native';

import styles from './styles';

const bgImage = require('../../images/AppBackground.png');

const LoadingIndicator = props =>{
    return (
        <ImageBackground 
            source={bgImage}
            style={styles.bgImage}
            resizeMode="cover">
            <View style={styles.loadingIndicator}>
                <ActivityIndicator size="large" color="#FFF" />
            </View>
        </ImageBackground>
    )
}

export default LoadingIndicator;