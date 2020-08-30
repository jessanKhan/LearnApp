import React, { useEffect, useState, useCallback } from 'react';
import {
  View, Text, ScrollView, ImageBackground,
  TouchableOpacity
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import styles from './styles';
//IMPORT DATA FETCH SERVICE
import LawsOnCryptoService from '../../services/LawsOnCryptoService';
//LOADING COMPONENT
import LoadingIndicator from '../LoadingIndicator';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-paper';
import BackIcon from '../SVG/BackIcon';
const bgImage = require('../../images/AppBackground.png');
import translate from '../../services/i18n/customTranslator';

const LawsDetails = props => {
  const lawsOnCryptoService = new LawsOnCryptoService();
  //GET DATA FROM LawsOnCryptoMarket
  const [isInternetReachable, setIsInternetReachable] = useState(false);
  const { getParam } = props.navigation;
  const id = getParam('id');
  const lang = getParam('lang');
  const [loading, setLoading] = useState(true);
  const [description, setDescription] = useState('');

  useEffect(() => {

    const unsubscribe = NetInfo.addEventListener(state => {
      setIsInternetReachable(state.isInternetReachable);
      console.log("NET", state.isInternetReachable)
    });
    lawsOnCryptoService.getLawsDataDescription(id, lang).then(data => {
      setDescription(data[0]);

      setLoading(false);

      AsyncStorage.getItem('CryptoLawData').then(data_new => {
        let _ReadYoutubeData = JSON.parse(data_new);


        let currentVideoDataID = data[0].Title;

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
          AsyncStorage.setItem('CryptoLawData', JSON.stringify(Save_Data));
        }
      });
    });
    return () => {
      unsubscribe();
    }
  }, [id, lang]);

  const reload = props => {
    return (
      <ScrollView>
        {isInternetReachable && <View style={styles.screen}>
          <Text style={styles.title}>{description.Title}</Text>
          <Text>{description.Description}</Text>
        </View>}

        {!isInternetReachable &&
          <ImageBackground
            source={bgImage}
            style={styles.bgImage}
            resizeMode="cover">
            <View style={styles.NoNetView}>
              <Text style={styles.NetErrorText}>  {translate("PleaseCheck", lang)} </Text>
              <Button style={styles.NetErrorButton} color="#fff" onPress={() => reload()} >{translate("Retry", lang)} </Button>
            </View>
          </ImageBackground >

        }
      </ScrollView>
    );
  }
  //////////////////////////////   LOADING INDICATOR   //////////////////////////////////
  while (loading) {
    return <LoadingIndicator />;
  }

  return (
    <ScrollView>
      {!isInternetReachable && <View style={styles.screen}>
        <Text style={styles.title}>{description.Title}</Text>
        <Text>{description.Description}</Text>
      </View>}

      {isInternetReachable &&
        <ImageBackground
          source={bgImage}
          style={styles.bgImage}
          resizeMode="cover">
          <View style={styles.NoNetView}>
            <Text style={styles.NetErrorText}>  {translate("PleaseCheck", lang)} </Text>
            <Button style={styles.NetErrorButton} color="#fff" onPress={() => reload()} > {translate("Retry", lang)} </Button>
          </View>
        </ImageBackground >

      }
    </ScrollView>
  );
};

export default LawsDetails;
