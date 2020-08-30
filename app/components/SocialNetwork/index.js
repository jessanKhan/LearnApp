import React from 'react';
import { View, StyleSheet } from 'react-native';
import SocialNetwork from './SocialNetwork'

const SocialIndex = props =>{ 
    return (
      <View style={styles.screen}> 
        <SocialNetwork {...props}/>
      </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default SocialIndex;