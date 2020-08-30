import React from 'react';
import { View, StyleSheet } from 'react-native';
import AnalyticsDetails from './AnalyticsDetails';

const AnalyticsDetailsIndex = props => {
    return (
        <View style={styles.screen}>
            <AnalyticsDetails {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default AnalyticsDetailsIndex;