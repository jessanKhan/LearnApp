import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
//Get net info
import NetInfo from "@react-native-community/netinfo";
import styles from './styles';
//HEADER COMPONENT
import CustomImageHeader from '../CustomImageHeader/CustomImageHeader';
//IMPORT DATA FETCH FUNCTIONS
import EncryptionService from '../../services/EncryptionService';
//i18n TRANSLATE FUNCTION FROM SERVICES FOLDER
import translate from '../../services/i18n/customTranslator';
//ICON FOR FLATLIST ITEM
import ArrowRightIcon from '../SVG/ArrowRightIcon';
//LOADING COMPONENT
import LoadingIndicator from '../LoadingIndicator';
import { Button } from 'react-native-paper';
import BackIcon from '../SVG/BackIcon';

const bgImage = require('../../images/AppBackground.png');

const headerImage = require('../../images/EncryptionHeader.png');

const EncryptionTechnologies = props => {
  const { goBack } = props.navigation;
  const encryptionService = new EncryptionService();
  //GET LANGUAGE INFO FROM STORE
  const lang = useSelector(state => state.languageReducer.lang);
  const [loading, setLoading] = useState(true);
  const [encryptionData, setEncryptionData] = useState(null);
  //GET NAVIGATION FUNCTION FROM PROPS
  const { navigate } = props.navigation;
  // GET NET STATE 
  const [isInternetReachable, setIsInternetReachable] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsInternetReachable(state.isInternetReachable);
      console.log("NET", state.isInternetReachable)
    });
    encryptionService.getData(lang).then(data => {
      setEncryptionData(data);
      setLoading(false);
    });

    // setEncryptionData(props.EncryptionServiceID);
    // setLoading(false);


    return () => {
      unsubscribe();
    }

  }, [lang]);

  //RENDER ITEM FOR FLATLIST COMPONENT
  const Item = props => {
    const { title } = props;
    return (
      <TouchableOpacity
        onPress={() => {
          encryptionService.getDescription(props.id, lang).then(data => {
            if (data.length > 0) {
              //PASSING to EncryptionDetails IF WE GET CONTENT
              navigate('EncryptionDetails', {
                lang: lang,
                id: props.id,
                title: title,
              });
            } else {
              Alert.alert(
                `${translate('warning', lang)}`,
                `${translate('encryptionNoData', lang)}`,
              );
            }
          });
        }}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <ArrowRightIcon width={24} height={24} fill="#555" />
        </View>
      </TouchableOpacity>
    );
  };


  const reload = props => {
    return (
      <View style={styles.screen}>
        {isInternetReachable && <FlatList
          data={encryptionData}
          ListHeaderComponent={
            <CustomImageHeader
              {...props}
              imageLink={headerImage}
              title={translate('EncryptionTechnologies', lang)}
              share={true}
              buttons={false}
              encryptionStyle={'true'}
              onlineData={false}
            //testRun={null}
            />
          }
          renderItem={({ item }) => (
            <Item title={item.Lession_Name} id={item.ID.toString()} />
          )}
          keyExtractor={item => item.ID.toString()}
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
  }
  //////////////////////////////   LOADING INDICATOR   //////////////////////////////////
  while (loading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.screen}>
      {isInternetReachable && <FlatList
        data={encryptionData}
        ListHeaderComponent={
          <CustomImageHeader
            {...props}
            imageLink={headerImage}
            title={translate('EncryptionTechnologies', lang)}
            share={true}
            buttons={false}
            encryptionStyle={'true'}
            onlineData={false}
          //testRun={null}
          />
        }
        renderItem={({ item }) => (
          <Item title={item.Lession_Name} id={item.ID.toString()} />
        )}
        keyExtractor={item => item.ID.toString()}
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
};

export default EncryptionTechnologies;
