import React from 'react';
import {View, StyleSheet} from 'react-native';
import CryptoNewsVideo from './CryptoNewsVideo';

const CryptoNewsVideoIndex = props => {
    return (
        <View style={styles.screen}>
            <CryptoNewsVideo {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})


export default CryptoNewsVideoIndex;