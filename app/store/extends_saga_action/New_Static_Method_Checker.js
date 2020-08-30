import {takeEvery, select, call, put} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import actionType from '../../constants/constants';

import Top100DataEN from '../../data/Top100Currency_EN';
import Top100DataRU from '../../data/Top100Currency_RU';

// Local Static Data _EncryptionTech
import EncryptionTechEN from '../../data/Encryption_Technologies_EN';
import EncryptionTechRU from '../../data/Encryption_Technologies_RU';

// Local Static Trainig Course

import Training_Course_Local_DATA_EN from '../../data/Training_Course_Local_DATA';
import Training_Course_Local_DATA_RU from '../../data/Training_Course_Local_DATA_RU';

// Crypto_Market_EN for law

import Crypto_Market_EN from '../../data/Crypto_Market_EN';
import Crypto_Market_RU from '../../data/Crypto_Market_RU';

// all export method

import {
  get_LocalStorage_for_TrainingCourse,
  set_Update_LocalStorage_for_TrainingCourse,
  set_LocalStorage_for_DB_timstamp,
  get_LocalStorage_for_DB_timstamp,
  get_LocalStorage_for_EncryptionTech,
  set_Update_LocalStorage_for_EncryptionTech,
  get_LocalStorage_for_LawOnCrypto,
  set_Update_LocalStorage_for_LawOnCrypto,
  get_LocalStorage_for_Top100Currency,
  set_Update_LocalStorage_for_Top100Currency,
  get_LocalStorage_for_TrainingCourse_RU,
  set_Update_LocalStorage_for_TrainingCourse_RU,
  get_LocalStorage_for_EncryptionTech_RU,
  set_Update_LocalStorage_for_EncryptionTech_RU,
  get_LocalStorage_for_LawOnCrypto_RU,
  set_Update_LocalStorage_for_LawOnCrypto_RU,
  get_LocalStorage_for_Top100Currency_RU,
  set_Update_LocalStorage_for_Top100Currency_RU,
} from './New_DB_Collection';

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

import {_getLessonLikeView} from './homeDataLoad';

// API call for Update Checker
export const _updated_API_Checker = bodyX =>
  fetch(`https://data1.contentdatapro.com/api/CryptoLearn/v1/CheckUpdates`, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    }),
    body: JSON.stringify(bodyX),
  });

// API call for Add New Api Data
export const _ADD_API_Data = bodyIS =>
  fetch(`https://data1.contentdatapro.com/api/CryptoLearn/v1/AddLesson`, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    }),
    body: JSON.stringify(bodyIS),
  });

// Api call for exiting update

export const _updated_Using_API_ = body_X =>
  fetch(`https:data1.contentdatapro.com/api/CryptoLearn/v1/UpdateLesson`, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    }),
    body: JSON.stringify(body_X),
  });

export const Init_Update_DB_Checker = function*(action) {
  try {
    const _updated_Checker_for_DB = yield call(
      get_LocalStorage_for_DB_timstamp,
    );

    let bodyX;

    // Collect timstamp from DB and check need to update sync data From DB

    _updated_Checker_for_DB == null
      ? (bodyX = {
          ClientTimeStamp: 26355679,
          LessonCount: 40,
          language: action,
        })
      : (bodyX = {
          ClientTimeStamp: _updated_Checker_for_DB.ClientTimeStamp,
          LessonCount: _updated_Checker_for_DB.LessonCount,
          language: action,
        });

    const _updated_API = yield call(_updated_API_Checker, bodyX);
    const updated_API = yield _updated_API.json();

    //  0 for no update 1 for yes update

    updated_API.Update == 1
      ? yield call(_NewUpdateAvailable, updated_API, action, bodyX)
      : yield call(_NoUpdateAvaliable, action);
  } catch (error) {
    console.log('initial language load error');
  }
};

// Yes api give us 1 update or add new data avaliable 50 for new and 60 for existing

export const _NewUpdateAvailable = function*(action, lang, bodyX) {
  try {
    action.UpdateCode == 50
      ? yield call(_ADDUpdateAvailable, action, lang, bodyX)
      : yield call(_EXISTINGUpdateAvailable, action.updated_API, lang, bodyX);
  } catch (error) {
    console.log('Error is now _NewUpdateAvailable ', error);
  }
};

// Add New DATA

export const _ADDUpdateAvailable = function*(action, lang, body) {
  try {
    let bodyX = body;

    let Training_Course_Local_DATA,
      EncryptionTech,
      LawOnCrypto,
      _LawOnCrypto,
      _EncryptionTech,
      Get_Training_DB,
      GetTop100Crypto_Service;

    if (lang == 'en') {
      // when lang is english

      // Local Storage JSON File For Trainig course
      Get_Training_DB = yield call(get_LocalStorage_for_TrainingCourse);

      // For English Get_Training_DB

      Get_Training_DB == null
        ? (Training_Course_Local_DATA = Training_Course_Local_DATA_EN)
        : (Training_Course_Local_DATA = Get_Training_DB);

      // For EncryptionTech Data load form DB
      _EncryptionTech = yield call(get_LocalStorage_for_EncryptionTech);

      // For English _EncryptionTech

      _EncryptionTech == null
        ? (EncryptionTech = EncryptionTechEN)
        : (EncryptionTech = _EncryptionTech);

      // For _LawOnCrypto Data load form DB
      _LawOnCrypto = yield call(get_LocalStorage_for_LawOnCrypto);

      // For _LawOnCrypto  English
      _LawOnCrypto == null
        ? (LawOnCrypto = Crypto_Market_EN)
        : (LawOnCrypto = _LawOnCrypto);
    } else {
      // when lang is russain

      // Local Storage JSON File For Trainig course
      Get_Training_DB = yield call(get_LocalStorage_for_TrainingCourse_RU);

      // For  Get_Training_DB

      Get_Training_DB == null
        ? (Training_Course_Local_DATA = Training_Course_Local_DATA_RU)
        : (Training_Course_Local_DATA = Get_Training_DB);

      // For EncryptionTech Data load form DB
      _EncryptionTech = yield call(get_LocalStorage_for_EncryptionTech_RU);

      // For  _EncryptionTech

      _EncryptionTech == null
        ? (EncryptionTech = EncryptionTechRU)
        : (EncryptionTech = _EncryptionTech);

      // For _LawOnCrypto Data load form DB
      _LawOnCrypto = yield call(get_LocalStorage_for_LawOnCrypto_RU);

      // For _LawOnCrypto
      _LawOnCrypto == null
        ? (LawOnCrypto = Crypto_Market_RU)
        : (LawOnCrypto = _LawOnCrypto);
    }

    // Add new Data
    let Api_Result = yield call(_ADD_API_Data, bodyX);
    const _Api_Result = yield Api_Result.json();

    yield _Api_Result.newLessons.map(e =>
      e.BookID == 1
        ? ArrayValueChecker(e.ID, Training_Course_Local_DATA) == false
          ? Training_Course_Local_DATA.push(e)
          : null
        : e.BookID == 2
        ? ArrayValueChecker(e.ID, EncryptionTech) == false
          ? EncryptionTech.push(e)
          : null
        : e.BookID == 3
        ? ArrayValueChecker(e.ID, LawOnCrypto) == false
          ? LawOnCrypto.push(e)
          : null
        : null,
    );

    // Set DB for timstamp
    let body_X = {
      ClientTimeStamp: _Api_Result.newUpdatedTimeStamp,
      LessonCount: parseInt(
        LawOnCrypto.length +
          EncryptionTech.length +
          Training_Course_Local_DATA.length,
      ),
      language: 'en',
    };

    if (lang == 'en') {
      // Training Data set
      let result1 = yield call(
        DB_Setter,
        Training_Course_Local_DATA,
        'TrainingCourses',
      );
      // _EncryptionTech Data set
      let result2 = yield call(DB_Setter, EncryptionTech, 'EncryptionTech');
      // _LawOnCrypto Data set
      let result3 = yield call(DB_Setter, LawOnCrypto, 'LawOnCrypto');
    } else {
      // Training Data set
      let result1 = yield call(
        DB_Setter,
        Training_Course_Local_DATA,
        'TrainingCourses_RU',
      );
      // _EncryptionTech Data set
      let result2 = yield call(DB_Setter, EncryptionTech, 'EncryptionTech_RU');
      // _LawOnCrypto Data set
      let result3 = yield call(DB_Setter, LawOnCrypto, 'LawOnCrypto_RU');
    }

    // For set update new timstamp set DB
    yield call(set_LocalStorage_for_DB_timstamp, body_X);

    // Get LocalStroage From DB
    const _getLocalStorage = yield call(getLocalStorage);

    // Toatal unrad training course data
    const _Total_UnRead_data =
      Training_Course_Local_DATA.length - _getLocalStorage[0];

    // / Local DB unread law crypto market
    const _getLocalStorageforLawCryptoMarket = yield call(
      getLocalStorageforLawCryptoMarket,
    );

    lang == 'en'
      ? (GetTop100Crypto_Service = Top100DataEN)
      : (GetTop100Crypto_Service = Top100DataRU);

    //  Local DB unread top 100 crypto Curency
    const _getLocalStorageforTop100CryptoCurrency = yield call(
      getLocalStorageforTop100CryptoCurrency,
    );

    // Get Unread 100 Currency
    const GetUnredTop100CryptoData = yield call(
      _getUnreadTop100CryptoService,
      GetTop100Crypto_Service,
      _getLocalStorageforTop100CryptoCurrency,
    );

    //For unread Law data
    const GetUnredLawData = yield call(
      _GetUnredLawCryptoMarket,
      LawOnCrypto,
      _getLocalStorageforLawCryptoMarket,
    );

    // Local DB unread encryptionData
    const _getLocalStorageforEncryptionTechinc = yield call(
      getLocalStorageforEncryptionTechinc,
    );

    // Get Unread EncryptionTechinc

    const GetEncryptionTechinc = yield call(
      _GetUnredEncryptionTechinc,
      EncryptionTech,
      _getLocalStorageforEncryptionTechinc,
    );

    const _Total_UnRead_Miner_data =
      GetUnredLawData + GetUnredTop100CryptoData + GetEncryptionTechinc;

    // Get Lession Like View
    const _GetLessonLikeView = yield call(_getLessonLikeView);
    const GetLessonLikeView = yield _GetLessonLikeView.json();

    yield put({
      type: actionType.INIT_HOME_DATA_LOAD,
      T_C_unread_data: _Total_UnRead_data,
      Min_C_unread_data: _Total_UnRead_Miner_data,
      USER_DB: _getLocalStorage[1],
      GetLessonTopicName: Training_Course_Local_DATA,
      UnredTop100CryptoData: GetUnredTop100CryptoData,
      UnreadGetEncryptionTechinc: GetEncryptionTechinc,
      UnredLawData: GetUnredLawData,
      Top100Currency: GetTop100Crypto_Service,
      LawsData: LawOnCrypto,
      GetLessonLikeView: GetLessonLikeView,
      DetailsDataLoad: true,
      // C_N_unread_data: _Total_UnRead_C_N_data,
    });
  } catch (error) {
    console.log('Error is now _ADDUpdateAvailable ', error);
  }
};

// For DB setter

const DB_Setter = async (data, DB_name) => {
  try {
    await AsyncStorage.setItem(DB_name, JSON.stringify(data));

    return true;
  } catch (error) {
    console.log('Error is now ', error);
  }
};

// array Checking is exits or not

const ArrayValueChecker = (e, data) => {
  let chk;
  data.filter(i => (e == i.ID ? (chk = true) : (chk = false)));
  return chk;
};

// For Existingplp o9999999  \  update

export const _EXISTINGUpdateAvailable = function*(action, lang, body) {
  try {
    let Training_Course_Local_DATA,
      EncryptionTech,
      LawOnCrypto,
      _LawOnCrypto,
      _EncryptionTech,
      Get_Training_DB;

    if (lang == 'en') {
      // when lang is english

      // Local Storage JSON File For Trainig course
      Get_Training_DB = yield call(get_LocalStorage_for_TrainingCourse);

      // For English Get_Training_DB

      Get_Training_DB == null
        ? (Training_Course_Local_DATA = Training_Course_Local_DATA_EN)
        : (Training_Course_Local_DATA = Get_Training_DB);

      // For EncryptionTech Data load form DB
      _EncryptionTech = yield call(get_LocalStorage_for_EncryptionTech);

      // For English _EncryptionTech

      _EncryptionTech == null
        ? (EncryptionTech = EncryptionTechEN)
        : (EncryptionTech = _EncryptionTech);

      // For _LawOnCrypto Data load form DB
      _LawOnCrypto = yield call(get_LocalStorage_for_LawOnCrypto);

      // For _LawOnCrypto  English
      _LawOnCrypto == null
        ? (LawOnCrypto = Crypto_Market_EN)
        : (LawOnCrypto = _LawOnCrypto);
    } else {
      // when lang is russain

      // Local Storage JSON File For Trainig course
      Get_Training_DB = yield call(get_LocalStorage_for_TrainingCourse_RU);

      // For  Get_Training_DB

      Get_Training_DB == null
        ? (Training_Course_Local_DATA = Training_Course_Local_DATA_RU)
        : (Training_Course_Local_DATA = Get_Training_DB);

      // For EncryptionTech Data load form DB
      _EncryptionTech = yield call(get_LocalStorage_for_EncryptionTech_RU);

      // For  _EncryptionTech

      _EncryptionTech == null
        ? (EncryptionTech = EncryptionTechRU)
        : (EncryptionTech = _EncryptionTech);

      // For _LawOnCrypto Data load form DB
      _LawOnCrypto = yield call(get_LocalStorage_for_LawOnCrypto_RU);

      // For _LawOnCrypto
      _LawOnCrypto == null
        ? (LawOnCrypto = Crypto_Market_RU)
        : (LawOnCrypto = _LawOnCrypto);
    }

    // _updated_Using_API_

    const Result = yield call(_updated_Using_API_, body);

    const _result = yield Result.json();

    // replace data

    _result.newLessons.map(e =>
      e.BookID == 1
        ? (Training_Course_Local_DATA = ArrayDataUpdate(
            e,
            Training_Course_Local_DATA,
          ))
        : e.BookID == 2
        ? (EncryptionTech = ArrayDataUpdate(e, EncryptionTech))
        : e.BookID == 3
        ? (LawOnCrypto = ArrayDataUpdate(e, LawOnCrypto))
        : null,
    );

    // Set DB for timstamp
    let body_X = {
      ClientTimeStamp: _result.newUpdatedTimeStamp,
      LessonCount: parseInt(
        LawOnCrypto.length +
          EncryptionTech.length +
          Training_Course_Local_DATA.length,
      ),
      language: 'en',
    };

    if (lang == 'en') {
      // Training Data set
      let result1 = yield call(
        DB_Setter,
        Training_Course_Local_DATA,
        'TrainingCourses',
      );
      // _EncryptionTech Data set
      let result2 = yield call(DB_Setter, EncryptionTech, 'EncryptionTech');
      // _LawOnCrypto Data set
      let result3 = yield call(DB_Setter, LawOnCrypto, 'LawOnCrypto');
    } else {
      // Training Data set
      let result1 = yield call(
        DB_Setter,
        Training_Course_Local_DATA,
        'TrainingCourses_RU',
      );
      // _EncryptionTech Data set
      let result2 = yield call(DB_Setter, EncryptionTech, 'EncryptionTech_RU');
      // _LawOnCrypto Data set
      let result3 = yield call(DB_Setter, LawOnCrypto, 'LawOnCrypto_RU');
    }

    // Get LocalStroage From DB
    const _getLocalStorage = yield call(getLocalStorage);

    const _Total_UnRead_data =
      Training_Course_Local_DATA.length - _getLocalStorage[0];

    console.log('exisying coming');

    //       // _Total_UnRead_C_N_data = GetUnreadYoutubedata + GetUnredCryptonewsData;
    // _Total_UnRead_C_N_data = GetUnredCryptoNData + GetUnredCryptonewsData;

    // console.log(
    //   'yyyyyyyyyyyyyyyyyyyyyy',
    //   GetUnredCryptoNData,
    //   GetUnredCryptonewsData,
    //   _Total_UnRead_C_N_data,
    // );

    // const _Total_UnRead_Miner_data =
    // GetUnredLawData + GetUnredTop100CryptoData + GetEncryptionTechinc;

    console.log(
      'Training_Course_Local_DATA',
      Training_Course_Local_DATA,
      EncryptionTech,
      LawOnCrypto,
      _Total_UnRead_data,
    );

    // yield put({
    //   type: actionType.UPDATED_ALL_DATA,
    //   T_C_unread_data: _Total_UnRead_data,
    // });

    // // For set update new timstamp set DB
    // yield call(set_LocalStorage_for_DB_timstamp, body_X);
  } catch (error) {
    console.log('Error is now _EXISTINGUpdateAvailable ', error);
  }
};

// For array replace

const ArrayDataUpdate = (e, data) => {
  let return_data = data.map(i => (i.ID == e.ID ? e : i));

  return return_data;
};

// No Update avaliable

export const _NoUpdateAvaliable = function*(action) {
  try {
    let EncryptionTech;
    let _Training_DB;
    let LawOnCrypto;
    let Top100Currency, GetTop100Crypto_Service;

    // Language Check

    if (action == 'en') {
      // For Trainig Data load form DB
      const Get_Training_DB = yield call(get_LocalStorage_for_TrainingCourse);

      // For EncryptionTech Data load form DB
      const _EncryptionTech = yield call(get_LocalStorage_for_EncryptionTech);

      // For _LawOnCrypto Data load form DB
      const _LawOnCrypto = yield call(get_LocalStorage_for_LawOnCrypto);

      // For _Top100Currency Data load form DB
      const _Top100Currency = yield call(get_LocalStorage_for_Top100Currency);

      // For _LawOnCrypto Data Setter

      if (_LawOnCrypto == null) {
        yield call(set_Update_LocalStorage_for_LawOnCrypto, Crypto_Market_EN);
        LawOnCrypto = Crypto_Market_EN;
      } else {
        LawOnCrypto = _LawOnCrypto;
      }

      // For Top100Currency Data Setter

      if (_Top100Currency == null) {
        yield call(set_Update_LocalStorage_for_Top100Currency, Top100DataEN);
        Top100Currency = Top100DataEN;
      } else {
        Top100Currency = _Top100Currency;
      }

      // For Trainig Data Setter

      if (Get_Training_DB == null) {
        yield call(
          set_Update_LocalStorage_for_TrainingCourse,
          Training_Course_Local_DATA_EN,
        );
        _Training_DB = Training_Course_Local_DATA_EN;
      } else {
        _Training_DB = Get_Training_DB;
      }

      // For EncryptionTech Data Setter

      if (_EncryptionTech == null) {
        yield call(
          set_Update_LocalStorage_for_EncryptionTech,
          EncryptionTechEN,
        );
        EncryptionTech = EncryptionTechEN;
      } else {
        EncryptionTech = _EncryptionTech;
      }
    } else if (action == 'ru') {
      // when language is russain

      // For Trainig Data load form DB
      const Get_Training_DB = yield call(
        get_LocalStorage_for_TrainingCourse_RU,
      );

      // For EncryptionTech Data load form DB
      const _EncryptionTech = yield call(
        get_LocalStorage_for_EncryptionTech_RU,
      );

      // For _LawOnCrypto Data load form DB
      const _LawOnCrypto = yield call(get_LocalStorage_for_LawOnCrypto_RU);

      // For _Top100Currency Data load form DB
      const _Top100Currency = yield call(
        get_LocalStorage_for_Top100Currency_RU,
      );

      // For _LawOnCrypto Data Setter

      if (_LawOnCrypto == null) {
        yield call(
          set_Update_LocalStorage_for_LawOnCrypto_RU,
          Crypto_Market_RU,
        );
        LawOnCrypto = Crypto_Market_RU;
      } else {
        LawOnCrypto = _LawOnCrypto;
      }

      // For Top100Currency Data Setter

      if (_Top100Currency == null) {
        yield call(set_Update_LocalStorage_for_Top100Currency_RU, Top100DataRU);
        Top100Currency = Top100DataRU;
      } else {
        Top100Currency = _Top100Currency;
      }

      // For Trainig Data Setter

      if (Get_Training_DB == null) {
        yield call(
          set_Update_LocalStorage_for_TrainingCourse_RU,
          Training_Course_Local_DATA_RU,
        );
        _Training_DB = Training_Course_Local_DATA_RU;
      } else {
        _Training_DB = Get_Training_DB;
      }

      // For EncryptionTech Data Setter

      if (_EncryptionTech == null) {
        yield call(
          set_Update_LocalStorage_for_EncryptionTech_RU,
          EncryptionTechRU,
        );
        EncryptionTech = EncryptionTechRU;
      } else {
        EncryptionTech = _EncryptionTech;
      }
    }

    // Get LocalStroage From DB
    const _getLocalStorage = yield call(getLocalStorage);

    // Toatal unrad training course data
    const _Total_UnRead_data = _Training_DB.length - _getLocalStorage[0];

    // / Local DB unread law crypto market
    const _getLocalStorageforLawCryptoMarket = yield call(
      getLocalStorageforLawCryptoMarket,
    );

    //For unread Law data
    const GetUnredLawData = yield call(
      _GetUnredLawCryptoMarket,
      LawOnCrypto,
      _getLocalStorageforLawCryptoMarket,
    );

    action == 'en'
      ? (GetTop100Crypto_Service = Top100DataEN)
      : (GetTop100Crypto_Service = Top100DataRU);

    //  Local DB unread top 100 crypto Curency
    const _getLocalStorageforTop100CryptoCurrency = yield call(
      getLocalStorageforTop100CryptoCurrency,
    );

    // Get Unread 100 Currency
    const GetUnredTop100CryptoData = yield call(
      _getUnreadTop100CryptoService,
      GetTop100Crypto_Service,
      _getLocalStorageforTop100CryptoCurrency,
    );

    // Local DB unread encryptionData
    const _getLocalStorageforEncryptionTechinc = yield call(
      getLocalStorageforEncryptionTechinc,
    );

    // Get Unread EncryptionTechinc

    const GetEncryptionTechinc = yield call(
      _GetUnredEncryptionTechinc,
      EncryptionTech,
      _getLocalStorageforEncryptionTechinc,
    );

    const _Total_UnRead_Miner_data =
      GetUnredLawData + GetUnredTop100CryptoData + GetEncryptionTechinc;

    // Get Lession Like View
    const _GetLessonLikeView = yield call(_getLessonLikeView);
    const GetLessonLikeView = yield _GetLessonLikeView.json();

    yield put({
      type: actionType.INIT_HOME_DATA_LOAD,
      T_C_unread_data: _Total_UnRead_data,
      Min_C_unread_data: _Total_UnRead_Miner_data,
      USER_DB: _getLocalStorage[1],
      GetLessonTopicName: _Training_DB,
      UnredTop100CryptoData: GetUnredTop100CryptoData,
      UnreadGetEncryptionTechinc: GetEncryptionTechinc,
      UnredLawData: GetUnredLawData,
      Top100Currency: GetTop100Crypto_Service,
      LawsData: LawOnCrypto,
      GetLessonLikeView: GetLessonLikeView,
      DetailsDataLoad: true,
      // C_N_unread_data: _Total_UnRead_C_N_data,
    });
  } catch (error) {
    console.log('Error is now*9+-- _NoUpdateAvaliable ', error);
  }
};

NewSetDB = async (data, db_name) => {
  try {
    console.log('data, db_name', data, db_name);
  } catch (error) {
    console.log('Error is NewSetDB : ', error);
  }
};

// "BookID": 1,
// "BookName": "Training Courses"

// "BookID": 2,
// "BookName": "Encryption Technologies"

// "BookID": 3,
// "BookName": "Laws on Crypto Market"
