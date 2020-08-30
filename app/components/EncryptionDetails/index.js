import React from 'react';
import { View, StyleSheet } from 'react-native';
import EncryptionDetails from './EncryptionDetails';

const EncryptionDetailsIndex = props =>{
    return (
      <View style={styles.screen}> 
        <EncryptionDetails {...props}/>
      </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default EncryptionDetailsIndex;

