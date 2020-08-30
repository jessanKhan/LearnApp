import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeCard from './HomeCard';

const HomeCardIndex = props => {
  return (
    <View style={styles.screen}>
      <HomeCard {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default HomeCardIndex;
