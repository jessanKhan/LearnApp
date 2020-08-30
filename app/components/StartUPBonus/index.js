import React from 'react';
import { View, StyleSheet } from 'react-native';
import StartUPBonus from './StartUPBonus'

const StartUPBonusIndex = props =>{ 
    return (
      <View style={styles.screen}> 
        <StartUPBonus {...props}/>
      </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default StartUPBonusIndex;