import React from 'react';
import {View, StyleSheet} from 'react-native';
import AirDrop from './AirDrop';

const AirDropIndex = props => {
    return (
        <View style={styles.screen}>
            <AirDrop {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default AirDropIndex;