import React from 'react';
import { View, StyleSheet } from 'react-native';
import SocialNetworksBar from './SocialNetworksBar'

const SocialIndex = props =>{ 
    return (
      <View style={styles.screen}> 
        <SocialNetworksBar {...props}/>
      </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default SocialIndex;