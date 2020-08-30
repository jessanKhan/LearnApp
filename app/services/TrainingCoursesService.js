export default class TrainingCoursesService {
  async coursesData() {
    const coursesInfo = fetch(
      `https://data1.contentdatapro.com/api/CryptoLearn/v1/GetAllLessonLikeAndView?bId=1`,
    )
      .then(response => response.json())
      .then(data => data);

    return coursesInfo;
  }
}
