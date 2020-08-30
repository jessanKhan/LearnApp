// import React from 'react';
// import {
//     View,
//     Text,
//     ImageBackground,
//     ScrollView,
//     StyleSheet,
//     Image
// } from 'react-native';
// //PARSING TMLD DATA FROM SERVER RESPONSE
// import HTMLView from 'react-native-htmlview';
// import styles from './styles';

// const bgImage = require('../../images/AppBackground.png');
 

// const AirDrop = props => {
   
//     return (
// <View>

//     <Text>Hello World!</Text>
// </View>           
        
//     )
// }



// export default AirDrop;



import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    FlatList,
    TouchableWithoutFeedback,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
    Button,
    ScrollView,
    Modal
} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';
//DATA CLASS
import Top100CryptoService from '../../services/Top100CryptoService';

//COMPONENTS FOR DROPDOWN ITEM MENU
import Accordion from '../Accordion/Accordion';
import { Icon } from "react-native-elements";
//HEADER RESOURCES
import CustomImageHeader from '../../components/CustomImageHeader/CustomImageHeader';
const top100HeaderImage = require('../../images/Top100CryptoCurrency/Top100Header.png');
//I18n CUSTOM TRANSLATOR FROM SERVICES FOLDER
import translate from '../../services/i18n/customTranslator';
//IMPORT MODAL ICONS&LINKS
import CloseIcon from '../SVG/CloseIcon';
//LOADING COMPONENT
import LoadingIndicator from '../LoadingIndicator';

const AirDrop = props => {
    //GET LANGUAGE INFO FROM STORE
    const lang = useSelector(state=>state.languageReducer.lang);
    //FETCHING DATA CLASS
    const top100CryptoService = new Top100CryptoService();

    const [loading,setLoading] = useState(true);
    const [top100Data, setTop100Data] = useState(null);
    //MODAL WINDOW TOGGLER
    const [isModalView, setModalView] = useState(false);
    const [isWelcomeContainer, setWelcomeContainer] = useState(true);
    const [isTestContainer, setTestContainer] = useState(false);
    const [isResultContainer, setResultContainer] = useState(false);
    const [currentQuestionPosition,setCurrentQuestionPosition] = useState(0);
    const [nextQuestionPosition,setNextQuestionPosition] = useState(1);    
    //TEST DATABASE 
    const [trueAnswers, setTrueAnswers] = useState(0);
    const [testDB,setTestDB] = useState([])  
    const [answersDB,setAnswersDB] = useState([]) 

    useEffect(()=>{
        top100CryptoService
            .getData(lang)
            .then(data=>{
                //GET LIST DATA WITH LANGUGAGE SETTINGS
                setTop100Data(data)
                //CREATE TEST DB
                const createTestDB = () =>{
                    const testArr = [];
                    const answersArr = [];
                    for(let i=0; i<7; i++){
                        const random = Math.floor(Math.random()*100);
                        testArr.push(data[random])
                    }
                    testArr.forEach(item=>answersArr.push(item.terms))
                    setTestDB(testArr);
                    setAnswersDB(answersArr);
                }
                createTestDB()
                //STOP LOADING
                setLoading(false)
            })
    }, [lang])

    ///////////////////////////// FLATLIST ITEM ////////////////////////////////////////////////////////////////////////
    const Item = props => {
       
        const {terms, Discription, $id} = props.itemData.item

        return (
            <View>
                <Text></Text>
            </View>
        )
    }
    //////////////////////////////   LOADING INDICATOR   //////////////////////////////////
    while(loading){
        return (
            <LoadingIndicator/>
        )
    }

    ///////////////////////////// FUNCTIONS FOR TEST STEPS ////////////////////////////////////////////////////////////////////////

    const openTestModal = () =>{
        setModalView(true);        
    }

    const closeTestModal = () =>{
        setModalView(false);
    }

    const runTest = () => {
        setWelcomeContainer(false);
        setTestContainer(true);
        setCurrentQuestionPosition(0);
        setNextQuestionPosition(1); 
        setTrueAnswers(0);
    }

    const repeatTest = () => {
        setResultContainer(false);
        setWelcomeContainer(true);
    }

    const moveToNextQuestion = () =>{
        if(nextQuestionPosition<testDB.length){
            setCurrentQuestionPosition(currentQuestionPosition+1);
            setNextQuestionPosition(nextQuestionPosition+1);
       }else{                  
            setTestContainer(false);
            setResultContainer(true);
       }
    }

    const answerCheck = (answer , term) => {
        if(answer==term){
            setTrueAnswers(trueAnswers+1)
        } 
        moveToNextQuestion();
    }

    ///////////////////////////// UI FOR TEST STEPS ////////////////////////////////////////////////////////////////////////

    const WelcomeComponent = () => {
        return (
            <View style={styles.testContainer}>
                <Text style={styles.testTitle}>{translate('TopC100CryptoCurrency', lang)}</Text>
                <TouchableOpacity onPress={()=>runTest()}>
                        <View style={styles.testButton}>
                            <Text style={styles.testButtonText}>{translate('StartTest', lang)}</Text>
                        </View>
                </TouchableOpacity>
            </View> 
        )
    } 

    const TestComponent = () => {
        return (
                <View style={styles.testContainer}>
                    <ScrollView>
                        <View style={styles.testInner}>
                            <Text style={styles.testTitle}>Test {currentQuestionPosition+1}/{testDB.length}</Text>
                        {
                            testDB
                                .slice(currentQuestionPosition, nextQuestionPosition)                                            
                                .map((item, i)=>{
                                    return (
                                        <View key={item.$id}>
                                            <Text style={styles.question}>...{item.Discription.slice(item.Discription.indexOf('.')).slice(item.Discription.indexOf(' '))}</Text>
                                            {    
                                                answersDB.map((answer, i)=>{
                                                    return (
                                                        <TouchableOpacity 
                                                            onPress={()=>answerCheck(answer, item.terms)}
                                                            key={i}>
                                                            <View style={styles.answerButton}>
                                                                <Icon
                                                                    raised
                                                                    name="circle-thin"
                                                                    type="font-awesome"
                                                                    color="blue"
                                                                    size={14}
                                                                    containerStyle={{
                                                                        backgroundColor: null
                                                                }}/>
                                                                <Text style={styles.answerText}>{answer}</Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }  
                                        </View>
                                    )
                                })
                        }
                        </View>
                    </ScrollView>
                </View>   
        )
    }
    
    const ResultComponent = () =>{
        return(
            <View style={styles.testContainer}>
                <Text style={styles.testTitle}>{translate('TestComplete', lang)}</Text>
                    <Text style={trueAnswers>6 ? styles.testSubTitleGreat : trueAnswers>4 ? styles.testSubTitleGood : styles.testSubTitleBad}>{translate('YourResult', lang)}:</Text>
                    <Text style={ trueAnswers>6 ? styles.testResultGreat : trueAnswers>4 ? styles.testResultGood : styles.testResultBad}> {trueAnswers} / {testDB.length}</Text>
                    <TouchableOpacity onPress={()=>repeatTest()}>
                        <View style={styles.testButton}>
                            <Text style={styles.testButtonText}>{translate('Repeat', lang)}</Text>
                        </View>
                    </TouchableOpacity>
            </View>
        )
    }

    const welcomeWindow = isWelcomeContainer ? <WelcomeComponent/> : null;
    const testWindow = isTestContainer ? <TestComponent/> : null;
    const resultWindow = isResultContainer ? <ResultComponent/> : null;
    
    return (
        <View style={styles.screen}>
                <FlatList 
                    data={top100Data}
                    ListHeaderComponent={
                        <View style={{marginBottom: 30}}>
                            <CustomImageHeader
                                {...props}
                                imageLink={top100HeaderImage}
                                title={translate('TopC100CryptoCurrency',lang)}
                                share={false}
                                buttons={true}
                                testRun={openTestModal}
                            />
                        </View>
                    }
                    keyExtractor={(item)=>item.$id}
                    renderItem={(item)=><Accordion data={item.item.Discription} title={item.item.terms}/>}
                />
            {/* MODAL WINDOW COMPONENT WITH TEST*/}
            <Modal
                visible={isModalView}
                animationType="slide"
                transparent={true}>
                
                    <View style={styles.modalContainer}>
                        <ScrollView>
                            <View style={styles.modalButton}>
                                <View>
                                    <TouchableOpacity onPress={()=>closeTestModal()}>
                                        <CloseIcon width={55} height={55} fill="#333"/>
                                    </TouchableOpacity>
                                </View>
                            </View>                                 
                                {welcomeWindow}
                                {testWindow}
                                {resultWindow}
                        </ScrollView>
                    </View>
            </Modal>  
        </View>
    )
}

export default AirDrop;

