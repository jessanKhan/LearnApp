import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';
//IMPORT LAWS DATA FETCH FUNCTION's
import LawsOnCryptoService from '../../services/LawsOnCryptoService';
//IMPORT ICON FOR FLATLIST
import ArrowRightIcon from '../SVG/ArrowRightIcon';
import BackIcon from '../SVG/BackIcon';
//LOADING COMPONENT
import LoadingIndicator from '../LoadingIndicator';
//FLATLIST HEADER BG
const headerBgImage = require('../../images/Laws/Background.png');
//I18-N TRANSLATOR
import translate from '../../services/i18n/customTranslator';

const LawsOnCryptoMarket = props => {
  //GET LANGUAGE INFO FROM STORE
  const lang = useSelector(state => state.languageReducer.lang);
  //NAVIGATION FUNCTIONS
  const { navigate, goBack } = props.navigation;
  //DATA FROM THE SERVER
  const lawsOnCryptoService = new LawsOnCryptoService();
  //FLATLIST DATA
  const [data, setData] = useState(null);
  //LOADING INDICATOR STATE
  const [loading, setLoading] = useState(true);

  // Set Loader 



  useEffect(() => {
    // if (lang === 'ru') {
    //   lawsOnCryptoService.getLawsDataRU().then(data => {
    //     setData(data);
    //     setLoading(false);
    //   });
    // } else {
    //   lawsOnCryptoService.getLawsDataEN().then(data => {
    //     setData(data);
    //     setLoading(false);
    //   });
    // }
    setData(props.LawsData);
    setLoading(false);
  }, [lang]);

  //////////////////////////////   LOADING INDICATOR   //////////////////////////////////
  while (loading) {
    return <LoadingIndicator />;
  }
  ///////////////////////////// FLATLIST HEADER ////////////////////////
  const LawsHeader = props => {
    //IMPORT ROUTING FUNCTION
    const { goBack } = props.navigation;

    return (
      <View style={styles.screen}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              goBack();
            }}>
            <BackIcon width={25} height={25} fill="#FFF" />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.shareButtonContainer}>
                    <TouchableOpacity onPress={()=>{goBack()}}>
                        <ShareIcon width={35} height={35} fill='#FFF'/> 
                    </TouchableOpacity>
                </View> */}
        <ImageBackground source={headerBgImage} style={styles.image}>
          <View style={styles.textContainer}>
            <Text style={lang == "en" ? styles.title : styles.title2}>{translate('Laws', lang)}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const Item = props => {
    //let deviceWidth = Dimensions.get('window').width;
    const { Lesson_Name, ID, ImageURL } = props.data;
    return (
      <TouchableOpacity
        onPress={() => {
          //PASSING DATA TO CRYPTONEWSDETAILS
          navigate('LawsDetails', {
            //PASSING TO LawsDetails
            id: ID,
            lang: lang,
            //PASSING TO RootNavigator LawsDetail header title
            title: props.data.Lesson_Name,
          });
        }}>
        <View style={styles.placeHolder}>
          <View style={styles.itemContainer}>
            <Image style={styles.flag} source={{ uri: ImageURL }} />
            <Text style={styles.text}>{Lesson_Name}</Text>

          </View>
          <View style={styles.arrow}>
            <ArrowRightIcon width={25} height={25} fill="#4381FF" />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={item => item.ID.toString()}
        ListHeaderComponent={<LawsHeader {...props} />}
      />
    </View>
  );
};

export default LawsOnCryptoMarket;
