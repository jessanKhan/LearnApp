import {takeEvery, select, call, put} from 'redux-saga/effects';

import actionType from '../../constants/constants';

// API call details
export const _getGetLessonByDetailsAPI = (ID, lang) =>
  fetch(
    `https://data1.contentdatapro.com/api/CryptoLearn/v1/GetLessonDescriptions?LessonId=${ID}&lang=${lang}`,
  );

export const Data_Details = function*(action) {
  try {
    console.log(action);
    // API call details
    const _GetLessonByDetailsAPI = yield call(
      _getGetLessonByDetailsAPI,
      action.key,
      action.lang,
    );
    const GetLessonByDetailsAPI = yield _GetLessonByDetailsAPI.json();

    yield put({
      type: actionType.DETAILS_LOAD_SUCESS,
      GetLessonByDetailsAPI: GetLessonByDetailsAPI,
      DetailsDataLoad: false,
      uniqe_id: action.key,
    });
  } catch (error) {
    console.log('error is Data_Details', error);
  }
};
