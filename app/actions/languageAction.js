import actionType from '../constants/constants';

export const updateLanguage = lang => {
  return {
    type: actionType.UPDATE_LANGUAGE,
    lang,
  };
};

export const initialLoadLanguage = () => {
  return {
    type: actionType.LOAD_INIT_LANGUAGE,
  };
};
