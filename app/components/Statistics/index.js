import React from 'react';
import { View, StyleSheet } from 'react-native';
import Statistics from './Statistics'

const StatisticsIndex = props =>{ 
    return (
      <View style={styles.screen}> 
        <Statistics {...props}/>
      </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default StatisticsIndex;