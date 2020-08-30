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

const CryptoAnalyticsList = props => {
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

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsInternetReachable(state.isInternetReachable);
        });

        unsubscribe();
        if (lang === 'ru') {
            cryptoNewsData
                .getAnalyticDataRU()
                .then(data => {
                    console.log("LLLLLLLLdata", data)
                    let reverseData = Object.entries(data);
                    reverseData = reverseData.reverse();
                    reverseData = { ...reverseData }
                    console.log("JJJJJJJ", reverseData)
                    // setNewsData(Object.entries(data));
                    setNewsData(reverseData);
                    setLoading(false);
                })
        }
        else {
            cryptoNewsData
                .getAnalyticDataEN()
                .then(data => {
                    console.log("LLLLLLLLdata", data)
                    let reverseData = Object.entries(data);
                    reverseData = reverseData.reverse();
                    reverseData = { ...reverseData }
                    console.log("JJJJJJJ", reverseData)
                    // setNewsData(Object.entries(data));
                    setNewsData(reverseData);
                    setLoading(false);
                })
        }
        // setNewsData(Object.values(props.GetNews_Data.result));
        // setLoading(false);
        // return () => {
        //     unsubscribe();
        // }

    }, [lang])

    //RENDER ITEM FOR FLATLIST COMPONENT
    const Item = (props, key) => {
        console.log("APIOOOOOOOO", props)
        const { title, description, hits, rating, first_image, timestamp } = props.data[1];
        console.log("API data Analytics", props.data[1])
        console.log("current date", Date.now())

        let msid = 1000 * 60 * 60 * 24;
        let diference = Date.now() - (timestamp * 1000);
        let daydiff = Math.floor(diference / msid);
        console.log("diference date", daydiff)

        return (

            <TouchableOpacity
                onPress={() => {
                    //PASSING DATA TO CRYPTONEWSDETAILS
                    navigate('AnalyticsDetails', {
                        newsData: props.data[0]
                    })
                    //alert(props.data[0])
                }}
                style={styles.newsContainer}>
                <View style={{ flex: 1 }}>
                    <View style={styles.row}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../../images/loader3.gif')} style={styles.ActivityIndicatorStyle} />
                            <Image source={{ uri: first_image }} style={styles.newsImage} />
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.newsTitle}>{title}</Text>
                            {/* <Text style={styles.sourcelink}>Source: www.instaforex.com/forex_analysis</Text> */}
                            <Text style={styles.newsRating}>Hits: {hits} | Rating: {rating}</Text>
                            <Text style={styles.newsDescription}>
                                {((description).length > 90) ?
                                    (((description).substring(0, 80 - 3)) + '...') :
                                    description}
                            </Text>
                            {/* <Text style={styles.domain}> Hello  </Text> */}
                        </View>

                    </View>
                    <View style={styles.domainContainer}>
                        <Text style={styles.domain}>  instaforex.com  </Text>
                    </View>
                </View>

                <Badge
                    badgeStyle={daydiff == 0 ? styles.BadgeStyle : styles.BadgeStyle2}
                    value={daydiff == 0 ? <Text h4 style={styles.Badgetext}>New</Text> : <Text h4></Text>}
                    containerStyle={{ position: 'absolute', top: 8, right: 8 }}
                />
            </TouchableOpacity>

        )
    }



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
    console.log("LLLLLLLDDDD", newsData)

    if (isInternetReachable) {
        return (
            <ImageBackground
                source={bgImage}
                style={styles.bgImage}
                resizeMode="cover">
                <View style={styles.screen}>
                    <ScrollView>
                        {newsData && Object.values(newsData).map(item => {
                            // console.log("valueadd", value)
                            return <Item data={item} />;
                        })}

                        {/* 
                <FlatList
                    data={newsData}
                    renderItem={({ item }) => {
                        console.log("LLLLLLNNNNN", item)
                        return <Item data={item} />
                    }}
                    keyExtractor={item => item[0].toString()}
                // renderItem={({ item }) => console.log("111111111111", item[1])}
                // keyExtractor={item => console.log("00000000000", item[0])}
                /> */}
                    </ScrollView>

                </View>
            </ImageBackground>
        )
    }
    else {
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
}

export default CryptoAnalyticsList;