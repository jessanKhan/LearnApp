import AsyncStorage from '@react-native-community/async-storage';
import {call, put} from 'redux-saga/effects';
import actionType from '../../constants/constants';
import I18n from 'react-native-i18n';
//import {Init_Update_DB_Checker} from './New_Static_Method_Checker';
import {initial_app_load_home_page} from './initialHomePage';
import {_CrptoBoosterChecker} from './extends_crypto_point_booster';

import {
  _getGetLessonByBookByAPI,
  _getLessonLikeView,
  _getLawsData,
  _getEncryptionServiceID,
  _getTop100CryptoService,
  _getNewsData,
} from './homeDataLoad';

const _load_DB_Language = async () => {
  try {
    const lang_data = await AsyncStorage.getItem('Language@Data');
    let return_data;

    deviceLocale = I18n.currentLocale();
    let l_anguage = deviceLocale[0] + deviceLocale[1];

    l_anguage == 'ru' ? (l_anguage = 'ru') : (l_anguage = 'en');

    lang_data == null
      ? (return_data = l_anguage)
      : (return_data = JSON.parse(lang_data));
    return return_data;
  } catch (error) {
    console.log('DB Load Error', error);
  }
};

const _update_DB_Language = async val => {
  try {
    const lang_data = await AsyncStorage.getItem('Language@Data');
    let return_data = val;

    await AsyncStorage.setItem('Language@Data', JSON.stringify(val));

    return return_data;
  } catch (error) {
    console.log('Lang DB update Error');
  }
};

export const Load_Language = function*(action) {
  try {
    const lang = yield call(_load_DB_Language);

    let logStatus = true;

    yield call(initial_app_load_home_page, lang, logStatus);
    yield call(_CrptoBoosterChecker);

    yield put({
      type: actionType.LOAD_LANGUAGE,
      lang: lang,
    });
  } catch (error) {
    console.log('initial language load error', error);
  }
};

// Langage Updated

export const update_Language = function*(action) {
  try {
    const lang = yield call(_update_DB_Language, action.lang);

    let logStatus = true;

    yield call(initial_app_load_home_page, lang, logStatus);
    yield call(_CrptoBoosterChecker);

    yield put({
      type: actionType.LOAD_LANGUAGE,
      lang: lang,
    });
  } catch (error) {
    console.log('update language data load error', error);
  }
};
