import actionType from '../constants/constants';

export const RetrivePoint = () => {
  return {
    type: actionType.RETRIVEPIONTBOOSTER,
  };
};

export const UpdatePointBooster = (name, new_value, old_value) => {
  return {
    type: actionType.UPDATEPIONTBOOSTER,
    name: name,
    old_value: old_value,
    new_value: new_value,
  };
};
