import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  ActivityIndicator,
  Modal,
  ScrollView,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
//STYLING
import styles from './styles';
//IMPORT HEADER COMPONENT
import CustomImageHeader from '../CustomImageHeader/CustomImageHeader';
//I18n CUSTOM TRANSLATOR FROM SERVICES FOLDER
import translate from '../../services/i18n/customTranslator';
//COURSE DATA
import TrainingCoursesTestData from '../../data/trainingCoursesTestData';
//IMPORT MODAL ICONS&LINKS
import CloseIcon from '../SVG/CloseIcon';

import AsyncStorage from '@react-native-community/async-storage';

//LOADING COMPONENT
import LoadingIndicator from '../LoadingIndicator';
//import { useBackHandler } from 'react-native-hooks'

import {DetailsLoad, AddViewAPI} from '../../actions/homeAction';
// for score action
import {UpdatePointBooster} from '../../actions/cryptoPoint';

const TrainingCourseDetails = props => {
  const dispatch = useDispatch();

  // For Booster Score

  let PathName = props.navigation.state.params.name;
  let PathTittle = props.navigation.state.params.title;

  const _nameChecker = (props, str) => {
    return props == 'Origins of Blockchain'
      ? str == true
        ? 'origins_of_blockchain'
        : origins_of_blockchain
      : props == 'What is Blockchain?'
      ? str == true
        ? 'what_is_blockchain'
        : what_is_blockchain
      : props == 'Purpose of Blockchain'
      ? str == true
        ? 'purpose_of_blockchain'
        : purpose_of_blockchain
      : props == 'Peer-to-peer (P2P) Network and Nodes'
      ? str == true
        ? 'peer_to_peer_network_and_nodes'
        : peer_to_peer_network_and_nodes
      : props == 'Consensus Rules'
      ? str == true
        ? 'consensus_rules'
        : consensus_rules
      : props == 'Cryptographic Keys and Digital Signatures'
      ? str == true
        ? 'cryptographic_key_and_digital_structure'
        : cryptographic_key_and_digital_structure
      : props == 'Transactions'
      ? str == true
        ? 'trainsection'
        : trainsection
      : props == 'Proof-of-Work (PoW) and Proof-of-Stake (PoS)'
      ? str == true
        ? 'proof_of_work_and_proof_of_stake'
        : proof_of_work_and_proof_of_stake
      : props == 'Characteristics of Cryptocurrency'
      ? str == true
        ? 'characteristics_of_cryptocurrency'
        : characteristics_of_cryptocurrency
      : props == 'How to profit from investing in ICO?'
      ? str == true
        ? 'how_to_profit_from_invest_in_ICO'
        : how_to_profit_from_invest_in_ICO
      : props == 'Crypto Airdrop'
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

  // //GET CURRENT LANGUAGE FROM STORE
  const lang = useSelector(state => state.languageReducer.lang);
  // //NAVIGATION PARAMS FROM TRAININ COURSES COMPONENT
  const imageUrl = props.navigation.getParam('imageUrl');
  const title = props.navigation.getParam('title');
  // //GET NUMBER OF CURRENT COURSE
  const key = props.navigation.getParam('key');
  // //GET PARAMS FOR LIKES&VIEWS INFO
  const likes = props.navigation.getParam('likes');
  const views = props.navigation.getParam('views');
  // //DATA FOR TEST
  const [testDB, setTestDB] = useState(null);

  const [RealLike, SetRealLike] = useState(likes);

  // //LOADING INDICATOR STATE DetailsDataLoad
  const DetailsDataLoad = useSelector(
    state => state.homeReducer.DetailsDataLoad,
  );

  // Loading Details Data from Store; 01674561681
  const data = useSelector(state => state.homeReducer.GetLessonByDetailsAPI);

  const uniqe_id = useSelector(state => state.homeReducer.uniqe_id);
  const userDBR = useSelector(state => state.homeReducer.USER_DB);

  // const data = props.navigation.getParam('data');

  let chk_loader = uniqe_id == key ? false : true;

  const [loading, setLoading] = useState(chk_loader);

  //MODAL WINDOW TOGGLER
  const [isModalView, setModalView] = useState(false);
  const [isWelcomeContainer, setWelcomeContainer] = useState(true);
  const [isTestContainer, setTestContainer] = useState(false);
  const [isResultContainer, setResultContainer] = useState(false);
  const [currentQuestionPosition, setCurrentQuestionPosition] = useState(0);
  const [nextQuestionPosition, setNextQuestionPosition] = useState(1);
  //TEST DATABASE
  const [trueAnswers, setTrueAnswers] = useState(0);

  useEffect(() => {
    // Add view API
    dispatch(AddViewAPI(key));

    if (chk_loader == false) {
      if (lang == 'ru') {
        setTestDB(
          TrainingCoursesTestData.ru.filter(
            item => item.key === key.toString(),
          )[0].questions_data,
        );
        setLoading(false);
      } else {
        setTestDB(
          TrainingCoursesTestData.en.filter(
            item => item.key === key.toString(),
          )[0].questions_data,
        );
        setLoading(false);
      }
    } else {
      dispatch(DetailsLoad(key, lang));
    }
  }, [lang, DetailsDataLoad, chk_loader]);

  const update_value = chk => {
    //let _val = trueAnswers == 0 ? trueAnswers : trueAnswers + 1;
    let value = chk * 10;

    let PathValue = _nameChecker(PathTittle, false);

    dispatch(UpdatePointBooster(PathName, value, PathValue));
  };

  const Item = props => {
    const {Title, Description} = props.data;

    return (
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{Title}</Text>
        <Text style={styles.description}>{Description}</Text>
      </View>
    );
  };

  // //////////////////////////////   LOADING INDICATOR   ///////////////////////////
  while (loading) {
    return <LoadingIndicator />;
  }

  // ///////////////////////////// FUNCTIONS FOR TEST STEPS ////////////////////////////////////////////////////////////////////////

  const openTestModal = () => {
    setModalView(true);
  };

  const closeTestModal = () => {
    setWelcomeContainer(true);
    setTestContainer(false);
    setResultContainer(false);
    setCurrentQuestionPosition(0);
    setNextQuestionPosition(1);
    //TEST DATABASE
    setTrueAnswers(0);
    setModalView(false);
  };

  const runTest = () => {
    setWelcomeContainer(false);
    setTestContainer(true);
    setCurrentQuestionPosition(0);
    setNextQuestionPosition(1);
    setTrueAnswers(0);
  };

  const repeatTest = () => {
    setResultContainer(false);
    setWelcomeContainer(true);
  };

  const moveToNextQuestion = chk => {
    if (nextQuestionPosition < testDB.length) {
      setCurrentQuestionPosition(currentQuestionPosition + 1);
      setNextQuestionPosition(nextQuestionPosition + 1);
    } else {
      setTestContainer(false);
      AsyncStorage.getItem('UserDB').then(data => {
        let userDB = JSON.parse(data);
        if (userDB.ReadLessons.includes(key)) {
          return;
        } else {
          userDB.ReadLessons.push(key);
          userDBR.ReadLessons.push(key);
        }
        AsyncStorage.setItem('UserDB', JSON.stringify(userDB));
      });
      setResultContainer(true);

      // update score
      update_value(chk);
    }
    console.log('user Db readlesson', props);
  };

  const answerCheck = async (answer, term) => {
    let chk = trueAnswers;
    if (answer === term) {
      let NowUserDB = await AsyncStorage.getItem('UserDB');
      let Result_NowUserDB = JSON.parse(NowUserDB);
      Result_NowUserDB.RightAnswers++;
      Result_NowUserDB.TotalAnswers++;
      let Now_User_DB = await AsyncStorage.setItem(
        'UserDB',
        JSON.stringify(Result_NowUserDB),
      );

      // right answer and add it total game coin

      // let CryptoBoosterDB = await AsyncStorage.getItem('Crypto@PointBooster');
      // let Result_CryptoBoosterDB = JSON.parse(CryptoBoosterDB);

      // Result_CryptoBoosterDB == null
      //   ? (Result_CryptoBoosterDB = {
      //       trainging_course: 10,
      //     })
      //   : (Result_CryptoBoosterDB.trainging_course =
      //       parseInt(Result_CryptoBoosterDB.trainging_course) + 10);

      // console.log('Result_CryptoBoosterDB', Result_CryptoBoosterDB);

      // let Now_Result_CryptoBoosterDB = await AsyncStorage.setItem(
      //   'Crypto@PointBooster',
      //   JSON.stringify(Result_CryptoBoosterDB),
      // );

      chk = chk + 1;

      setTrueAnswers(trueAnswers + 1);
    } else {
      let NowUser_DB = await AsyncStorage.getItem('UserDB');
      let Result_NowUser_DB = JSON.parse(NowUser_DB);
      Result_NowUser_DB.TotalAnswers++;
      let Now_User_DB = await AsyncStorage.setItem(
        'UserDB',
        JSON.stringify(Result_NowUser_DB),
      );
      // let Two = await AsyncStorage.getItem('UserDB').then(data => {
      //   let userDB = JSON.parse(data);
      //   userDB.TotalAnswers++;
      //   AsyncStorage.setItem('UserDB', JSON.stringify(userDB));
      // });
    }
    moveToNextQuestion(chk);
  };

  ///////////////////////////// UI FOR TEST STEPS ////////////////////////////////////////////////////////////////////////

  const WelcomeComponent = () => {
    return (
      <View style={styles.testContainer}>
        <View style={styles.testInner}>
          <Text style={styles.testTitle}>{title} </Text>
          <Text style={styles._testTitle2}>
            {translate('crypto_point_msg', lang)}
          </Text>
          <TouchableOpacity onPress={() => runTest()}>
            <View style={styles.testButton}>
              <Text style={styles.testButtonText}>
                {translate('StartTest', lang)}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const TestComponent = () => {
    return (
      <View style={styles.testContainer}>
        <View style={styles.testInner}>
          <Text style={styles.testTitle}>
            Test {currentQuestionPosition + 1}/{testDB.length}
          </Text>

          {testDB
            .slice(currentQuestionPosition, nextQuestionPosition)
            .map((item, i) => {
              return (
                <View key={i}>
                  <Text style={styles.question}>{item.question}</Text>
                  <View>
                    {item.options.map((answer, j) => {
                      return (
                        <TouchableOpacity
                          key={answer}
                          onPress={() => {
                            answerCheck(item.answer, j + 1);
                          }}>
                          <View style={styles.answer}>
                            <Text style={styles.answerText}>{answer}</Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              );
            })}
        </View>
      </View>
    );
  };

  const ResultComponent = () => {
    return (
      <View style={styles.testContainer}>
        <View style={styles.testInner}>
          <Text style={styles.testTitle}>
            {translate('TestComplete', lang)}
          </Text>
          <Text
            style={
              trueAnswers > 2
                ? styles.testSubTitleGreat
                : trueAnswers > 1
                ? styles.testSubTitleGood
                : styles.testSubTitleBad
            }>
            {translate('YourResult', lang)}:
          </Text>
          <Text
            style={
              trueAnswers > 2
                ? styles.testResultGreat
                : trueAnswers > 1
                ? styles.testResultGood
                : styles.testResultBad
            }>
            {' '}
            {trueAnswers} / {testDB.length}
          </Text>

          <Text style={styles.testSub_Title}>
            {translate('Score', lang)}: {' ' + trueAnswers * 10}
          </Text>
          {trueAnswers == 0 ? (
            <TouchableOpacity onPress={() => repeatTest()}>
              <View style={styles.testButton}>
                <Text style={styles.testButtonText}>
                  {translate('Repeat', lang)}
                </Text>
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  };

  const welcomeWindow = isWelcomeContainer ? <WelcomeComponent /> : null;
  const testWindow = isTestContainer ? <TestComponent /> : null;
  const resultWindow = isResultContainer ? <ResultComponent /> : null;

  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        ListHeaderComponent={
          <View>
            <CustomImageHeader
              {...props}
              imageLink={imageUrl}
              title={props.navigation.getParam('title')}
              share={true}
              buttons={true}
              testRun={openTestModal}
              onlineData={true}
              lessonID={key}
              likeButton={likes}
              updaet_like={() => SetRealLike(1)}
              prevRoute="Train"
            />
            <View style={styles.textContainer}>
              <View style={styles.itemInfoContainer}>
                <Text style={styles.itemInfoText}>
                  {translate('Likes', lang)}: {RealLike}
                </Text>
                <Text style={styles.itemInfoText}> • </Text>
                <Text style={styles.itemInfoText}>
                  {translate('Views', lang)}: {views}
                </Text>
              </View>
            </View>
          </View>
        }
        renderItem={item => <Item data={item.item} />}
        keyExtractor={() => {
          return Math.floor(Math.random() * 60).toString();
        }}
      />
      {/* MODAL WINDOW COMPONENT WITH TEST*/}
      <Modal
        visible={isModalView}
        onRequestClose={() => setModalView(false)}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalButton}>
            <TouchableOpacity onPress={() => closeTestModal()}>
              <CloseIcon width={30} height={30} fill="#333" />
            </TouchableOpacity>
          </View>

          <ScrollView>
            {welcomeWindow}
            {testWindow}
            {resultWindow}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default TrainingCourseDetails;
