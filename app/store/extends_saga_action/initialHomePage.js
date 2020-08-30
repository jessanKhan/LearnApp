import {takeEvery, select, call, put} from 'redux-saga/effects';
import Top100EN from '../../data/Top100Currency_EN';
import Top100RU from '../../data/Top100Currency_RU';

import actionType from '../../constants/constants';

import {
  getLocalStorage,
  getLocalStorageforYoutube,
  _getUnreadYoutubeData,
  getLocalStorageforCryptoNews,
  _getUnredCryptonewsData,
  getLocalStorageforTop100CryptoCurrency,
  _getUnreadTop100CryptoService,
  getLocalStorageforLawCryptoMarket,
  _GetUnredLawCryptoMarket,
  getLocalStorageforEncryptionTechinc,
  _GetUnredEncryptionTechinc,
  getLocalStorageforCryptoN,
  _getUnredCryptoNData,
} from './extends_DB_load';

import {
  _getLesson,
  _getLawsData,
  _getEncryptionServiceID,
} from './homeDataLoad';

import {
  get_LocalStorage_for_TrainingCourse,
  get_LocalStorage_for_LawOnCrypto,
  get_LocalStorage_for_EncryptionTech,
  get_LocalStorage_for_TrainingCourse_RU,
  get_LocalStorage_for_EncryptionTech_RU,
  get_LocalStorage_for_LawOnCrypto_RU,
} from './New_DB_Collection';

import {Init_Update_DB_Checker} from './New_Static_Method_Checker';

export const initial_app_load_home_page = function*(lang, logStatus) {
  try {
    if (logStatus == true) {
      // first time app loaded

      yield call(Init_Update_DB_Checker, lang);
    } else {
      let GetTop100CryptoService,
        training_Course_data,
        GetLawsData,
        GetEncryptionServiceID;

      if (lang == 'en') {
        // training Course load from local DB
        training_Course_data = yield call(get_LocalStorage_for_TrainingCourse);

        // LawOnCrypto load from local DB
        GetLawsData = yield call(get_LocalStorage_for_LawOnCrypto);

        // EncryptionTechinc Load from Loal DB
        GetEncryptionServiceID = yield call(
          get_LocalStorage_for_EncryptionTech,
        );
      } else {
        // training Course load from local DB
        training_Course_data = yield call(
          get_LocalStorage_for_TrainingCourse_RU,
        );

        // LawOnCrypto load from local DB
        GetLawsData = yield call(get_LocalStorage_for_LawOnCrypto_RU);

        // EncryptionTechinc Load from Loal DB
        GetEncryptionServiceID = yield call(
          get_LocalStorage_for_EncryptionTech_RU,
        );
      }

      if (training_Course_data == null) {
        // Get Lesson From Api
        const _GetLesson = yield call(_getLesson, lang);
        const GetLesson = yield _GetLesson.json();

        training_Course_data = GetLesson;
      }

      if (GetLawsData == null) {
        // Get Lesson From Api
        const _GetLawsData = yield call(_getLawsData, lang);
        const _GETLawsData = yield _GetLawsData.json();
        GetLawsData = _GETLawsData;
      }

      if (GetEncryptionServiceID == null) {
        // Get EncryptionService From Api
        const _GetEncryptionServiceID = yield call(
          _getEncryptionServiceID,
          lang,
        );
        const _Encryption_Techinc = yield _GetEncryptionServiceID.json();

        GetEncryptionServiceID = _Encryption_Techinc;
      }

      // / Local DB unread law crypto market
      const _getLocalStorageforLawCryptoMarket = yield call(
        getLocalStorageforLawCryptoMarket,
      );

      // Get LocalStroage From DB
      const _getLocalStorage = yield call(getLocalStorage);

      const _Total_UnRead_data =
        training_Course_data.length - _getLocalStorage[0];

      const GetUnredLawData = yield call(
        _GetUnredLawCryptoMarket,
        GetLawsData,
        _getLocalStorageforLawCryptoMarket,
      );

      // Unread 100 Data
      lang == 'en'
        ? (GetTop100CryptoService = Top100EN)
        : (GetTop100CryptoService = Top100RU);

      //  Local DB unread top 100 crypto Curency
      const _getLocalStorageforTop100CryptoCurrency = yield call(
        getLocalStorageforTop100CryptoCurrency,
      );

      const GetUnredTop100CryptoData = yield call(
        _getUnreadTop100CryptoService,
        GetTop100CryptoService,
        _getLocalStorageforTop100CryptoCurrency,
      );

      // Local DB unread encryptionData
      const _getLocalStorageforEncryptionTechinc = yield call(
        getLocalStorageforEncryptionTechinc,
      );

      // Get Unread EncryptionTechinc

      const GetEncryptionTechinc = yield call(
        _GetUnredEncryptionTechinc,
        GetEncryptionServiceID,
        _getLocalStorageforEncryptionTechinc,
      );

      const _Total_UnRead_Miner_data =
        GetUnredLawData + GetUnredTop100CryptoData + GetEncryptionTechinc;

      console.log(
        '_Total_UnRead_data',
        lang,
        _Total_UnRead_data,
        GetUnredLawData,
        GetUnredTop100CryptoData,
        _Total_UnRead_Miner_data,
      );
    }

    // yield put({
    //   type: actionType.INIT_HOME_DATA_LOAD,
    //   T_C_unread_data: _Total_UnRead_data,
    //   Min_C_unread_data: _Total_UnRead_Miner_data,
    //   // C_N_unread_data: _Total_UnRead_C_N_data,
    // });
  } catch (error) {
    console.log('Error is : initial_app_load_home_page ::', error);
  }
};
