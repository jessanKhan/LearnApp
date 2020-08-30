// nn
import React, { useEffect, useState } from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
//I18n CUSTOM TRANSLATOR FROM SERVICES FOLDER
import translate from '../../services/i18n/customTranslator';
//IMPORT IMAGES FOR EACH COURSE SECTION
const trainingHeaderImage = require('../../images/TrainingCoursesBackground.png');
//HEADER FOR THIS PAGE
import CustomImageHeader from '../CustomImageHeader/CustomImageHeader';
//TEST DATABASES
import TrainingCoursesDataEN from '../../data/trainingCoursesDataEN';
import TrainingCoursesDataRU from '../../data/trainingCoursesDataRU';

import TrainingCoursesService from '../../services/TrainingCoursesService';
import SvgUri from 'react-native-svg-uri';
import SvgImageData from '../../images/svg/svg';

//LOADING COMPONENT
import LoadingIndicator from '../LoadingIndicator';

const TrainingCourses = props => {
  //GET CURRENT LANGUAGE FROM STORE
  const lang = useSelector(state => state.languageReducer.lang);
  const coursesInfo = useSelector(state => state.homeReducer.GetLessonLikeView);
  const GetLessonTopicName = useSelector(
    state => state.homeReducer.GetLessonTopicName,
  );
  const userDBR = useSelector(state => state.homeReducer.USER_DB);

  const _nameChecker = (props, str) => {
    console.log('props', props);
    return props == 'Origins of Blockchain' || props == 'Блокчейн и биткоин'
      ? str == true
        ? 'origins_of_blockchain'
        : origins_of_blockchain
      : props == 'What is Blockchain?' ||
        props == 'Подробнее о технологии блокчейн'
      ? str == true
        ? 'what_is_blockchain'
        : what_is_blockchain
      : props == 'Purpose of Blockchain' ||
        props == 'Основные свойства блокчейн-системы'
      ? str == true
        ? 'purpose_of_blockchain'
        : purpose_of_blockchain
      : props == 'Peer-to-peer (P2P) Network and Nodes' ||
        props == 'Особенности одноранговой сети (P2P)'
      ? str == true
        ? 'peer_to_peer_network_and_nodes'
        : peer_to_peer_network_and_nodes
      : props == 'Consensus Rules' || props == 'Правила консенсуса'
      ? str == true
        ? 'consensus_rules'
        : consensus_rules
      : props == 'Cryptographic Keys and Digital Signatures' ||
        props == 'Криптографические ключи и цифровые подписи'
      ? str == true
        ? 'cryptographic_key_and_digital_structure'
        : cryptographic_key_and_digital_structure
      : props == 'Transactions' || props == 'Операции с базами данных'
      ? str == true
        ? 'trainsection'
        : trainsection
      : props == 'Proof-of-Work (PoW) and Proof-of-Stake (PoS)' ||
        props == 'Proof-of-Work и Proof-of-Stake'
      ? str == true
        ? 'proof_of_work_and_proof_of_stake'
        : proof_of_work_and_proof_of_stake
      : props == 'Characteristics of Cryptocurrency' ||
        props == 'Ядро системы – криптовалюта'
      ? str == true
        ? 'characteristics_of_cryptocurrency'
        : characteristics_of_cryptocurrency
      : props == 'How to profit from investing in ICO?' ||
        props == 'Как заработать на инвестировании в ICO'
      ? str == true
        ? 'how_to_profit_from_invest_in_ICO'
        : how_to_profit_from_invest_in_ICO
      : props == 'Crypto Airdrop' || props == 'Airdrop криптовалют'
      ? str == true
        ? 'crypto_airdrop'
        : crypto_airdrop
      : str == true
      ? 'is_ICO_to_be_replaced_by_IEO'
      : is_ICO_to_be_replaced_by_IEO;
  };

  const CountTotalLessonScore = useSelector(
    state => state.cryptoPointBooster.training_course,
  );

  const origins_of_blockchain = useSelector(
    state => state.cryptoPointBooster.origins_of_blockchain,
  );

  const what_is_blockchain = useSelector(
    state => state.cryptoPointBooster.what_is_blockchain,
  );

  const purpose_of_blockchain = useSelector(
    state => state.cryptoPointBooster.purpose_of_blockchain,
  );

  const peer_to_peer_network_and_nodes = useSelector(
    state => state.cryptoPointBooster.peer_to_peer_network_and_nodes,
  );

  const consensus_rules = useSelector(
    state => state.cryptoPointBooster.consensus_rules,
  );

  const cryptographic_key_and_digital_structure = useSelector(
    state => state.cryptoPointBooster.cryptographic_key_and_digital_structure,
  );

  const trainsection = useSelector(
    state => state.cryptoPointBooster.trainsection,
  );

  const proof_of_work_and_proof_of_stake = useSelector(
    state => state.cryptoPointBooster.proof_of_work_and_proof_of_stake,
  );

  const characteristics_of_cryptocurrency = useSelector(
    state => state.cryptoPointBooster.characteristics_of_cryptocurrency,
  );

  const how_to_profit_from_invest_in_ICO = useSelector(
    state => state.cryptoPointBooster.how_to_profit_from_invest_in_ICO,
  );

  const crypto_airdrop = useSelector(
    state => state.cryptoPointBooster.crypto_airdrop,
  );

  const is_ICO_to_be_replaced_by_IEO = useSelector(
    state => state.cryptoPointBooster.is_ICO_to_be_replaced_by_IEO,
  );

  //LOADING INDICATOR STATE
  const [loading, setLoading] = useState(false);
  //DATA
  const [coursesDB, setCoursesDB] = useState(null);

  //GET FROM HOMECARD
  const userDB = props.navigation.getParam('userDB');
  const dekhi = props => {
    AsyncStorage.getItem('UserDB').then(data => {
      let userDB = JSON.parse(data);
    });
    console.log("data ki dekha jay ?", userDB)
  }

  const trainingCoursesService = new TrainingCoursesService();

  useEffect(() => {
    dekhi();
    if (lang == 'ru') {
      setCoursesDB(TrainingCoursesDataRU);
    } else {
      setCoursesDB(TrainingCoursesDataEN);
    }

    // setCoursesDB(GetLessonTopicName);

    setLoading(false);
  }, [lang]);

  //////////////////////////////   LOADING INDICATOR   //////////////////////////////////
  while (loading) {
    return <LoadingIndicator />;
  }

  let totalLikes = coursesInfo.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.TotalLike;
  }, 0);

  let totalViews = coursesInfo.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.TotalView;
  }, 0);

  const CustomCoursesCard = props => {
    const { ImageURL, Lesson_Name, ID } = props.data.item;
    const { navigate } = props.navigation;

    let show = userDB.ReadLessons.find(item => item === ID);
    let showing = userDBR.ReadLessons.find(item => item === ID)

    // ID
    const itemInfo = coursesInfo.filter(item => item.LessonID == ID.toString());

    return (
      <TouchableOpacity
        onPress={() => {
          navigate('TrainingCourseDetails', {
            imageUrl: ImageURL,
            title: Lesson_Name,
            data: [],
            key: ID,
            likes: itemInfo[0].TotalLike,
            views: itemInfo[0].TotalView,
            name: _nameChecker(props.data.item.Lesson_Name, true),
          });
        }}>
        <View style={styles.courseContainer}>
          <ImageBackground
            source={{ uri: props.data.item.ImageURL }}
            style={styles.imageBackground}>
            <View style={styles.background}>
              <View style={styles.penIcon}>
                <SvgUri
                  fill="white"
                  width="30"
                  height="30"
                  svgXmlData={SvgImageData.icon.checkbox_pen_outline}
                />
              </View>
              {!showing && (
                <View style={styles.counter}>
                  {/* <Text style={styles.counterText}>1</Text>  ImageURL*/}
                </View>
              )}
              <View style={styles.textContainer}>
                <Text style={styles.title}>{props.data.item.Lesson_Name}</Text>
                <View style={styles.itemInfoContainer}>
                  <Text style={styles.itemInfoText}>
                    {props.data.item.ReadDuration}
                  </Text>
                </View>
                <View style={{marginTop: 10}}>
                  <Text style={styles.itemInfoTextX}>
                    {translate('Score', lang) +
                      ' : ' +
                      _nameChecker(props.data.item.Lesson_Name, false)}
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        // data={coursesDB}
        data={GetLessonTopicName}
        ListHeaderComponent={
          <View>
            <CustomImageHeader
              {...props}
              imageLink={trainingHeaderImage}
              title={translate('BasicOfCrypto', lang)}
              share={false}
              trainingCourses={'true'}
              onlineData={false}
              totalScorecon={true}
              totalScore={CountTotalLessonScore}
            />
            <View style={styles.headerInfo}>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                  {translate('TotalLikes', lang)}: {totalLikes}
                </Text>
                <Text style={styles.infoText}> • </Text>
                <Text style={styles.infoText}>
                  {translate('TotalViews', lang)}: {totalViews}
                </Text>
              </View>
            </View>
          </View>
        }
        renderItem={item => <CustomCoursesCard {...props} data={item} />}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};

export default TrainingCourses;
