import React from 'react';
import {View, StyleSheet} from 'react-native';
import YoutubePlay from './YoutubePlay';

const YoutubePlayIndex = props => {
    return (
        <View style={styles.screen}>
            <YoutubePlay {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})


export default YoutubePlayIndex;