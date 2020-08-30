import React, { useEffect, useState } from 'react'; //
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useSelector } from 'react-redux';
//IMPORT STYLESHEET OBJECT
import styles from './styles';
//IMPORT YOUTUBE DATA FETCH FUNCTION
import YoutubeDataService from '../../services/YoutubeDataService';
//COMPONENT BACKGROUND IMAGE LINK
const bgImage = require('../../images/AppBackground.png');
//LOADING COMPONENT
import LoadingIndicator from '../LoadingIndicator';

const CryptoNews = props => {
  //GET LANGUAGE INFO FROM STORE
  const lang = useSelector(state => state.languageReducer.lang);
  //YOUTUBE FETCHING SERVICES
  const youtubeData = new YoutubeDataService();
  //CURRENT VIDEO DATA
  const [videoData, setVideoData] = useState({});
  const [loading, setLoading] = useState(true);
  //GET NAVIGATION FUNCTION FROM PROPS
  const { navigate } = props.navigation;
  //GET DATA WHEN COMPONENT DID MOUNTED
  useEffect(() => {
    if (lang === 'ru') {
      youtubeData.getYoutubeItemsRU().then(data => {
        setVideoData(data);
        setLoading(false);
      });
    } else {
      youtubeData.getYoutubeItemsEN().then(data => {
        setVideoData(data);
        setLoading(false);
      });
    }
  }, [lang]);

  //FLATLIST ITEM
  const Item = props => {
    const { title, description } = props.snippet;
    const { url } = props.snippet.thumbnails.maxres;
    const { id } = props;
    const currentVideoData = videoData.filter(item => item.id === id);
    return (
      <TouchableOpacity
        onPress={() => {
          //PASSING DATA TO YOUTUBE PLAY COMPONENT
          navigate('YoutubePlay', {
            currentVideoData: currentVideoData,
          });
        }}
        style={styles.newsContainer}>
        <View>
          <Image source={{ uri: url }} style={styles.videoImage} />
          <Text style={styles.videoTitle}>{title}</Text>
          <Text style={styles.videoDescription}>{description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  //////////////////////////////   LOADING INDICATOR   //////////////////////////////////
  while (loading) {
    return <LoadingIndicator />;
  }

  return (
    <ImageBackground source={bgImage} style={styles.bgImage} resizeMode="cover">
      <View>
        <FlatList
          data={videoData}
          renderItem={({ item }) => <Item snippet={item.snippet} id={item.id} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ImageBackground>
  );
};

export default CryptoNews;
