import React from 'react';
import {View, StyleSheet} from 'react-native';
import NewsDetails from './NewsDetails';

const NewsDetailsIndex = props => {
    return (
        <View style={styles.screen}>
            <NewsDetails {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default NewsDetailsIndex;