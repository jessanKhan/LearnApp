import actionType from '../constants/constants';

export const homeDataLoad = lang => {
  return {
    type: actionType.HOME_DATA,
    lang: lang,
  };
};

export const homeDataRefresh = (
  lang,
  GetLesson,
  YoutubeData,
  GetNews_Data,
  Top100Currency,
  EncryptionServiceID,
  LawsData,
  GetN_Data,
) => {
  return {
    type: actionType.HOME_REFRESH,
    lang: lang,
    GetLesson: GetLesson,
    YoutubeData: YoutubeData,
    GetNews_Data: GetNews_Data,
    Top100Currency: Top100Currency,
    EncryptionServiceID: EncryptionServiceID,
    LawsData: LawsData,
    GetN_Data: GetN_Data,
  };
};
export const DetailsLoad = (key, lang) => {
  return {
    type: actionType.DETAILS_LOAD,
    key: key,
    lang: lang,
  };
};

export const AddViewAPI = D_ID => {
  return {
    type: actionType.ADDVIEWAPI,
    deviceID: D_ID,
  };
};

export const AddLikeAPI = key => {
  return {
    type: actionType.ADDLIKEAPI,
    key: key,
  };
};
