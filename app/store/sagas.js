import {takeEvery, select, call, put} from 'redux-saga/effects';
import actionType from '../constants/constants';

import {Load_Language, update_Language} from './extends_saga_action/language';
import {
  home_Data_Load,
  home_Data_Refresh,
} from './extends_saga_action/homeDataLoad';

import {_AddViewAPI, _AddLikeAPI} from './extends_saga_action/extends_Add_VIew';

import {Data_Details} from './extends_saga_action/ALL_Data_Details';
import {
  _retriveCryptoPoint,
  _CrptoBoosterUpdate,
} from './extends_saga_action/extends_crypto_point_booster';

const rootSaga = function*() {
  yield takeEvery(actionType.LOAD_INIT_LANGUAGE, Load_Language);
  yield takeEvery(actionType.UPDATE_LANGUAGE, update_Language);
  yield takeEvery(actionType.HOME_DATA, home_Data_Load);
  yield takeEvery(actionType.HOME_REFRESH, home_Data_Refresh);
  yield takeEvery(actionType.DETAILS_LOAD, Data_Details);
  yield takeEvery(actionType.ADDVIEWAPI, _AddViewAPI);
  yield takeEvery(actionType.ADDLIKEAPI, _AddLikeAPI);
  yield takeEvery(actionType.RETRIVEPIONTBOOSTER, _retriveCryptoPoint);
  yield takeEvery(actionType.UPDATEPIONTBOOSTER, _CrptoBoosterUpdate);
};

export default rootSaga;
