import React, { useEffect } from 'react';
import {
  Dimensions,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  BackHandler,
  Alert,
  NativeModules,
} from 'react-native';
import RNRestart from 'react-native-restart';
import NetInfo from '@react-native-community/netinfo';
import { connect } from 'react-redux';
import { Badge } from 'react-native-elements';
//NAVIGATION'S LIBRARIES IMPORT
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
//NAVIGATION FUNCTIONS
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import BackIcon from '../components/SVG/BackIcon';
//IMPORT CRYPTO NEWS DETAILS PAGES COMPONENTS
import YoutubePlay from '../components/YoutubePlay';
import NewsDetails from '../components/CryptoNewsDetails';
import AnalyticsDetails from '../components/CryptoAnalyticsDetails';
//IMPORT DRAWER BAR COMPONENT
import DrawerBar from '../components/DrawerBar/DrawerBar';
import LanguageScreen from '../screens/LanguageScreen';
import InstaForexApp from '../components/InstaForexApp';
import Statistics from '../components/Statistics/Statistics';
//IMPORT HOME SECTION COMPONENTS
import HomeScreen from '../screens/HomeScreen';
import TrainingCourses from '../components/TrainingCourses';
import MinersCompendium from '../components/MinersCompendium';
//IMPORT TRAINING COURSES COMPONENT
import TrainingCourseDetails from '../components/TrainingCourseDetails';
//IMPORT TABS COMPONENTS
import Cryptotab from '../components/CryptoTabs/CryptoTabNav';
import CryptoNewsList from '../components/CryptoNewsList';
import CryptoAnalyticsList from '../components/CryptoAnalyticsList';
import CryptoNewsVideo from '../components/CryptoNewsVideo';
//import CryptoAnalytics from '../components/CryptoAnalytics';
//IMPORT COMPONENTS FOR MINERS COMPENDIUM
import Top100CryptoCurrency from '../components/Top100CryptoCurrency';
import EncryptionTechnologies from '../components/EncryptionTechnologies';
import EncryptionDetails from '../components/EncryptionDetails';
import LawsOnCryptoMarket from '../components/LawsOnCryptoMarket';
import LawsDetails from '../components/LawsDetails';
import SocialNetwork from '../components/SocialNetwork';
import StartUPBonus from '../components/StartUPBonus';
import AirDropIndex from '../components/AirDrop';
import CryptoPointBooster from '../components/CryptoPoinBooster/CryptoPoinBooster';
import Login from "../components/Login/index";
import Register from "../components/Register/index";
import PasswordRecovery from "../components/PasswordRecovery/index";
import ResendVerification from "../components/ResendVerification/index";
//IMPORT HEADER BACKGROUNDIMAGE LINKS
const lawsHeaderImage = require('../images/Laws/Background.png');
//GET DEVICE WIDTH
const deviceWidth = Dimensions.get('screen').width;

//I18n CUSTOM TRANSLATOR FROM SERVICES FOLDER
import translate from '../services/i18n/customTranslator';

import { initialLoadLanguage } from '../actions/languageAction';

import Geolocation from '@react-native-community/geolocation';
import firebase from '@react-native-firebase/app';
// import firebase from 'react-native-firebase';

const firebaseconfig = {
  apiKey: 'AIzaSyC1xik-7VEcKnsS7WUhHzQHiOrEgv6wC78',
  authDomain: 'cryptolearn-f14bf.appspot.com',
  databaseURL: 'https://cryptolearn-f14bf.firebaseio.com',
  projectId: 'cryptolearn-f14bf',
  storageBucket: 'cryptolearn-f14bf.appspot.com',
  messagingSenderId: '41560077831',
  appId: '1:41560077831:android:44ed21a5c85b2cd5d65ca2',
};

// firebase.initializeApp(firebaseconfig);

class RootNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connection_Status: '',
    };
    this.props.dispatch(initialLoadLanguage());

    // firebase.crashlytics().enableCrashlyticsCollection();

    // firebase
    //   .auth()
    //   .signInAnonymously()
    //   .then(user => {
    //     console.log(user.isAnonymous);
    //   });

    // console.log('idddd', id);
  }

  componentDidMount() {
    NetInfo.fetch().then(state => {
      if (state.isInternetReachable == false) {
        Alert.alert(
          translate('ConnectionError', this.props.lang),
          translate('PleaseCheck', this.props.lang),
          [
            {
              text: translate('ExitAppTitle', this.props.lang),
              onPress: () => {
                BackHandler.exitApp();
              },
            },
            {
              text: translate('TryAgain', this.props.lang),
              onPress: () => RNRestart.Restart(),
            },
          ],
          { cancelable: false },
        );
      }
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isInternetReachable);
    });
  }

  deviceNetConnection = () => {
    NetInfo.fetch().then(state => {
      if (state.isInternetReachable == true) {
        this.connestionStatusON();
      } else {
        this.connestionStatusOff();
      }
    });
  };

  connestionStatusON = () => {
    this.setState({ connection_Status: true });
  };
  connestionStatusOff = () => {
    this.setState({ connection_Status: false });
  };

  reloadpage = () => {
    this.deviceNetConnection();
    setTimeout(() => {
      if (!this.state.connection_Status) {
        Alert.alert(
          'Connection error!',
          '\n\nPlease Check Your Internet Connection',
          [
            {
              text: 'EXIT',
              onPress: () => {
                BackHandler.exitApp();
              },
            },
            { text: 'Try Again', onPress: () => RNRestart.Restart() },
          ],
          { cancelable: false },
        );
      }
    }, 10000);
  };

  UNSAFE_componentWillMount() {
    // console.log("Device", deviceWidth)
    // if (deviceWidth == 320)
    BackHandler.addEventListener('hardwareBackPress', () => {
      Alert.alert(
        '',
        translate('EXitApp', this.props.lang),
        [
          {
            text: translate('Cancel', this.props.lang),
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => BackHandler.exitApp() },
        ],
        { cancelable: false },
      );
      return true;
    });
  }

  // componentWillUnmount() {

  //   NetInfo.isConnected.removeEventListener(
  //     'connectionChange',
  //     this._handleConnectivityChange

  //   );

  // }

  // _handleConnectivityChange = (isConnected) => {

  //   if (isConnected == true) {
  //     this.setState({ connection_Status: "Online" })
  //   }
  //   else {
  //     this.setState({ connection_Status: "Offline" })
  //   }
  // };

  render() {
    const CryptoNewsTabs = createMaterialTopTabNavigator(
      {
        // This section is temporarily hidden. In future this feature will be available

        // CryptoNewsVideo: {
        //   screen: CryptoNewsVideo,
        //   navigationOptions: {
        //     tabBarLabel: (
        //       <View>
        //         <Text style={styles.cryptoNewsTabsHeader}>
        //           {translate('VideoReview', this.props.lang)}
        //           {/* <Text style={{ color: "grey" }} > {this.props.UnreadYoutubedata} </Text> */}
        //         </Text>
        //         <Badge
        //           badgeStyle={styles.BadgeStyle}
        //           value={this.props.UnreadYoutubedata}
        //           containerStyle={{ position: 'absolute', top: -12, right: -45 }}
        //         />
        //       </View>
        //     ),
        //   },
        // },

        CryptoAnalyticsList: {
          screen: CryptoAnalyticsList,
          navigationOptions: {
            tabBarLabel: (
              <View>
                <Text style={styles.cryptoNewsTabsHeader}>
                  {translate('Analytics', this.props.lang)}
                  {/* <Text style={{ color: "grey" }}> {this.props.UnredCryptonewsData} </Text> */}
                </Text>
                {/* <Badge
                  badgeStyle={styles.BadgeStyle}
                  value={this.props.UnredCryptonewsData}
                  containerStyle={{position: 'absolute', top: -12, right: -30}}
                /> */}
              </View>
            ),
          },
        },
        CryptoNewsList: {
          screen: CryptoNewsList,
          navigationOptions: {
            tabBarLabel: (
              <View>
                <Text style={styles.cryptoNewsTabsHeader}>
                  {translate('News', this.props.lang)}
                  {/* <Text style={{ color: "grey" }}> {this.props.UnredCryptonewsData} </Text> */}
                </Text>
                {/* <Badge
                  badgeStyle={styles.BadgeStyle}
                  value={this.props.UnGetN_Data}
                  containerStyle={{position: 'absolute', top: -12, right: -60}}
                /> */}
              </View>
            ),
          },
        },
      },
      {
        tabBarOptions: {
          indicatorStyle: {
            backgroundColor: '#0a88ff',
          },
          activeTintColor: '#303b55',
          inactiveTintColor: '#6c7984',
          style: {
            backgroundColor: '#fff',
            height: 40,
          },
        },
        swipeEnabled: true,
      },
    );

    const CryptoNewsNavigator = createStackNavigator({
      CryptoNewsTabs: {
        screen: CryptoNewsTabs,
        navigationOptions: props => {
          return {
            title: translate('CryptoAnalytics', this.props.lang),
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'rgb(48,59,85)',
              height: 80,
            },
            headerTitleStyle: {
              top: 8,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerBackButton}
                onPress={() => {
                  props.navigation.navigate('Home');
                }}>
                <BackIcon width={24} height={24} fill="#FFF" top={8} />
              </TouchableOpacity>
            ),
          };
        },
      },
      // YoutubePlay: {
      //   screen: YoutubePlay,
      //   navigationOptions: props => {
      //     return {
      //       title: translate('CryptoNews', this.props.lang),
      //       headerTintColor: '#fff',
      //       headerStyle: {
      //         backgroundColor: 'rgb(48,59,85)',
      //         height: 80,
      //       },
      //       headerTitleStyle: {
      //         top: 8,
      //       },
      //       headerLeft: () => (
      //         <TouchableOpacity
      //           style={styles.headerBackButton}
      //           onPress={() => {
      //             props.navigation.goBack();
      //           }}>
      //           <BackIcon width={24} height={24} fill="#FFF" top={8} />
      //         </TouchableOpacity>
      //       ),
      //     };
      //   },
      // },
      AnalyticsDetails: {
        screen: AnalyticsDetails,
        navigationOptions: props => {
          return {
            title: translate('CryptoAnalytics', this.props.lang),
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'rgb(48,59,85)',
              height: 80,
            },
            headerTitleStyle: {
              top: 8,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerBackButton}
                onPress={() => {
                  props.navigation.goBack();
                }}>
                <BackIcon width={24} height={24} fill="#FFF" top={8} />
              </TouchableOpacity>
            ),
          };
        },
      },
      NewsDetails: {
        screen: NewsDetails,
        navigationOptions: props => {
          return {
            title: translate('CryptoAnalytics', this.props.lang),
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'rgb(48,59,85)',
              height: 80,
            },
            headerTitleStyle: {
              top: 8,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={styles.headerBackButton}
                onPress={() => {
                  props.navigation.goBack();
                }}>
                <BackIcon width={24} height={24} fill="#FFF" top={8} />
              </TouchableOpacity>
            ),
          };
        },
      },
    });

    const Fadetransition = (index, position) => {
      const sceneRange = [index - 1, index];
      const outputOpacity = [0, 1];
      const transition = position.interpolate({
        inputRange: sceneRange,
        outputRange: outputOpacity,
      });
      return {
        opacity: transition,
      };
    };

    const NavigationConfig = () => {
      return {
        screenInterpolator: sceneProps => {
          const position = sceneProps.position;
          const scene = sceneProps.scene;
          const index = scene.index;

          return Fadetransition(index, position);
        },
      };
    };

    const MinersCompendiumNavigation = createStackNavigator(
      {
        MinersCompendium: {
          screen: MinersCompendium,
          navigationOptions: { header: null },
        },
        Top100CryptoCurrency: {
          screen: Top100CryptoCurrency,
          navigationOptions: { header: null },
        },
        EncryptionTechnologies: {
          screen: EncryptionTechnologies,
          navigationOptions: { header: null },
        },
        EncryptionDetails: {
          screen: EncryptionDetails,
          navigationOptions: { header: null },
        },
        LawsOnCryptoMarket: {
          screen: LawsOnCryptoMarket,
          navigationOptions: { header: null },
        },
        LawsDetails: {
          screen: LawsDetails,
          navigationOptions: props => {
            return {
              title: props.navigation.getParam('title'),
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: 'rgb(48,59,85)',
                height: 80,
              },
              headerTitleStyle: {
                top: 8,
              },
              headerLeft: () => (
                <TouchableOpacity
                  style={styles.headerBackButton}
                  onPress={() => {
                    props.navigation.goBack();
                  }}>
                  <BackIcon width={24} height={24} fill="#FFF" top={8} />
                </TouchableOpacity>
              ),
            };
          },
        },
        SocialNetwork: {
          screen: SocialNetwork,
          navigationOptions: { header: null },
        },
      },
      { transitionConfig: NavigationConfig },
    );

    const HomeNavigator = createStackNavigator(
      {
        Home: { screen: HomeScreen, navigationOptions: { header: null } },
        TrainingCourses: {
          screen: TrainingCourses,
          navigationOptions: { header: null },
        },
        TrainingCourseDetails: {
          screen: TrainingCourseDetails,
          navigationOptions: { header: null },
        },
        MinersCompendiumScreen: {
          screen: MinersCompendiumNavigation,
          navigationOptions: { header: null },
        },
        CryptoNews: {
          screen: Cryptotab,
          navigationOptions: { header: null },
        },
        SocialNetwork: {
          screen: SocialNetwork,
          navigationOptions: { header: null },
        },
        CryptoPointBooster: {
          screen: CryptoPointBooster,
          navigationOptions: { header: null },
        },
        StartUpBonusRoute: {
          screen: StartUPBonus,
          navigationOptions: props => {
            return {
              title: translate('StartUpBonus', this.props.lang),
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: 'rgb(48,59,85)',
                height: 80,
              },
              headerTitleStyle: {
                top: 8,
              },
              headerLeft: () => (
                <TouchableOpacity
                  style={styles.headerBackButton}
                  onPress={() => {
                    props.navigation.goBack();
                  }}>
                  <BackIcon width={24} height={24} fill="#FFF" top={8} />
                </TouchableOpacity>
              ),
            };
          },
        },
      },
      {
        initialRouteName: 'Home',
        transitionConfig: NavigationConfig,
      },
    );


    const AuthNavigator = createStackNavigator(
      {
        LoginRoute: {
          screen: Login,
        },
        RegisterRoute: {
          screen: Register,
        },
        PasswordRecoveryRoute: { screen: PasswordRecovery },
        ResendVerificationRoute: { screen: ResendVerification },
      },
      {
        initialRouteName: "LoginRoute",
        headerMode: "none",
      },
    );

    const MainNavigator = createDrawerNavigator(
      {
        MainPage: { screen: HomeNavigator },
        AuthRoute: { screen: AuthNavigator },
        LanguageSelect: { screen: LanguageScreen },
        StatisticsRoute: { screen: Statistics },
        RateAppRoute: { screen: HomeNavigator },
        InstaForexApplication: { screen: InstaForexApp },
      },
      {
        drawerWidth: deviceWidth <= 320 ? deviceWidth / 1.2 : deviceWidth / 1.3,
        transitionConfig: NavigationConfig,
        contentComponent: props => {
          return <DrawerBar {...props} />;
        },
      },
    );

    const MainNavigatorContainer = createAppContainer(MainNavigator);

    return (
      <View style={styles.screen}>
        <MainNavigatorContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  headerBackButton: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  cryptoNewsTabsHeader: {
    fontWeight: 'bold',
    color: 'rgb(48,59,85)',
  },
  BadgeStyle: {
    backgroundColor: '#FF0069',
    height: 25,
    width: 25,
    borderRadius: 50,
  },
});

const mapStateToProps = state => {
  const lang = state.languageReducer.lang;
  const UnredCryptonewsData = state.homeReducer.UnredCryptonewsData;
  const UnreadYoutubedata = state.homeReducer.UnreadYoutubedata;
  const UnredCryptoanalyticsData = state.homeReducer.UnredCryptoanalyticsData;
  const UnGetN_Data = state.homeReducer.UnGetN_Data;
  return {
    lang,
    UnredCryptonewsData,
    UnreadYoutubedata,
    UnredCryptoanalyticsData,
    UnGetN_Data,
  };
};

export default connect(mapStateToProps)(RootNavigator);
