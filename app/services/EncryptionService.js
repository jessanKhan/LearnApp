export default class EncryptionService {
  async getData(lang) {
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

  async getDescription(id, lang) {
    const encryptionDetails = await fetch(
      `https://data1.contentdatapro.com/api/CryptoLearn/v1/GetLessonDescriptions?LessonId=${id}&lang=${lang}`,
      {
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(data => data);

    return encryptionDetails;
  }
}
