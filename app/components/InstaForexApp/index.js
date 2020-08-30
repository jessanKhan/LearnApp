import React from 'react';
import { View, StyleSheet } from 'react-native';
import InstaForexApp from './InstaForexApp'

const InstaForexIndex = props =>{
    return (
      <View style={styles.screen}> 
        <InstaForexApp {...props}/>
      </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default InstaForexIndex;