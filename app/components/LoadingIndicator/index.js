import React from 'react';
import {View, StyleSheet} from 'react-native';
import LoadingIndicator from './LoadingIndicator';

const LoadingIndicatorIndex = props => {
    return (
        <View style={styles.screen}>
            <LoadingIndicator {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})


export default LoadingIndicatorIndex;