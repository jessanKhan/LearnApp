import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
///IMAGE LINK
const backgroundImage = require('../images/AppBackground.png');
//GET SCREEN WIDTH
let deviceHeight = Dimensions.get('window').height;
//IMPORT ACTIONS
import { updateLanguage } from '../actions/languageAction';
//import { Icon } from "react-native-elements";
import CheckIcon from '../components/SVG/CheckIcon';

const LanguageScreen = props => {
  //GET CURRENT LANGUAGE FROM STORE
  const lang = useSelector(state => state.languageReducer.lang);
  //IMPORT NAVIGATION FUNCTIONS
  const { goBack } = props.navigation;
  //IMPORT DISPATCH FUNCTION
  const dispatch = useDispatch();

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.screen}>
        <TouchableOpacity
          onPress={() => {
            dispatch(updateLanguage('en'));
            goBack();
          }}>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>English</Text>
              {lang === 'en' && (
                <View style={styles.icon}>
                  <CheckIcon width={20} height={20} fill="#ddd" />
                </View>
              )}
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(updateLanguage('ru'));
            goBack();
          }}>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Русский</Text>
              {lang === 'ru' && (
                <View style={styles.icon}>
                  <CheckIcon width={20} height={20} fill="#ddd" />
                </View>
              )}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: deviceHeight,
    width: '100%',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#FFF',
  },
  icon: {
    position: 'absolute',
    left: 90,
  },
});

export default LanguageScreen;
