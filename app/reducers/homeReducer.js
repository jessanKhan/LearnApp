import actionType from '../constants/constants';
import { ActivityIndicator } from 'react-native-paper';

const initialState = {
  T_C_unread_data: '',
  Min_C_unread_data: 0,
  C_N_unread_data: 0,
  loader: true,
  USER_DB: [],
  GetLesson: [],
  initData: 'init',
  YoutubeData: [],
  GetNews_Data: [],
  Top100Currency: [],
  UnredTop100CryptoData: 0,
  UnreadGetEncryptionTechinc: 0,
  EncryptionServiceID: [],
  UnredLawData: 0,
  LawsData: [],
  UnredCryptonewsData: 0,
  UnreadYoutubedata: 0,
  GetN_Data: 0,
  UnGetN_Data: 0,
  GetNewUpdateNews_Data: [],
  GetLessonTopicName: [],
  GetLessonLikeView: [],
  DetailsDataLoad: true,
  GetLessonByDetailsAPI: [],
  uniqe_id: 0,
};
// GetN_Data: 0, UnGetN_Data: 0, For newly implemneted news
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INIT_HOME_DATA_LOAD:
      return {
        ...state,
        loader: false,
        T_C_unread_data: action.T_C_unread_data,
        Min_C_unread_data: action.Min_C_unread_data,
        USER_DB: action.USER_DB,
        GetLessonTopicName: action.GetLessonTopicName,
        UnredTop100CryptoData: action.UnredTop100CryptoData,
        UnredLawData: action.UnredLawData,
        Top100Currency: action.Top100Currency,
        UnreadGetEncryptionTechinc: action.UnreadGetEncryptionTechinc,
        LawsData: action.LawsData,
        GetLessonLikeView: action.GetLessonLikeView,
        DetailsDataLoad: action.DetailsDataLoad,
      };
    case actionType.UPDATED_ALL_DATA:
      return {
        ...state,
        loader: false,
        T_C_unread_data: action.T_C_unread_data,
        Min_C_unread_data: action.Min_C_unread_data,
        C_N_unread_data: action.C_N_unread_data,
      };
    case actionType.HOME_REFRESH:
      return {
        ...state,
        loader: true,
      };
    case actionType.HOME_DATA_LOAD:
      return {
        ...state,
        T_C_unread_data: action.T_C_unread_data,
        Min_C_unread_data: action.Min_C_unread_data,
        C_N_unread_data: action.C_N_unread_data,
        USER_DB: action.USER_DB,
        loader: false,
        GetLesson: action.GetLesson,
        initData: 'success',
        YoutubeData: action.YoutubeData,
        GetNews_Data: action.GetNews_Data,
        Top100Currency: action.Top100Currency,
        UnredTop100CryptoData: action.UnredTop100CryptoData,
        UnreadGetEncryptionTechinc: action.UnreadGetEncryptionTechinc,
        EncryptionServiceID: action.EncryptionServiceID,
        UnredLawData: action.UnredLawData,
        LawsData: action.LawsData,
        UnredCryptonewsData: action.UnredCryptonewsData,
        UnreadYoutubedata: action.UnreadYoutubedata,
        UnGetN_Data: action.GetN_Data,
        GetNewUpdateNews_Data: action.GetNewUpdateNews_Data,
        GetLessonTopicName: action.GetLessonTopicName,
        GetLessonLikeView: action.GetLessonLikeView,
      };
    case actionType.HOME_REFRESH_LOADED:
      return {
        ...state,
        T_C_unread_data: action.T_C_unread_data,
        C_N_unread_data: action.C_N_unread_data,
        USER_DB: action.USER_DB,
        Min_C_unread_data: action.Min_C_unread_data,
        UnredLawData: action.UnredLawData,
        UnredTop100CryptoData: action.UnredTop100CryptoData,
        UnreadGetEncryptionTechinc: action.UnreadGetEncryptionTechinc,
        loader: false,
        UnredCryptonewsData: action.UnredCryptonewsData,
        UnreadYoutubedata: action.UnreadYoutubedata,
        UnGetN_Data: action.UnGetN_Data,
      };

    case actionType.DETAILS_LOAD_SUCESS:
      return {
        ...state,
        DetailsDataLoad: action.DetailsDataLoad,
        GetLessonByDetailsAPI: action.GetLessonByDetailsAPI,
        uniqe_id: action.uniqe_id,
      };
    case actionType.UP_LOAD_LANGUAGE:
      return {
        ...state,
        GetLessonTopicName: action.GetLessonTopicName,
        GetLessonLikeView: action.GetLessonLikeView,
      };

    case actionType.UP_LOAD_LANGUAGEDATA:
      return {
        ...state,
        LawsData: action.LawsData,
        EncryptionServiceID: action.EncryptionServiceID,
        Top100Currency: action.Top100Currency,
        GetNews_Data: action.GetNews_Data,
      };

    case actionType.LESSONLIKEVIEWUPDATE:
      return {
        ...state,
        GetLessonLikeView: action.GetLessonLikeView,
      };
    default: {
      return state;
    }
  }
};

export default homeReducer;
