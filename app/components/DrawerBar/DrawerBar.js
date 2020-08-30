import React from 'react';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import { Header, Icon, Avatar } from "react-native-elements";
import Rate, { AndroidMarket } from 'react-native-rate';
import RateModal from 'react-native-store-rating';
import { Rating, AirbnbRating } from 'react-native-ratings';
import styles from './styles';
//i18n TRANSLATE FUNCTION FROM SERVICES FOLDER
import translate from '../../services/i18n/customTranslator';
//REDUX HOOK AND ACTIONS
import { useSelector } from 'react-redux';
//CLOSE SVG ICON
import CloseIcon from '../SVG/CloseIcon';
import { Button } from 'react-native-paper';

const bgImage = require('../../images/AppBackground.png');
const footerImage = require('../../images/InstaForexLogoGray.png');

const DrawerBar = props => {
  const { navigation } = props;
  //GET CURRENT LANGUAGE FROM STORE
  const lang = useSelector(state => state.languageReducer.lang);

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={bgImage}
        style={styles.bgImage}
        resizeMode="cover">
        <View style={styles.drawerHeader}>
          <TouchableOpacity
            style={styles.closeButtonTouch}
            onPress={() => {
              navigation.closeDrawer();
            }}>
            <CloseIcon width={24} height={24} fill="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LanguageSelect');
            }}>
            <Text style={styles.LanguageSelect}>
              {translate('DrawerLang', lang)}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionTwo}>

          <Avatar
            width={100}
            size="large"
            rounded
            icon={{ name: 'user', type: 'font-awesome', }}
            // overlayContainerStyle={{backgroundColor: 'white'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.6}
          />

        </View>

        <View style={styles.sectionThree}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AuthRoute");
            }}
          >
            <Text style={styles.username}>

              {translate("siginIn", lang)}

            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.userSection}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('StatisticsRoute');
              }}>
              <Text style={styles.headers}>
                {translate('Statistics', lang)}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.userSection}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('InstaForexApplication');
              }}>
              <Text style={styles.headers}>
                {translate('InstaForexApplication', lang)}
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.userSection}>
                        <TouchableOpacity onPress={()=>{navigation.navigate("RateAppRoute")}}>
                            <Text style={styles.headers}>{translate('RateOurApp', lang)}</Text>
                        </TouchableOpacity>
                    </View> */}
          <View style={styles.userSection}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('StartUpBonusRoute');
              }}>
              <Text style={styles.headers}>
                {translate('StartUpBonus', lang)}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.userSection}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('StartUpBonusRoute');
              }}>
              <Text style={styles.headers}>
                {translate('Crypto_Point_Booster', lang)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footerBar}>
          <View behavior="padding" style={styles.footer}>
            <StatusBar barStyle="light-content" backgroundColor="#006dd8" />
            {/* <StatusBar translucent backgroundColor="rgba(255, 255, 255, 0)" /> */}
            <Image style={styles.logo} source={footerImage} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DrawerBar;
