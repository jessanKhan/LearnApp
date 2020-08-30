import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Button } from 'react-native-paper';
import NetInfo from "@react-native-community/netinfo";
import { useSelector } from 'react-redux';
//PARSING TMLD DATA FROM SERVER RESPONSE
import HTMLView from 'react-native-htmlview';
import { WebView } from 'react-native-webview';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import translate from '../../services/i18n/customTranslator';
const bgImage = require('../../images/AppBackground.png');

const NewsDetails = props => {
  //FUNCTION EXCLUDING IMG, BR TAGS FROM HTML DATA FROM SERVER RESPONSE
  const renderNode = node => {
    if (node.name == 'img') {
      return null;
    } else if (node.name == 'br') {
      return null;
    }
  };
  //GET DATA FROM CRYPTONEWSLIST
  const { getParam } = props.navigation;
  //GET LANGUAGE INFO FROM STORE
  const lang = useSelector(state => state.languageReducer.lang);
  const [isInternetReachable, setIsInternetReachable] = useState(false);
  const { title, first_image, body, original_url } = getParam('newsData');
  const newsID = getParam('newsData').rapi_id;

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsInternetReachable(state.isInternetReachable);
    });
    AsyncStorage.getItem('ReadCryptonewnewsData').then(data => {
      let _ReadCryptonewsData = JSON.parse(data);
      console.log('_ReadCryptonewsData', _ReadCryptonewsData);
      let Save_Data = [],
        data_crt,
        chker = false;

      if (_ReadCryptonewsData.length == 0) {
        data_crt = {
          id: newsID,
        };
        chker = false;
        Save_Data.push(data_crt);
      } else {
        Save_Data = _ReadCryptonewsData;
        _ReadCryptonewsData.map(e => {
          e.id == newsID ? (chker = true) : null;
        });
        data_crt = {
          id: newsID,
        };
        Save_Data.push(data_crt);
      }

      if (chker == false) {
        AsyncStorage.setItem(
          'ReadCryptonewnewsData',
          JSON.stringify(Save_Data),
        );
      }
    });
    return () => {
      unsubscribe();
    }
  });

  const ActivityIndicatorLoadingView = props => {

    return (

      <ActivityIndicator
        color='#354E72'
        size='large'
        style={styles.ActivityIndicatorStyle}
      />
    );
  }


  const reload = props => {
    if (!isInternetReachable) {
      return (
        <ImageBackground
          source={bgImage}
          style={styles.bgImage}
          resizeMode="cover">
          <View style={styles.NoNetView}>
            <Text style={styles.NetErrorText}> {translate("PleaseCheck", lang)} </Text>
            <Button style={styles.NetErrorButton} color="#fff" onPress={() => reload()} >{translate("Retry", lang)}</Button>
          </View>
        </ImageBackground >

      );
    }

    else {
      return (
        <WebView
          source={{ uri: original_url }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          renderLoading={ActivityIndicatorLoadingView}
          startInLoadingState={true}
        />
      );
    }
  };


  if (isInternetReachable) {
    return (
      <WebView
        source={{ uri: original_url }}
        // onShouldStartLoadWithRequest={request => {
        //   // Only allow navigating within this website
        //   return request.url.startsWith(original_url);
        // }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={ActivityIndicatorLoadingView}
        startInLoadingState={true}
      />
    )
  }
  else {
    return (
      <ImageBackground
        source={bgImage}
        style={styles.bgImage}
        resizeMode="cover">
        <View style={styles.NoNetView}>
          <Text style={styles.NetErrorText}> {translate("PleaseCheck", lang)} </Text>
          <Button style={styles.NetErrorButton} color="#fff" onPress={() => reload()} >{translate("Retry", lang)}</Button>
        </View>
      </ImageBackground >

    );
  }

  // return (
  //   <ImageBackground source={bgImage} style={styles.bgImage} resizeMode="cover">

  //     <ScrollView style={styles.htmlContainer}>
  //       <Image source={{ uri: first_image }} style={styles.newsImage} />
  //       <Text style={styles.title}>{title}</Text>

  //       <HTMLView
  //         value={body}
  //         stylesheet={HTMLStyling}
  //         //EXCLUDE SOME TAGS
  //         renderNode={renderNode}
  //       />
  //     </ScrollView>

  //   </ImageBackground>
  // );
};

// const HTMLStyling = StyleSheet.create({
//   p: {
//     color: '#fff',
//     padding: 0,
//     marginTop: 0,
//     marginBottom: 8,
//     fontSize: 11

//   },
//   img: {
//     width: '100%',
//     flex: 1,
//   },
//   b: {
//     color: '#fff',
//     fontSize: 11,
//     fontWeight: 'bold',
//   },
//   h2: {
//     color: '#fff',
//     fontSize: 13,

//   },
//   blockquote: {
//     color: '#fff',
//     fontSize: 12

//   },
//   a: {
//     color: '#fff'
//   }
// });

export default NewsDetails;
