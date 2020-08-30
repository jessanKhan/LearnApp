export default class MinersService {
  async getTop100(lang) {
    const Top100CryptoData = fetch(
      `https://data1.contentdatapro.com/api/CryptoLearn/v1/GetCryptoDictionariesByLanguage?lang=${lang}`,
    )
      .then(response => response.json())
      .then(data => data);

    return Top100CryptoData;
  }

  async getEncryption(lang) {
    const encryptionData = await fetch(
      `https://data1.contentdatapro.com/api/CryptoLearn/v1/GetLessonByBook?BookId=2&lang=${lang}`,
      {
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(data => data);
    return encryptionData;
  }

  async getLaws(lang) {
    const data = await fetch(
      `https://data1.contentdatapro.com/api/CryptoLearn/v1/GetLessonByBook?BookId=3&lang=${lang}`,
      {
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(data => data);
    return data;
  }
}
