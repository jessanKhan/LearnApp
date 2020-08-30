import AsyncStorage from '@react-native-community/async-storage';

// For Training Courses

export const get_LocalStorage_for_TrainingCourse = async () => {
  try {
    let D_B_Data = await AsyncStorage.getItem('TrainingCourses');
    let Result_D_B_Data = JSON.parse(D_B_Data);

    return Result_D_B_Data;
  } catch (error) {
    console.log('error in get_LocalStorage_for_TrainingCourse : ', error);
  }
};

export const set_Update_LocalStorage_for_TrainingCourse = async data => {
  try {
    await AsyncStorage.setItem('TrainingCourses', JSON.stringify(data));
  } catch (error) {
    console.log(
      'error in set_Update_LocalStorage_for_TrainingCourse : ',
      error,
    );
  }
};

// For Top 100 Currency

export const get_LocalStorage_for_Top100Currency = async () => {
  try {
    let D_B_Data = await AsyncStorage.getItem('Top100Currency');
    let Result_D_B_Data = JSON.parse(D_B_Data);

    return Result_D_B_Data;
  } catch (error) {
    console.log('error in get_LocalStorage_for_Top100Currency : ', error);
  }
};

export const set_Update_LocalStorage_for_Top100Currency = async newUserProgress => {
  try {
    await AsyncStorage.setItem(
      'Top100Currency',
      JSON.stringify(newUserProgress),
    );
  } catch (error) {
    console.log(
      'error in set_Update_LocalStorage_for_Top100Currency : ',
      error,
    );
  }
};

// for EncryptionTech

export const get_LocalStorage_for_EncryptionTech = async () => {
  try {
    let D_B_Data = await AsyncStorage.getItem('EncryptionTech');
    let Result_D_B_Data = JSON.parse(D_B_Data);

    return Result_D_B_Data;
  } catch (error) {
    console.log('error in get_LocalStorage_for_EncryptionTech : ', error);
  }
};

export const set_Update_LocalStorage_for_EncryptionTech = async data => {
  try {
    await AsyncStorage.setItem('EncryptionTech', JSON.stringify(data));
  } catch (error) {
    console.log(
      'error in set_Update_LocalStorage_for_EncryptionTech : ',
      error,
    );
  }
};

//   for LawOnCrypto

export const get_LocalStorage_for_LawOnCrypto = async () => {
  try {
    let D_B_Data = await AsyncStorage.getItem('LawOnCrypto');
    let Result_D_B_Data = JSON.parse(D_B_Data);

    return Result_D_B_Data;
  } catch (error) {
    console.log('error in get_LocalStorage_for_LawOnCrypto : ', error);
  }
};

export const set_Update_LocalStorage_for_LawOnCrypto = async newUserProgress => {
  try {
    await AsyncStorage.setItem('LawOnCrypto', JSON.stringify(newUserProgress));
  } catch (error) {
    console.log('error in set_Update_LocalStorage_for_LawOnCrypto : ', error);
  }
};

// Checker DB timstamp

export const get_LocalStorage_for_DB_timstamp = async () => {
  try {
    let D_B_Data = await AsyncStorage.getItem('DB_timstamp');
    let Result_D_B_Data = JSON.parse(D_B_Data);

    return Result_D_B_Data;
  } catch (error) {
    console.log('error in get_LocalStorage_for_DB_timstamp : ', error);
  }
};

export const set_LocalStorage_for_DB_timstamp = async data => {
  try {
    await AsyncStorage.setItem('DB_timstamp', JSON.stringify(data));
  } catch (error) {
    console.log('error in set_LocalStorage_for_DB_timstamp : ', error);
  }
};

// RU Langage

// For Training Courses

export const get_LocalStorage_for_TrainingCourse_RU = async () => {
  try {
    let D_B_Data = await AsyncStorage.getItem('TrainingCourses_RU');
    let Result_D_B_Data = JSON.parse(D_B_Data);

    return Result_D_B_Data;
  } catch (error) {
    console.log('error in get_LocalStorage_for_TrainingCourse_RU : ', error);
  }
};

export const set_Update_LocalStorage_for_TrainingCourse_RU = async data => {
  try {
    await AsyncStorage.setItem('TrainingCourses_RU', JSON.stringify(data));
  } catch (error) {
    console.log(
      'error in set_Update_LocalStorage_for_TrainingCourse_RU : ',
      error,
    );
  }
};

// For Top 100 Currency

export const get_LocalStorage_for_Top100Currency_RU = async () => {
  try {
    let D_B_Data = await AsyncStorage.getItem('Top100Currency_RU');
    let Result_D_B_Data = JSON.parse(D_B_Data);

    return Result_D_B_Data;
  } catch (error) {
    console.log('error in get_LocalStorage_for_Top100Currency_RU : ', error);
  }
};

export const set_Update_LocalStorage_for_Top100Currency_RU = async newUserProgress => {
  try {
    await AsyncStorage.setItem(
      'Top100Currency_RU',
      JSON.stringify(newUserProgress),
    );
  } catch (error) {
    console.log(
      'error in set_Update_LocalStorage_for_Top100Currency_RU : ',
      error,
    );
  }
};

// for EncryptionTech

export const get_LocalStorage_for_EncryptionTech_RU = async () => {
  try {
    let D_B_Data = await AsyncStorage.getItem('EncryptionTech_RU');
    let Result_D_B_Data = JSON.parse(D_B_Data);

    return Result_D_B_Data;
  } catch (error) {
    console.log('error in get_LocalStorage_for_EncryptionTech : ', error);
  }
};

export const set_Update_LocalStorage_for_EncryptionTech_RU = async data => {
  try {
    await AsyncStorage.setItem('EncryptionTech_RU', JSON.stringify(data));
  } catch (error) {
    console.log(
      'error in set_Update_LocalStorage_for_EncryptionTech_RU : ',
      error,
    );
  }
};

//   for LawOnCrypto

export const get_LocalStorage_for_LawOnCrypto_RU = async () => {
  try {
    let D_B_Data = await AsyncStorage.getItem('LawOnCrypto_RU');
    let Result_D_B_Data = JSON.parse(D_B_Data);

    return Result_D_B_Data;
  } catch (error) {
    console.log('error in get_LocalStorage_for_LawOnCryptoRU : ', error);
  }
};

export const set_Update_LocalStorage_for_LawOnCrypto_RU = async newUserProgress => {
  try {
    await AsyncStorage.setItem(
      'LawOnCrypto_RU',
      JSON.stringify(newUserProgress),
    );
  } catch (error) {
    console.log('error in set_Update_LocalStorage_for_LawOnCryptoRU : ', error);
  }
};

// Crypto Point Booster

export const get_LocalStorage_for_CryptoPointBooster = async () => {
  try {
    let D_B_Data = await AsyncStorage.getItem('Crypto@PointBooster');
    let Result_D_B_Data = JSON.parse(D_B_Data);

    return Result_D_B_Data;
  } catch (error) {
    console.log('error in get_LocalStorage_for_CryptoPointBooster : ', error);
  }
};

export const set_Update_LocalStorage_for_CryptoPointBooster = async data => {
  try {
    await AsyncStorage.setItem('Crypto@PointBooster', JSON.stringify(data));
  } catch (error) {
    console.log(
      'error in set_Update_LocalStorage_for_CryptoPointBooster : ',
      error,
    );
  }
};
