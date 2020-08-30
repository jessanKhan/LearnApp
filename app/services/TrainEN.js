export default class TrainEN {
  async coursesDesData() {
    const coursesData = fetch(
      `https://data1.contentdatapro.com/api/CryptoLearn/v1/GetLessonDescriptions?LessonId=1&lang=en`,
    )
      .then(response => response.json())
      .then(data => data);

    return coursesData;
  }
}
