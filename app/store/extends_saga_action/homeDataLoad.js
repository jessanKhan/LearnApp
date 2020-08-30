import {takeEvery, select, call, put} from 'redux-saga/effects';

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

import {_set_device_ID} from './extends_Add_VIew';

const API_EN_Yiutube =
  'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=PLaMTQRlMibD50awaeTyLOsYHhUfdl5EDL&key=AIzaSyBNdy-3jf-E0dtKsatb2_YtI_jfmqap1Og';
const API_Ru_Yiutube =
  'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=PLaMTQRlMibD7O1TGvWci3geKDFrjg_IHl&key=AIzaSyBNdy-3jf-E0dtKsatb2_YtI_jfmqap1Og';
const token = 'pd7a4m4541i3lk09p82y096s';

export const _getLesson = lang =>
  fetch(
    `https://data1.contentdatapro.com/api/CryptoLearn/v1/GetLessonByBook?BookId=1&lang=${lang}`,
  );

export const _getEncryptionServiceID = lang =>
  fetch(
    `https://data1.contentdatapro.com/api/CryptoLearn/v1/GetLessonByBook?BookId=2&lang=${lang}`,
  );
export const _getTop100CryptoService = lang =>
  fetch(
    `https://data1.contentdatapro.com/api/CryptoLearn/v1/GetCryptoDictionariesByLanguage?lang=${lang}`,
  );

export const _getLawsData = lang =>
  fetch(
    `https://data1.contentdatapro.com/api/CryptoLearn/v1/GetLessonByBook?BookId=3&lang=${lang}`,
  );

export const _getNewsData = lang =>
  fetch(
    `https://api.mt5.com/get-analytics-by-filter?_format=json&type=12&limit=15&offset=0&_lang=${lang}`,
    {
      method: 'post',
      headers: new Headers({
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    },
  );

export const _getNData = lang =>
  fetch(
    `https://api.mt5.com/get-news-crypto-currency?limit=10&offset=0&access_token=uf8s7h4684s7er98w78h986q&_lang=${lang}&_format=json`,
    {
      method: 'post',
      headers: new Headers({
        //Authorization: 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    },
  );

export const _getGetLessonByBookByAPI = lang =>
  fetch(
    `https://data1.contentdatapro.com/api/CryptoLearn/v1/GetLessonByBook?BookId=1&lang=${lang}`,
  );

export const _getLessonLikeView = () =>
  fetch(
    `https://data1.contentdatapro.com/api/CryptoLearn/v1/GetAllLessonLikeAndView?bId=1`,
  );

export const _getYoutubeData = lang =>
  fetch(lang == 'en' ? API_EN_Yiutube : API_Ru_Yiutube);

export const home_Data_Load = function*(action) {
  try {
    let GetNewsData,
      GetNData,
      _Total_UnRead_C_N_data = 0;

    // Set Unique Device Id
    const Set_device_ID = yield call(_set_device_ID);

    // Get Lession Like View
    const _GetLessonLikeView = yield call(_getLessonLikeView);
    const GetLessonLikeView = yield _GetLessonLikeView.json();

    // Get Topic Name From API
    const _GetLessonTopicName = yield call(
      _getGetLessonByBookByAPI,
      action.lang,
    );
    const GetLessonTopicName = yield _GetLessonTopicName.json();

    // Get Lesson From Api
    const _GetLesson = yield call(_getLesson, action.lang);
    const GetLesson = yield _GetLesson.json();

    // Get LocalStroage From DB
    const _getLocalStorage = yield call(getLocalStorage);

    // Get EncryptionService From Api
    const _GetEncryptionServiceID = yield call(
      _getEncryptionServiceID,
      action.lang,
    );
    const GetEncryptionServiceID = yield _GetEncryptionServiceID.json();
    const _GetTop100CryptoService = yield call(
      _getTop100CryptoService,
      action.lang,
    );
    const GetTop100CryptoService = yield _GetTop100CryptoService.json();

    const _GetLawsData = yield call(_getLawsData, action.lang);
    const GetLawsData = yield _GetLawsData.json();

    const _Total_UnRead_data = GetLesson.length - _getLocalStorage[0];

    const _GetYoutubeData = yield call(_getYoutubeData, action.lang);
    const GetYoutubeData = yield _GetYoutubeData.json();

    const _GetNewsData = yield call(_getNewsData, action.lang);
    const GetNews_Data = yield _GetNewsData.json();

    const _GetNData = yield call(_getNData, action.lang);
    const GetN_Data = yield _GetNData.json();
    // GetN_Data is for new implementation of New
    GetNews_Data.status == 'ok' ? (GetNewsData = 15) : (GetNewsData = 0);
    GetN_Data.status == 'ok' ? (GetNData = 10) : (GetNData = 0);

    // Local DB Unread Youtube
    const _getLocalStorageforYoutube = yield call(getLocalStorageforYoutube);
    // Local DB Unread Cryto news
    const _getLocalStorageforCryptoNews = yield call(
      getLocalStorageforCryptoNews,
    );
    // Local DB Unread Cryto New news
    const _getLocalStorageforCryptoN = yield call(getLocalStorageforCryptoN);

    //  Local DB unread top 100 crypto Curency
    const _getLocalStorageforTop100CryptoCurrency = yield call(
      getLocalStorageforTop100CryptoCurrency,
    );

    // Local DB unread law crypto market
    const _getLocalStorageforLawCryptoMarket = yield call(
      getLocalStorageforLawCryptoMarket,
    );

    // Local DB unread encryptionData
    const _getLocalStorageforEncryptionTechinc = yield call(
      getLocalStorageforEncryptionTechinc,
    );

    const GetUnreadYoutubedata = yield call(
      _getUnreadYoutubeData,
      GetYoutubeData,
      _getLocalStorageforYoutube,
    );

    const GetUnredCryptonewsData = yield call(
      _getUnredCryptonewsData,
      GetNews_Data,
      _getLocalStorageforCryptoNews,
    );

    // jisan chanage new
    const GetUnredCryptoNData = yield call(
      _getUnredCryptoNData,
      GetN_Data,
      _getLocalStorageforCryptoN,
    );

    const GetUnredTop100CryptoData = yield call(
      _getUnreadTop100CryptoService,
      GetTop100CryptoService,
      _getLocalStorageforTop100CryptoCurrency,
    );

    const GetUnredLawData = yield call(
      _GetUnredLawCryptoMarket,
      GetLawsData,
      _getLocalStorageforLawCryptoMarket,
    );

    const GetEncryptionTechinc = yield call(
      _GetUnredEncryptionTechinc,
      GetEncryptionServiceID,
      _getLocalStorageforEncryptionTechinc,
    );

    // _Total_UnRead_C_N_data = GetUnreadYoutubedata + GetUnredCryptonewsData;
    _Total_UnRead_C_N_data = GetUnredCryptoNData + GetUnredCryptonewsData;

    // console.log(
    //   'yyyyyyyyyyyyyyyyyyyyyy',
    //   GetUnredCryptoNData,
    //   GetUnredCryptonewsData,
    //   _Total_UnRead_C_N_data,
    // );

    const _Total_UnRead_Miner_data =
      GetUnredLawData + GetUnredTop100CryptoData + GetEncryptionTechinc;
    yield put({
      type: actionType.HOME_DATA_LOAD,
      T_C_unread_data: _Total_UnRead_data,
      Min_C_unread_data: _Total_UnRead_Miner_data,
      C_N_unread_data: _Total_UnRead_C_N_data,
      USER_DB: _getLocalStorage[1],
      GetLesson: GetLesson,
      YoutubeData: GetYoutubeData,
      GetNews_Data: GetNews_Data,
      Top100Currency: GetTop100CryptoService,
      UnredTop100CryptoData: GetUnredTop100CryptoData,
      UnreadGetEncryptionTechinc: GetEncryptionTechinc,
      EncryptionServiceID: GetEncryptionServiceID,
      UnredLawData: GetUnredLawData,
      LawsData: GetLawsData,
      UnreadYoutubedata: GetUnreadYoutubedata,
      UnredCryptonewsData: GetUnredCryptonewsData,
      GetN_Data: GetUnredCryptoNData,
      GetNewUpdateNews_Data: GetN_Data,
      GetLessonTopicName: GetLessonTopicName,
      GetLessonLikeView: GetLessonLikeView,
    });
  } catch (error) {
    console.log('home data load error check homeDataLoad ', error);
  }
};

export const home_Data_Refresh = function*(action) {
  try {
    const _getLocalStorage = yield call(getLocalStorage);

    const _Total_UnRead_data = action.GetLesson.length - _getLocalStorage[0];

    const _getLocalStorageforYoutube = yield call(getLocalStorageforYoutube);

    const GetUnreadYoutubedata = yield call(
      _getUnreadYoutubeData,
      action.YoutubeData,
      _getLocalStorageforYoutube,
    );
    const _getLocalStorageforCryptoNews = yield call(
      getLocalStorageforCryptoNews,
    );

    const GetUnredCryptonewsData = yield call(
      _getUnredCryptonewsData,
      action.GetNews_Data,
      _getLocalStorageforCryptoNews,
    );

    // New News Home refresh
    const _getLocalStorageforCryptoN = yield call(getLocalStorageforCryptoN);

    const GetUnredCryptoNData = yield call(
      _getUnredCryptoNData,
      action.GetN_Data,
      _getLocalStorageforCryptoN,
    );

    // Changed according to Task  APPREACT-1038
    const _Total_UnRead_C_N_data = GetUnredCryptoNData + GetUnredCryptonewsData;

    //  Local DB unread top 100 crypto Curency
    const _getLocalStorageforTop100CryptoCurrency = yield call(
      getLocalStorageforTop100CryptoCurrency,
    );

    // Local DB unread law crypto market
    const _getLocalStorageforLawCryptoMarket = yield call(
      getLocalStorageforLawCryptoMarket,
    );

    // Local DB unread encryptionData
    const _getLocalStorageforEncryptionTechinc = yield call(
      getLocalStorageforEncryptionTechinc,
    );

    const GetUnredTop100CryptoData = yield call(
      _getUnreadTop100CryptoService,
      action.Top100Currency,
      _getLocalStorageforTop100CryptoCurrency,
    );

    const GetUnredLawData = yield call(
      _GetUnredLawCryptoMarket,
      action.LawsData,
      _getLocalStorageforLawCryptoMarket,
    );

    const GetEncryptionTechinc = yield call(
      _GetUnredEncryptionTechinc,
      action.EncryptionServiceID,
      _getLocalStorageforEncryptionTechinc,
    );

    // // Get LocalStroage From DB
    // const _getLocalStorage = yield call(getLocalStorage);

    const _Total_UnRead_Miner_data =
      GetUnredLawData + GetUnredTop100CryptoData + GetEncryptionTechinc;

    yield put({
      type: actionType.HOME_REFRESH_LOADED,
      T_C_unread_data: _Total_UnRead_data,
      C_N_unread_data: _Total_UnRead_C_N_data,
      Min_C_unread_data: _Total_UnRead_Miner_data,
      UnredLawData: GetUnredLawData,
      UnredTop100CryptoData: GetUnredTop100CryptoData,
      UnreadGetEncryptionTechinc: GetEncryptionTechinc,
      UnreadYoutubedata: GetUnreadYoutubedata,
      UnredCryptonewsData: GetUnredCryptonewsData,
      UnGetN_Data: GetUnredCryptoNData,
      USER_DB: _getLocalStorage[1],
    });
  } catch (error) {
    console.log('error is home_Data_Refresh ', error);
  }
};
