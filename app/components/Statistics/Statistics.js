//
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
//REDUX HOOK AND ACTIONS
import { connect } from 'react-redux';

import BackIcon from '../SVG/BackIcon';
import SocialNetworksBar from '../SocialNetworksBar';

const bgImage = require('../../images/AppBackground.png');
//I18-N TRANSLATOR
import translate from '../../services/i18n/customTranslator';
//FONT AWESOME 5
import { Icon } from 'react-native-elements';
//LOCAL STORAGE DATA
import AsyncStorage from '@react-native-community/async-storage';

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAnswers: 0,
      rightAnswers: 0,
      percentAnswers: 0,
    };

    this.navigationWillFocusListener = props.navigation.addListener(
      'willFocus',
      () => {
        AsyncStorage.getItem('UserDB').then(data => {
          let RightAnswers = JSON.parse(data).RightAnswers;
          let TotalAnswers = JSON.parse(data).TotalAnswers;
          let result;
          TotalAnswers !== 0 && RightAnswers !== 0
            ? (result = Math.floor(
              (JSON.parse(data).RightAnswers /
                JSON.parse(data).TotalAnswers) *
              100,
            ))
            : (result = 0);

          this.setState({
            totalAnswers: TotalAnswers,
            rightAnswers: RightAnswers,
            percentAnswers: result,
          });
        });
      },
    );
  }

  render() {

    return (
      <View style={styles.screen}>
        <View style={styles.screen}>
          <ImageBackground
            source={bgImage}
            style={styles.bgImage}
            resizeMode="cover">
            <View style={styles.userIcon}>
              <Icon
                raised
                name="user"
                type="font-awesome"
                color="#223452"
                size={50}
                containerStyle={{
                  backgroundColor: null,
                }}
              />
            </View>
            <View style={styles.backButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Home');
                }}>
                <BackIcon width={25} height={25} fill="#FFF" />
              </TouchableOpacity>
            </View>
            <View style={styles.resultContainer}>
              <View style={styles.progressContainer}>
                <Text style={styles.progressText}>
                  {translate('TotalAnswers', this.props.lang)}
                </Text>
                <Text style={styles.progressTextPercent}>
                  {this.state.totalAnswers}
                </Text>
              </View>
              <View style={styles.progressContainer}>
                <Text style={styles.progressText}>
                  {translate('CorrectAnswers', this.props.lang)}
                </Text>
                <Text style={styles.progressTextPercent}>
                  {this.state.rightAnswers}
                </Text>
              </View>
              <View style={styles.progressContainer}>
                <Text style={styles.progressText}>
                  {translate('AnswersPercent', this.props.lang)}
                </Text>
                <Text style={styles.progressTextPercent}>
                  {this.state.percentAnswers}%
                </Text>
              </View>
            </View>
            <View style={styles.shareTextContainer}>
              <Text style={styles.shareText}>
                {translate('TellFriends', this.props.lang)}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.socialBar}>
          <SocialNetworksBar {...this.props} />
        </View>
      </View>
    );
  }
}

const mapStateProps = state => {
  const lang = state.languageReducer.lang;
  return {
    lang,
  };
};

export default connect(mapStateProps)(Statistics);
