import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import YouTube from 'react-native-youtube';
import styles from './styles';

const bgImage = require('../../images/AppBackground.png');

import AsyncStorage from '@react-native-community/async-storage';

const YoutubePlay = props => {
  //GET DATA FROM CRYPTONEWSVIDEO COMPONENT
  const {navigation} = props;
  const currentVideoData = navigation.getParam('currentVideoData')[0].snippet;
  const currentVideoDataID = navigation.getParam('currentVideoData')[0].id;

  useEffect(() => {
    AsyncStorage.getItem('ReadYoutubeData').then(data => {
      let _ReadYoutubeData = JSON.parse(data);
      let Save_Data = [],
        data_crt,
        chker = false;

      if (_ReadYoutubeData.length == 0) {
        data_crt = {
          id: currentVideoDataID,
        };
        chker = false;
        Save_Data.push(data_crt);
      } else {
        Save_Data = _ReadYoutubeData;

        _ReadYoutubeData.map(e =>
          e.id == currentVideoDataID ? (chker = true) : null,
        );

        data_crt = {
          id: currentVideoDataID,
        };
        Save_Data.push(data_crt);
      }

      if (chker == false) {
        AsyncStorage.setItem('ReadYoutubeData', JSON.stringify(Save_Data));
      }
    });
  });

  return (
    <ImageBackground source={bgImage} style={styles.bgImage} resizeMode="cover">
      <View style={styles.screen}>
        <TouchableWithoutFeedback>
          <YouTube
            apiKey="AIzaSyBNdy-3jf-E0dtKsatb2_YtI_jfmqap1Og"
            videoId={currentVideoData.resourceId.videoId} // The YouTube video ID
            play={false} // control playback of video with true/false
            //autoplay
            //fullscreen  control whether the video should play in fullscreen or inline
            loop // control whether the video should loop when ended
            style={styles.youtube}
            resumePlayAndroid={true}
          />
        </TouchableWithoutFeedback>
        <View style={styles.textContainer}>
          <Text style={styles.videoTitle}>{currentVideoData.title}</Text>
          <ScrollView>
            <Text style={styles.videoDescription}>
              {currentVideoData.description}
            </Text>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default YoutubePlay;
