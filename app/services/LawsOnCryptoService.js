export default class LawsOnCryptoService {
  async getLawsDataRU() {
    const data = await fetch(
      'https://data1.contentdatapro.com/api/CryptoLearn/v1/GetLessonByBook?BookId=3&lang=ru',
      {
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(data => data);
    return data;
  }

  async getLawsDataEN() {
    const data = await fetch(
      'https://data1.contentdatapro.com/api/CryptoLearn/v1/GetLessonByBook?BookId=3&lang=en',
      {
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(data => data);
    return data;
  }

  async getLawsDataDescription(id, lang) {
    //id = 42,43,44
    const description = await fetch(
      `https://data1.contentdatapro.com/api/CryptoLearn/v1/GetLessonDescriptions?LessonId=${id}&lang=${lang}`,
      {
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(data => data);
    return description;
  }
}
