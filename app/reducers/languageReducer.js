import actionType from '../constants/constants';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  lang: 'en',
  lnagLoaded: false,
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_LANGUAGE:
      return {
        ...state,
        lang: action.lang,
        lnagLoaded: true,
      };
    case actionType.UP_LOAD_LANGUAGE:
      return {
        ...state,
        lang: action.lang,
        lnagLoaded: true,
      };
    default: {
      return state;
    }
  }
};

export default languageReducer;
