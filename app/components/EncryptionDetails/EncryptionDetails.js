import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
// GET NET INFO 
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import { Button } from 'react-native-paper';
import BackIcon from '../SVG/BackIcon';
//IMPORT DATA FETCH FUNCTIONS
import EncryptionService from '../../services/EncryptionService';
//HEADER COMPONENT
import CustomImageHeader from '../CustomImageHeader/CustomImageHeader';
import translate from '../../services/i18n/customTranslator';
const headerImage = require('../../images/EncryptionHeader.png');
const bgImage = require('../../images/AppBackground.png');

const EncryptionDetails = props => {
  const { goBack } = props.navigation;
  const encryptionService = new EncryptionService();

  //IMPORT ROUTING FUNCTION&PARAMETERS
  const { getParam } = props.navigation;
  const lang = getParam('lang');
  const id = getParam('id');
  const title = getParam('title');
  // GET NET STATE 
  const [isInternetReachable, setIsInternetReachable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsInternetReachable(state.isInternetReachable);
      console.log("NET", state.isInternetReachable)
    });
    encryptionService.getDescription(id, lang).then(data => {
      setData(data);
      setLoading(false);

      AsyncStorage.getItem('Encryption_technic_unreadData').then(data_new => {
        let _ReadYoutubeData = JSON.parse(data_new);
        let currentVideoDataID = title;

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
          AsyncStorage.setItem(
            'Encryption_technic_unreadData',
            JSON.stringify(Save_Data),
          );
        }
      });
    });
    return () => {
      unsubscribe();
    }
  }, [id, lang]);

  while (loading) {
    return (
      <View style={styles.loadingIndicator}>
        <ActivityIndicator size="large" color="#060c3f" />
      </View>
    );
  }

  const reload = props => {
    return (
      <View style={styles.screen}>
        {isInternetReachable && <FlatList
          data={data}
          ListHeaderComponent={
            <CustomImageHeader
              {...props}
              imageLink={headerImage}
              title={props.navigation.getParam('title')}
              share={true}
              buttons={false}
              onlineData={false}
            />
          }
          renderItem={item => <Item data={item} />}
          keyExtractor={item => Math.floor(Math.random() * Math.floor(150)).toString()}
        />}
        {!isInternetReachable &&
          <ImageBackground
            source={bgImage}
            style={styles.bgImage}
            resizeMode="cover">
            <View style={styles.backButtonContainer}>
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => {
                  goBack();
                }}>
                <BackIcon width={24} height={24} fill="#FFF" />
              </TouchableOpacity>
            </View>
            <View style={styles.NoNetView}>
              <Text style={styles.NetErrorText}> {translate("PleaseCheck", lang)} </Text>
              <Button style={styles.NetErrorButton} color="#fff" onPress={() => reload()} >{translate("Retry", lang)}</Button>
            </View>
          </ImageBackground >

        }
      </View>
    );

  }

  const Item = props => {
    const { Title, Description } = props.data.item;
    //CONTENT IMAGE URL
    const url = props.data.item.Diagram;
    const image = url ? (
      <Image source={{ uri: url }} style={styles.image} />
    ) : null;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{Title}</Text>
        {image}
        <Text>{Description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      {isInternetReachable && <FlatList
        data={data}
        ListHeaderComponent={
          <CustomImageHeader
            {...props}
            imageLink={headerImage}
            title={props.navigation.getParam('title')}
            share={true}
            buttons={false}
            onlineData={false}
          />
        }
        renderItem={item => <Item data={item} />}
        keyExtractor={item => Math.floor(Math.random() * Math.floor(150)).toString()}
      />}
      {!isInternetReachable &&
        <ImageBackground
          source={bgImage}
          style={styles.bgImage}
          resizeMode="cover">
          <View style={styles.backButtonContainer}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => {
                goBack();
              }}>
              <BackIcon width={24} height={24} fill="#FFF" />
            </TouchableOpacity>
          </View>
          <View style={styles.NoNetView}>
            <Text style={styles.NetErrorText}>{translate("PleaseCheck", lang)} </Text>
            <Button style={styles.NetErrorButton} color="#fff" onPress={() => reload()} >{translate("Retry", lang)}</Button>
          </View>
        </ImageBackground >

      }
    </View>
  );
};

export default EncryptionDetails;
