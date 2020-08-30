import React, {useEffect, useState, useCallback} from 'react';
import {ImageBackground, TouchableOpacity, View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './styles';

import AsyncStorage from '@react-native-community/async-storage';

class HomeCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.screen}
        onPress={() => {
          this.props.navigation.navigate(this.props.routeName, {
            userDB: this.props.USER_DB,
            unread: this.props.progressCounter,
          });
        }}>
        <ImageBackground
          source={this.props.imageLink}
          style={styles.imageBackground}>
          <View style={styles.background}>
            {this.props.progressCounter === 0
              ? null
              : this.props.progressView && (
                  <View style={styles.counter}>
                    <Text style={styles.counterText}>
                      {this.props.progressCounter}
                    </Text>
                  </View>
                )}
            <View style={styles.textContainer}>
              <Text style={styles.title}>{this.props.title}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default HomeCard;
