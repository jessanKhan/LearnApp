import React from 'react';
import { View, StyleSheet } from 'react-native';
import LawsDetails from './LawsDetails';

const LawsDetailsIndex = props => {
    return (
        <View style={styles.screen}>
            <LawsDetails {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default LawsDetailsIndex;