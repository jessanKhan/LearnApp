import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  BackHandler,
  Alert,
} from 'react-native';
import Share from 'react-native-share';

import {useSelector, useDispatch} from 'react-redux';
import translate from '../../services/i18n/customTranslator';

import {AddLikeAPI} from '../../actions/homeAction';

//GET DEVICE'S SCREEN INFORMATION
let deviceHeight = Dimensions.get('window').height;

import {Icon} from 'react-native-elements';
//BACK ICON COMPONENT
import BackIcon from '../SVG/BackIcon';
import ShareIcon from '../SVG/ShareIcon';
import SvgUri from 'react-native-svg-uri';
import SvgImageData from '../../images/svg/svg';

const MinersHeader = props => {
  const userDBR = useSelector(state => state.homeReducer.USER_DB);
  const {
    imageLink,
    title,
    share,
    buttons,
    testRun,
    likeButton,
    prevRoute,
  } = props;
  console.log('previous route ', prevRoute);
  //IMPORT ROUTING FUNCTION
  const {goBack} = props.navigation;

  const lang = useSelector(state => state.languageReducer.lang);

  const shareOptions = {
    title: 'Share via',
    //message: 'some message',
    url:
      'https://play.google.com/store/apps/details?id=com.instaforex.android.cryptolearn&hl=ru',
    //social: Share.Social.FACEBOOK,
    //whatsAppNumber: "9199999999",  // country code + phone number(currently only works on Android)
    // filename: 'test', // only for base64 file in Android
  };

  const dispatch = useDispatch();

  const [likeButtonUpdater, SetlikeButtonUpdater] = useState(props.likeButton);

  useEffect(() => {
    const backAction = () => {
      if (prevRoute == 'Train') {
        props.navigation.navigate('TrainingCourses', {
          userDBR: userDBR,
        });
      } else {
        goBack();
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  // const et = this.props.encryptionStyle;

  return (
    <View style={props.encryptionStyle ? styles.screen2 : styles.screen}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => {
            prevRoute === 'Train'
              ? props.navigation.navigate('TrainingCourses', {
                  userDBR: userDBR,
                })
              : goBack();
          }}>
          <BackIcon width={24} height={24} fill="#FFF" />
        </TouchableOpacity>
      </View>
      {props.trainingCourses == 'true' && (
        <View>
          {/* <View style={styles.penIcon}>
                        <SvgUri
                            fill="white"
                            width="30"
                            height="30"
                            svgXmlData={SvgImageData.icon.checkbox_pen_outline}
                        />
                    </View> */}
          <View style={styles.counter}>
            <Text style={styles.counterText}>
              {props.navigation.state.params.unread}
            </Text>
          </View>
        </View>
      )}
      {//IF SHARE BUTTON NEEDED
      share && (
        <View style={styles.shareButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              Share.open(shareOptions);
            }}>
            <ShareIcon width={24} height={24} fill="#FFF" />
          </TouchableOpacity>
        </View>
      )}

      <ImageBackground
        source={props.onlineData == false ? imageLink : {uri: imageLink}}
        style={styles.imageBackground}>
        <View style={styles.background}>
          <View style={styles.textContainer}>
            <Text style={props.encryptionStyle ? styles.title2 : styles.title}>
              {title}
            </Text>
            {props.totalScorecon == true ? (
              <Text style={styles.titleX}>
                {translate('Total_Score', lang) + ' : ' + props.totalScore}
              </Text>
            ) : null}
          </View>
        </View>
      </ImageBackground>

      {buttons && (
        <TouchableWithoutFeedback onPress={() => testRun()}>
          <View style={styles.testButton}>
            <Icon
              raised
              name="edit"
              type="font-awesome"
              color="#3478FF"
              size={30}
              containerStyle={{
                backgroundColor: null,
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      )}
      {buttons &&
        (likeButtonUpdater == 0 ? (
          <TouchableWithoutFeedback
            onPress={() => {
              dispatch(AddLikeAPI(props.lessonID));
              SetlikeButtonUpdater(1);
              props.updaet_like();
            }}>
            <View style={styles.likeButton}>
              <Icon
                raised
                name="thumbs-o-up"
                type="font-awesome"
                color="#ff0072"
                size={28}
                containerStyle={{
                  backgroundColor: null,
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.likeButton}>
              <Icon
                raised
                name="thumbs-up"
                type="font-awesome"
                color="#ff0072"
                size={31}
                containerStyle={{
                  backgroundColor: null,
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: deviceHeight / 3.5,
    marginBottom: 62,
  },
  screen2: {
    height: deviceHeight / 3.5,
    marginBottom: 30,
  },
  counter: {
    position: 'absolute',
    top: 28,
    right: 25,
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#FF0069',
    // borderWidth: 4,
    //borderColor: "white",
    zIndex: 1000,
  },
  penIcon: {
    position: 'absolute',
    top: 30,
    right: 10,
    width: 35,
    height: 35,
    zIndex: 1000,
  },
  counterText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFF',
  },
  imageBackground: {
    width: '100%',
    height: deviceHeight / 3.2,
  },
  touchable: {
    width: 24,
    height: 24,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'montserrat',
    fontWeight: 'bold',
    fontSize: 36,
    color: 'white',
    textAlign: 'center',
  },
  title2: {
    fontFamily: 'montserrat',
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
  },
  titleX: {
    fontFamily: 'montserrat',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 33,
    // left: 25,
    zIndex: 100,
  },
  shareButtonContainer: {
    position: 'absolute',
    top: 33,
    right: 25,
    zIndex: 100,
  },
  testButton: {
    position: 'absolute',
    top: deviceHeight / 3.8,
    left: 24,
  },
  likeButton: {
    position: 'absolute',
    top: deviceHeight / 3.8,
    right: 24,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(28, 41, 69, .3)',
  },
});

export default MinersHeader;
