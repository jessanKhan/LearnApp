import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator, Alert, BackHandler
} from 'react-native';
import { WebView } from 'react-native-webview';
import NetInfo from "@react-native-community/netinfo";
//PARSING TMLD DATA FROM SERVER RESPONSE
import HTMLView from 'react-native-htmlview';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import translate from '../../services/i18n/customTranslator';
const bgImage = require('../../images/AppBackground.png');

const AnalyticsDetails = props => {
  //FUNCTION EXCLUDING IMG, BR TAGS FROM HTML DATA FROM SERVER RESPONSE
  const renderNode = node => {
    if (node.name == 'img') {
      return null;
    } else if (node.name == 'br') {
      return null;
    }
  };
  //GET DATA FROM CRYPTONEWSLIST
  // const { getParam } = props.navigation;
  // const { title, first_image, body } = getParam('newsData');
  // const newsID = getParam('newsData').rapi_id;

  const { getParam } = props.navigation;
  const [isInternetReachable, setIsInternetReachable] = useState(false);
  // const { newsData } = getParam('newsData');
  const newsID = props.navigation.state.params.newsData;


  const analysisID = props.navigation.state.params.newsData;
  const lang = useSelector(state => state.languageReducer.lang);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsInternetReachable(state.isInternetReachable);
    });

    AsyncStorage.getItem('ReadCryptonewsData').then(data => {
      let _ReadCryptonewsData = JSON.parse(data);

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
        AsyncStorage.setItem('ReadCryptonewsData', JSON.stringify(Save_Data));
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


  const jsinject = props => {
    $("._container-fluid").parents("div").parents("div").parents("div").remove();
    $("attention-eu").remove();
  }


  const reload = props => {

    if (isInternetReachable) {
      return (
        <WebView
          //renderError={reload}
          //onError={reload}
          source={{ uri: `https://www.instaforex.com/${lang}/forex_analysis/${analysisID}` }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          injectJavaScript={jsinject}
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

  }


  if (isInternetReachable) {
    return (
      <WebView
        //renderError={reload}
        //onError={reload}
        source={{ uri: `https://www.instaforex.com/${lang}/forex_analysis/${analysisID}` }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectJavaScript={jsinject}
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
          <Text style={styles.NetErrorText}>{translate("PleaseCheck", lang)} </Text>
          <Button style={styles.NetErrorButton} color="#fff" onPress={() => reload()} >{translate("Retry", lang)}</Button>
        </View>
      </ImageBackground >

    );
  }




  // return (
  //   <ImageBackground source={bgImage} style={styles.bgImage} resizeMode="cover">
  //     <View style={styles.screen}>
  //       <ScrollView style={styles.htmlContainer}>
  //         <Image source={{ uri: first_image }} style={styles.newsImage} />
  //         <Text style={styles.title}>{title}</Text>

  //         <HTMLView
  //           value={body}
  //           stylesheet={HTMLStyling}
  //           //EXCLUDE SOME TAGS
  //           renderNode={renderNode}
  //         />
  //       </ScrollView>
  //     </View>
  //   </ImageBackground>
  // );
};

// const HTMLStyling = StyleSheet.create({
//   p: {
//     color: '#ddd',
//     padding: 0,
//     marginTop: 0,
//     marginBottom: 8,
//   },
//   img: {
//     width: '100%',
//     flex: 1,
//   },
//   b: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
// });

export default AnalyticsDetails;
