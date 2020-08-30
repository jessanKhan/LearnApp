import AsyncStorage from '@react-native-community/async-storage';
import {getUniqueId} from 'react-native-device-info';

export default class AsyncStorageService {
  async getTrainingCoursesInfo() {
    const info = await fetch(
      'https://data1.contentdatapro.com/api/CryptoLearn/v1/GetAllLessonLikeAndView?bId=1',
    )
      .then(response => response.json())
      .then(data =>
        AsyncStorage.setItem('CoursesCount', data.length.toString()),
      );
    return info;
  }

  async setLocalStorage() {
    await AsyncStorage.getItem('UserDB').then(UserProgress => {
      if (UserProgress === null) {
        let newUserProgress = {
          DeviceID: getUniqueId(),
          Name: 'user',
          ReadLessons: [],
          RightAnswers: 0,
          TotalAnswers: 0,
        };
        AsyncStorage.setItem('UserDB', JSON.stringify(newUserProgress));
      }
    });
  }
}
