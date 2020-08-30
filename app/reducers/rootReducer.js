import {combineReducers} from 'redux';

//import all reducers here...
import languageReducer from './languageReducer';
import homeReducer from './homeReducer';
import cryptoPointBooster from './pointBooster';
//import fetchVideoReducer from './cryptoNewsReducer';

export default combineReducers({
  languageReducer,
  homeReducer,
  cryptoPointBooster,
});
