import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
//FOOTER
import SocialNetworksBar from '../SocialNetworksBar';
//COMPONENT-CONSTUCTOR FOR EACH SECTION
import HomeCard from '../HomeCard';
//BACK ICON COMPONENT
import BackIcon from '../SVG/BackIcon';
//I18n CUSTOM TRANSLATOR FROM SERVICES FOLDER
import translate from '../../services/i18n/customTranslator';
//IMPORT IMAGES FOR EACH SECTION
const Top100CryptoCurrency = require('../../images/MinersCompendium/Top100CryptoCurrency.png');
const EncryptionTechnologies = require('../../images/MinersCompendium/EncryptionTechnologies.png');
const LawsOnCryptoMarket = require('../../images/MinersCompendium/LawsOnCryptoMarket.png');
const AirDrop = require('../../images/AirDrop/AirDrop.jpg');
//FETCHING SERVICE
import MinersService from '../../services/MinersService';
//LOADING INDICATOR
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

const TrainingCourses = props => {
  const minersService = new MinersService();
  /////////////////////////   GET NAVIGATION ACTIONS   /////////////////////////////////////
  const { navigate } = props.navigation;
  /////////////////////////   GET CURRENT LANGUAGE FROM STORE   ///////////////////////////////////////
  const lang = useSelector(state => state.languageReducer.lang);
  const UnredTop100CryptoData = useSelector(
    state => state.homeReducer.UnredTop100CryptoData,
  );
  const UnreadGetEncryptionTechinc = useSelector(
    state => state.homeReducer.UnreadGetEncryptionTechinc,
  );
  const UnredLawData = useSelector(state => state.homeReducer.UnredLawData);
  /////////////////////////////////////////    NEWS COUNTER    //////////////////////////////////////

  const [loading, setLoading] = useState(false);

  useEffect(() => { });

  ///////////////////////////////////// LOADING INDICATION //////////////////////////////
  while (loading) {
    return <LoadingIndicator />;
  }

  return (
    <ScrollView>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => {
            navigate('Home');
          }}>
          <BackIcon width={24} height={24} fill="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.screen}>
        <HomeCard
          {...props}
          imageLink={Top100CryptoCurrency}
          title={translate('TopC100CryptoCurrency', lang)}
          routeName="Top100CryptoCurrency"
          progressView={true}
          progressCounter={UnredTop100CryptoData}
        />
        <HomeCard
          {...props}
          imageLink={EncryptionTechnologies}
          title={translate('EncryptionTechnologies', lang)}
          routeName="EncryptionTechnologies"
          progressView={true}
          progressCounter={UnreadGetEncryptionTechinc}
        />
        <HomeCard
          {...props}
          imageLink={LawsOnCryptoMarket}
          title={translate('LawsofCrypto', lang)}
          routeName="LawsOnCryptoMarket"
          progressView={true}
          progressCounter={UnredLawData}
        />

        <SocialNetworksBar {...props} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 40,
    //left: 25,
    zIndex: 100,
  },
  touchable: {
    width: 24,
    height: 24,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default TrainingCourses;
