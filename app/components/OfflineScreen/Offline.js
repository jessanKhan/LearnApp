import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { Badge } from 'react-native-elements';
//IMPORT STYLESHEET OBJECT
import styles from './styles';
//IMPORT NEWS DATA FETCH FUNCTION's
import CryptoNewsData from '../../services/CryptoNewsDataService';
//LOADING COMPONENT
import LoadingIndicator from '../LoadingIndicator';
import { ScrollView } from 'react-native-gesture-handler';
import translate from '../../services/i18n/customTranslator';
const bgImage = require('../../images/AppBackground.png');

const OfflineMSG = props => {
    //GET NETWORK INFO
    const [isInternetReachable, setIsInternetReachable] = useState(false);
    //GET LANGUAGE INFO FROM STORE
    const lang = useSelector(state => state.languageReducer.lang);
    //NEWS DATA FETCHING SERVICE
    const cryptoNewsData = new CryptoNewsData();
    //CURRENT VIDEO DATA
    const [newsData, setNewsData] = useState({});
    //GET NAVIGATION FUNCTION FROM PROPS
    const { navigate } = props.navigation;

    const [loading, setLoading] = useState(true);



    //RENDER ITEM FOR FLATLIST COMPONENT




    const reload = prop => {
        if (!isInternetReachable) {
            return (

                <ImageBackground
                    source={bgImage}
                    style={styles.bgImage}
                    resizeMode="cover">
                    <View style={styles.NoNetView}>
                        <Text style={styles.NetErrorText}> {translate("PleaseCheck", lang)} </Text>
                        <Button style={styles.NetErrorButton} color="#fff" onPress={() => reload()} >{translate("Retry", lang)}</Button>
                    </View>
                </ImageBackground >
            )
        }
        else {
            return (
                <ImageBackground
                    source={bgImage}
                    style={styles.bgImage}
                    resizeMode="cover">
                    <View style={styles.screen}>
                        <ScrollView>
                            {newsData && Object.values(newsData).map(item => {
                                return <Item data={item} />;
                            })}
                        </ScrollView>

                    </View>
                </ImageBackground>
            );
        }
    }



    //////////////////////////////   LOADING INDICATOR   //////////////////////////////////
    while (loading) {
        return (
            <LoadingIndicator />
        )
    }



    return (
        <ImageBackground
            source={bgImage}
            style={styles.bgImage}
            resizeMode="cover">
            <View style={styles.NoNetView}>
                <Text style={styles.NetErrorText}> {translate("PleaseCheck", lang)} </Text>

                <Button style={styles.NetErrorButton} color="#fff" onPress={() => reload()} >{translate("Retry", lang)}</Button>
            </View>
        </ImageBackground>
    );
}


export default OfflineMSG;