import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import NetInfo from "@react-native-community/netinfo";
import SocialNetworksBar from '../components/SocialNetworksBar';
import HomeCard from '../components/HomeCard';
import MenuIcon from '../components/SVG/MenuIcon';
//I18n CUSTOM TRANSLATOR FROM SERVICES FOLDER
import translate from '../services/i18n/customTranslator';
//GET BACKGROUND FOR  HOME CARDS
const MinersCompendiumBackground = require('../images/MinersCompendiumBackground.png');
const CryptoNewsBackground = require('../images/CryptoNewsBackground.png');
const TrainingCoursesBackground = require('../images/TrainingCoursesBackground.png');
const CryptoPointBooster = require('../images/EncryptionHeader.png');
//ASYNC STORAGE IMPORT
import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorageService from '../services/AsyncStorageService';
//IMPORT SERVICES FOR progressCounter
import CryptoNewsData from '../services/CryptoNewsDataService';
import YoutubeData from '../services/YoutubeDataService';
import MinersService from '../services/MinersService';
//import { object } from 'C:/Users/ITG/AppData/Local/Microsoft/TypeScript/3.6/node_modules/@types/prop-types';
//IMPORT REQUIERES FOR APP HOME LOADING INDICATOR
const bgImage = require('../images/AppBackground.png');
let deviceHeight = Dimensions.get('window').height;

// Called Redux Action
import { homeDataLoad, homeDataRefresh } from '../actions/homeAction';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
      connection_Status: ""
    };

    // this.navigationWillFocusListener = props.navigation.addListener(
    //   'willFocus',
    //   () => {

    //     this.props.initData == 'success'
    //       ? this.props.dispatch(
    //         homeDataRefresh(
    //           this.props.lang,
    //           this.props.GetLesson,
    //           this.props.YoutubeData,
    //           this.props.GetNews_Data,
    //           this.props.Top100Currency,
    //           this.props.EncryptionServiceID,
    //           this.props.LawsData,
    //           this.props.GetNewUpdateNews_Data
    //         ),
    //       )
    //       : this.props.lnagLoaded == true
    //         ? this.props.dispatch(homeDataLoad(props.lang))
    //         : null;
    //   },
    // );
  }

  deviceNetConnection = () => {
    NetInfo.fetch().then(state => {
      if (state.isInternetReachable == true) {
        this.connestionStatusON();
      } else {
        this.connestionStatusOff();
      }
    });
  }

  connestionStatusON = () => {
    this.setState({ connection_Status: true })
  }
  connestionStatusOff = () => {
    this.setState({ connection_Status: false })
  }
  componentWillUnmount() {
    // Remove the event listener before removing the screen from the stack
    //this.navigationWillFocusListener.remove();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.loader !== state.loader) {
      return {
        loader: props.loader,
      };
    }

    return null;
  }

  render() {
    if (this.state.loader == true) {
      return (
        <ImageBackground
          source={bgImage}
          style={styles.bgImage}
          resizeMode="cover">
          <View style={styles.loadingIndicator}>
            <Image
              source={require('../images/InstaForexLogoGray.png')}
              style={{ width: 200, height: 50 }}
              color="#FFF"
            />
          </View>
        </ImageBackground>
      );
    } else {
      return (
        <ScrollView>
          <View style={styles.drawerButtonContainer}>
            {/*DRAWER MENU BUTTON*/}
            <TouchableOpacity
              style={styles.drawerButtonTouch}
              onPress={() => {
                this.props.navigation.toggleDrawer();
              }}>
              <View style={styles.drawerButtonView}>
                <MenuIcon width={24} height={24} fill="#FFF" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.screen}>
            {/*TRAINING COURSES*/}
            <HomeCard
              {...this.props}
              imageLink={TrainingCoursesBackground}
              title={translate('TrainingCourses', this.props.lang)}
              routeName="TrainingCourses"
              progressView={true}
              USER_DB={this.props.USER_DB}
              progressCounter={this.props.T_C_unread_data}
            />
            {/*MINER'S COMPENDIUM PAGE*/}
            <HomeCard
              {...this.props}
              imageLink={CryptoNewsBackground}
              title={translate('MinersCompendium', this.props.lang)}
              routeName="MinersCompendiumScreen"
              progressView={true}
              progressCounter={this.props.Min_C_unread_data}
            />
            {/*CRYPTO NEWS PAGE*/}
            <HomeCard
              {...this.props}
              imageLink={MinersCompendiumBackground}
              title={translate('CryptoAnalytics', this.props.lang)}
              routeName="CryptoNews"
              progressView={false}
              progressCounter={this.props.C_N_unread_data}
            />
            {/* Crypto point Booster */}
            <HomeCard
              {...this.props}
              imageLink={CryptoPointBooster}
              title={translate('Crypto_Point_Booster', this.props.lang)}
              routeName="CryptoPointBooster"
              progressView={false}
              progressCounter={this.props.C_N_unread_data}
            />
            {/*CRYPTO NEWS PAGE*/}
            <SocialNetworksBar {...this.props} />
          </View>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  drawerButtonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 100,
  },
  menuBar: {
    width: 100,
    height: 100,
  },
  drawerButtonTouch: {
    width: 100,
    height: 100,
  },
  drawerButtonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    height: deviceHeight,
    width: '100%',
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateProps = state => {
  const lang = state.languageReducer.lang;
  const lnagLoaded = state.languageReducer.lnagLoaded;
  const T_C_unread_data = state.homeReducer.T_C_unread_data;
  const Min_C_unread_data = state.homeReducer.Min_C_unread_data;
  const C_N_unread_data = state.homeReducer.C_N_unread_data;
  const loader = state.homeReducer.loader;
  const USER_DB = state.homeReducer.USER_DB;
  const GetLesson = state.homeReducer.GetLesson;
  const initData = state.homeReducer.initData;
  const YoutubeData = state.homeReducer.YoutubeData;
  const GetNews_Data = state.homeReducer.GetNews_Data;
  const LawsData = state.homeReducer.LawsData;
  const EncryptionServiceID = state.homeReducer.EncryptionServiceID;
  const Top100Currency = state.homeReducer.Top100Currency;
  const GetNewUpdateNews_Data = state.homeReducer.GetNewUpdateNews_Data;

  return {
    lang,
    lnagLoaded,
    T_C_unread_data,
    Min_C_unread_data,
    C_N_unread_data,
    loader,
    USER_DB,
    GetLesson,
    initData,
    YoutubeData,
    GetNews_Data,
    LawsData,
    EncryptionServiceID,
    Top100Currency,
    GetNewUpdateNews_Data,
  };
};

export default connect(mapStateProps)(HomeScreen);
