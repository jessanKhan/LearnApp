import {takeEvery, select, call, put} from 'redux-saga/effects';
import {getUniqueId} from 'react-native-device-info';

import actionType from '../../constants/constants';

import {_getLessonLikeView} from './homeDataLoad';

const UniqueID = getUniqueId();

// API call details
export const _get_Set_API = les =>
  fetch(
    `https://data1.contentdatapro.com/api/CryptoLearn/v1/AddView?les=${les}&Did=${UniqueID}`,
  );

// Check Like
export const checkLike = les =>
  fetch(
    `https://data1.contentdatapro.com/api/CryptoLearn/v1/GetCheckLike?lesID=${les}&Deid=${UniqueID}`,
  );

//   Add Like
export const _addLike = les =>
  fetch(
    `https://data1.contentdatapro.com/api/CryptoLearn/v1/AddLike?Did=${UniqueID}&les=${les}`,
  );

//   load get like
export const _getLikeCount = les => {
  console.log('problem');
  fetch(
    `"https://data1.contentdatapro.com/api/CryptoLearn/v1/GetLessonTotalLike?les=${les}`,
  ).then(e => console.log('e is', e));

  return 'okk';
};

// Set Device
export const _set_device_ID = async () => {
  var data = JSON.stringify({
    DeviceID: UniqueID,
  });

  fetch(`https://data1.contentdatapro.com/api/CryptoLearn/v1/AddDevice`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  }).then(e => console.log('eeeee', e));
};

export const _AddViewAPI = function*(action) {
  try {
    // API call Add View
    const Set_device_ID = yield call(_get_Set_API, action.deviceID);
    const _Set_device_ID = yield Set_device_ID.json();

    // checkLike
    const _checkLike = yield call(checkLike, action.deviceID);
    const CheckLike = yield _checkLike.json();

    // Get Lession Like View
    const _GetLessonLikeView = yield call(_getLessonLikeView);
    const GetLessonLikeView = yield _GetLessonLikeView.json();

    yield put({
      type: actionType.LESSONLIKEVIEWUPDATE,
      GetLessonLikeView: GetLessonLikeView,
    });
  } catch (error) {
    console.log('error is _AddViewAPI', error);
  }
};

export const _AddLikeAPI = function*(action) {
  try {
    // checkLike
    const _checkLike = yield call(checkLike, action.key);
    const CheckLike = yield _checkLike.json();

    if (CheckLike == 0) {
      const addLike = yield call(_addLike, action.key);
      //   const AddLike = yield addLike.json();

      //   const getLikeCount = yield call(_getLikeCount, action.key);
      //   const GetLikeCount = yield getLikeCount.json();
      //   console.log('AddLike', AddLike, GetLikeCount);
    } else {
      // already liked
      //   const getLikeCount = yield call(_getLikeCount, action.key);
      //   const GetLikeCount = yield getLikeCount.json();
    }

    // Get Lession Like View
    const _GetLessonLikeView = yield call(_getLessonLikeView);
    const GetLessonLikeView = yield _GetLessonLikeView.json();

    yield put({
      type: actionType.LESSONLIKEVIEWUPDATE,
      GetLessonLikeView: GetLessonLikeView,
    });
  } catch (error) {
    console.log('error is _AddViewAPI', error);
  }
};
