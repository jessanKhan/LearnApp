export default class Top100CryptoService {
  async getData(lang) {
    const Top100CryptoData = fetch(
      `https://data1.contentdatapro.com/api/CryptoLearn/v1/GetCryptoDictionariesByLanguage?lang=${lang}`,
    )
      .then(response => response.json())
      .then(data => data);

    return Top100CryptoData;
  }
}
