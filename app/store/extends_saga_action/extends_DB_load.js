import {getUniqueId} from 'react-native-device-info';
import AsyncStorage from '@react-native-community/async-storage';

// Make all try catch

export const getLocalStorage = async () => {
  let D_B_Data = await AsyncStorage.getItem('UserDB');
  let Result_D_B_Data = JSON.parse(D_B_Data);

  if (Result_D_B_Data == null) {
    let newUserProgress = {
      DeviceID: getUniqueId(),
      Name: 'user',
      ReadLessons: [],
      RightAnswers: 0,
      TotalAnswers: 0,
    };
    await AsyncStorage.setItem('UserDB', JSON.stringify(newUserProgress));

    return [newUserProgress.ReadLessons.length, newUserProgress];
  } else {
    return [Result_D_B_Data.ReadLessons.length, Result_D_B_Data];
  }
};

export const getLocalStorageforYoutube = async () => {
  let D_B_Data = await AsyncStorage.getItem('ReadYoutubeData');
  let Result_D_B_Data = JSON.parse(D_B_Data);

  if (Result_D_B_Data == null) {
    let reacdData = [];
    await AsyncStorage.setItem('ReadYoutubeData', JSON.stringify(reacdData));

    return reacdData;
  } else {
    return Result_D_B_Data;
  }
};

export const getLocalStorageforCryptoNews = async () => {
  let D_B_Data = await AsyncStorage.getItem('ReadCryptonewsData');
  let Result_D_B_Data = JSON.parse(D_B_Data);

  if (Result_D_B_Data == null) {
    let reacdData = [];
    await AsyncStorage.setItem('ReadCryptonewsData', JSON.stringify(reacdData));

    return reacdData;
  } else {
    return Result_D_B_Data;
  }
};

export const getLocalStorageforCryptoN = async () => {
  let D_B_Data = await AsyncStorage.getItem('ReadCryptonewnewsData');
  let Result_D_B_Data = JSON.parse(D_B_Data);

  if (Result_D_B_Data == null) {
    let reacdData = [];
    await AsyncStorage.setItem(
      'ReadCryptonewnewsData',
      JSON.stringify(reacdData),
    );

    return reacdData;
  } else {
    return Result_D_B_Data;
  }
};

export const _getUnreadYoutubeData = async (
  YoutubeData,
  _getLocalStorageforYoutube,
) => {
  let count_val = 0;

  let return_Val = 0;

  if (_getLocalStorageforYoutube.length == 0) {
    return_Val = 20;
  } else {
    YoutubeData.items.map(e => {
      _getLocalStorageforYoutube.map(i => (e.id == i.id ? count_val++ : null));
    });

    return_Val = 20 - count_val;
  }

  return return_Val;
};

export const _getUnredCryptonewsData = async (
  GetNews_Data,
  _getLocalStorageforCryptoNews,
) => {
  try {
    let count_val = 0;

    let return_Val = 0;

    var resultArrayGen = Object.keys(GetNews_Data.result).map(function(key) {
      return GetNews_Data.result[key];
    });

    if (_getLocalStorageforCryptoNews.length == 0) {
      return_Val = 15;
    } else {
      resultArrayGen.map(e => {
        _getLocalStorageforCryptoNews.map(i =>
          e.rapi_id == i.id ? count_val++ : null,
        );
      });

      return_Val = 15 - count_val;
    }

    return return_Val;
  } catch (error) {
    console.log('errror is _getUnredCryptonewsData', error);
  }
};

// Get new update News Data

// Always try to send full data
export const _getUnredCryptoNData = async (
  GetN_Data,
  _getLocalStorageforCryptoN,
) => {
  try {
    let count_val = 0;

    let return_Val = 0;

    var resultArrayGen = Object.keys(GetN_Data.result).map(function(key) {
      return GetN_Data.result[key];
    });

    if (_getLocalStorageforCryptoN.length == 0) {
      return_Val = 10;
    } else {
      resultArrayGen.map(e => {
        _getLocalStorageforCryptoN.map(i =>
          e.rapi_id == i.id ? count_val++ : null,
        );
      });

      return_Val = 10 - count_val;
    }

    return return_Val;
  } catch (error) {
    console.log('errror is _getUnred New Cryptonews Data', error);
  }
};

export const getLocalStorageforTop100CryptoCurrency = async () => {
  let D_B_Data = await AsyncStorage.getItem('ReadTop100CryptoData');
  let Result_D_B_Data = JSON.parse(D_B_Data);

  if (Result_D_B_Data == null) {
    let reacdData = [];
    await AsyncStorage.setItem(
      'ReadTop100CryptoData',
      JSON.stringify(reacdData),
    );

    return reacdData;
  } else {
    return Result_D_B_Data;
  }
};

export const _getUnreadTop100CryptoService = async (
  Top100Currency,
  _getLocalStoragefortop100Data,
) => {
  try {
    let count_val = 0;

    let return_Val = 0;

    if (_getLocalStoragefortop100Data.length == 0) {
      return_Val = 100;
    } else {
      Top100Currency.map(e => {
        _getLocalStoragefortop100Data.map(i =>
          e.terms == i.id ? count_val++ : null,
        );
      });

      return_Val = 100 - count_val;
    }

    return return_Val;
  } catch (error) {
    console.log('errror is _getUnredCryptonewsData', error);
  }
};

export const getLocalStorageforLawCryptoMarket = async () => {
  let D_B_Data = await AsyncStorage.getItem('CryptoLawData');
  let Result_D_B_Data = JSON.parse(D_B_Data);

  if (Result_D_B_Data == null) {
    let reacdData = [];
    await AsyncStorage.setItem('CryptoLawData', JSON.stringify(reacdData));

    return reacdData;
  } else {
    return Result_D_B_Data;
  }
};

export const _GetUnredLawCryptoMarket = async (LawData, _LawCryptoMarket) => {
  try {
    console.log('LawData, _LawCryptoMarket', LawData, _LawCryptoMarket);
    let count_val = 0;

    let return_Val = 0;

    if (_LawCryptoMarket.length == 0) {
      return_Val = 3;
    } else {
      LawData.map(e => {
        _LawCryptoMarket.map(i =>
          e.Lesson_Name.toUpperCase() == i.id ? count_val++ : null,
        );
      });

      return_Val = LawData.length - count_val;
    }

    return return_Val;
  } catch (error) {
    console.log('errror is _getUnredCryptonewsData', error);
  }
};

export const getLocalStorageforEncryptionTechinc = async () => {
  let D_B_Data = await AsyncStorage.getItem('Encryption_technic_unreadData');
  let Result_D_B_Data = JSON.parse(D_B_Data);

  if (Result_D_B_Data == null) {
    let reacdData = [];
    await AsyncStorage.setItem(
      'Encryption_technic_unreadData',
      JSON.stringify(reacdData),
    );

    return reacdData;
  } else {
    return Result_D_B_Data;
  }
};

export const _GetUnredEncryptionTechinc = async (
  EncryptionTechinc,
  _LocalStorageforEncryptionTechinc,
) => {
  try {
    let count_val = 0;

    let return_Val = 0;

    if (_LocalStorageforEncryptionTechinc.length == 0) {
      return_Val = EncryptionTechinc.length;
    } else {
      EncryptionTechinc.map(e => {
        _LocalStorageforEncryptionTechinc.map(i =>
          e.Lesson_Name == i.id ? count_val++ : null,
        );
      });

      return_Val = EncryptionTechinc.length - count_val;
    }

    return return_Val;
  } catch (error) {
    console.log('errror is _getUnredCryptonewsData', error);
  }
};
