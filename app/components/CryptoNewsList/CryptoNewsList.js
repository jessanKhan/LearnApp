import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator,
    Alert,
    Modal,
    TouchableHighlight
} from 'react-native';
import { CheckBox, SearchBar } from 'react-native-elements'
//import CheckBox from '@react-native-community/checkbox';
import { useSelector } from 'react-redux';
import NetInfo from "@react-native-community/netinfo";
//IMPORT STYLESHEET OBJECT
import styles from './styles';
//IMPORT NEWS DATA FETCH FUNCTION's
import CryptoNewsData from '../../services/CryptoNewsDataService';
//LOADING COMPONENT
import LoadingIndicator from '../LoadingIndicator';
import { Badge } from 'react-native-elements';
import { Button } from 'react-native-paper';
import translate from '../../services/i18n/customTranslator';
import { object } from 'prop-types';
const bgImage = require('../../images/AppBackground.png');
const filter = require('../../images/filter.png');
//const bgGif = require('../../images/spinner.gif');

const CryptoNews = props => {
    const [modalVisible, setModalVisible] = useState(false);
    const [checkBox1, setCheckBox1] = useState(true);
    const [checkBox2, setCheckBox2] = useState(true);
    const [checkBox3, setCheckBox3] = useState(true);
    const [checkBox4, setCheckBox4] = useState(true);
    const [checkBox5, setCheckBox5] = useState(true);
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState();
    const [value3, setValue3] = useState();
    const [value4, setValue4] = useState();
    const [value5, setValue5] = useState();
    const [temp, setTemp] = useState({});
    const [search, setSearch] = useState(null);
    //GET LANGUAGE INFO FROM STORE
    const lang = useSelector(state => state.languageReducer.lang);
    //NEWS DATA FETCHING SERVICE
    const cryptoNewsData = new CryptoNewsData();
    //CURRENT VIDEO DATA
    const [newsData, setNewsData] = useState({});
    const [urlData, setUrlData] = useState({});
    //GET NAVIGATION FUNCTION FROM PROPS
    const { navigate } = props.navigation;
    //GET NETWORK INFO 
    const [isInternetReachable, setIsInternetReachable] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsInternetReachable(state.isInternetReachable);
        });
        unsubscribe();
        if (lang === 'ru') {
            cryptoNewsData
                .getNewsDataRU()
                .then(data => {
                    //setNewsData(Object.values(data));
                    setResult(Object.values(data));
                    setLoading(false);
                })
        }
        else {
            cryptoNewsData
                .getNewsDataEN()
                .then(data => {
                    // setNewsData(Object.values(data));
                    setResult(Object.values(data));
                    setLoading(false);

                })
            console.log("see news data", newsData)
        }
        // return () => {
        //     unsubscribe();
        // }

    }, [lang])

    //RENDER ITEM FOR FLATLIST COMPONENT
    const Item = props => {

        const { title, description, hits, rating, first_image, timestamp, original_url } = props.data;
        //console.log("props kamne ashey", props.extraData)
        //console.log('All data news', props.data)

        // let str = "<p>"
        // let newsbody = props.data.body;
        // let newbody = newsbody.replace(str, " ");

        // Get Domain name 
        var hostname;
        //find & remove protocol (http, ftp, etc.) and get hostname
        if (original_url.indexOf("//") > -1) {
            hostname = original_url.split('/')[2];
        }
        else {
            hostname = original_url.split('/')[0];
        }
        //find & remove port number
        hostname = hostname.split(':')[0];
        //find & remove "?"
        hostname = hostname.split('?')[0];



        let msid = 1000 * 60 * 60 * 24;
        let diference = Date.now() - (timestamp * 1000);
        let daydiff = Math.floor(diference / msid);
        // console.log("diference date news", daydiff)

        return (

            <TouchableOpacity
                onPress={() => {
                    //PASSING DATA TO CRYPTONEWSDETAILS
                    navigate('NewsDetails', {
                        newsData: props.data,
                        tab: 1
                    })
                }}
                style={styles.newsContainer}>
                <View style={{ flex: 1, }}>
                    <View style={styles.row}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../../images/loader3.gif')} style={styles.ActivityIndicatorStyle} />
                            <Image source={{ uri: first_image }} style={styles.newsImage} />
                            {/* {console.log("Image", first_image)}
                            {first_image == null ? <Image source={{ uri: first_image }} style={styles.newsImage} /> : <ActivityIndicator style={styles.ActivityIndicatorStyle} size="large" color="#fff" />} */}
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.newsTitle}>{title}</Text>
                            {/* <Text style={styles.sourcelink}>Source: cointelegraph.com</Text> */}
                            {/* <Text style={styles.newsRating}>Hits: {hits} | Rating: {rating}</Text> */}
                            <Text style={styles.newsDescription}>
                                {((description).length > 130) ?
                                    (((description).substring(0, 130 - 3)) + '...') :
                                    description}

                            </Text>
                        </View>

                    </View>
                    <View style={styles.domainContainer}>
                        <Text style={styles.domain}>  {hostname} </Text>
                    </View>
                </View>
                <Badge
                    badgeStyle={daydiff == 0 ? styles.BadgeStyle : styles.BadgeStyle2}
                    value={daydiff == 0 ? <Text h4 style={styles.Badgetext}>New</Text> : <Text h4></Text>}
                    containerStyle={{ position: 'absolute', top: 12, right: 10 }}
                />
            </TouchableOpacity>

        )
    }

    const Catagory = props => {
        const { original_url } = props.data;
        console.log("souces")
        // Get Domain name 
        var hostname;
        //find & remove protocol (http, ftp, etc.) and get hostname
        if (original_url.indexOf("//") > -1) {
            hostname = original_url.split('/')[2];
        }
        else {
            hostname = original_url.split('/')[0];
        }
        //find & remove port number
        hostname = hostname.split(':')[0];
        //find & remove "?"
        hostname = hostname.split('?')[0];
        console.log("souces", hostname)
        return (
            <View>
                <Text>{hostname}</Text>
            </View>
        )
    }


    const filteModalOpen = () => {
        setModalVisible(true);
    }
    const filteModalClose = () => {
        setModalVisible(false);
    }
    const filteModalAuto = () => {
        setModalVisible(!modalVisible);
    }

    const reload = props => {
        if (!isInternetReachable) {
            return (

                <ImageBackground
                    source={bgImage}
                    style={styles.bgImage}
                    resizeMode="cover">
                    <FilterComp />
                    <View style={styles.NoNetView}>
                        <Text style={styles.NetErrorText}> {translate("PleaseCheck", lang)} </Text>
                        <Button style={styles.NetErrorButton} color="#fff" onPress={() => reload()} >{translate("Retry", lang)}</Button>
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
                    <View style={styles.screen}>
                        <FlatList
                            data={newsData}
                            renderItem={({ item }) => <Item data={item} />}
                            keyExtractor={item => item.rapi_id.toString()}
                        />
                    </View>
                </ImageBackground>

            );
        }
    }

    const setchekvalue = () => {
        if (checkBox1 == true) {
            setValue1("cointelegraph")
        }
        if (checkBox2 == true) {
            setValue2('coindesk')
        }
        if (checkBox3 == true) {
            setValue3('newsbtc')
        }
        if (checkBox4 == true) {
            setValue4('forklog')
        }
        if (checkBox5 == true) {
            setValue5('coinlife')
        }
        else {
            setValue1(null)
            setValue2(null)
            setValue3(null)
            setValue4(null)
            setValue5(null)
        }


        console.log("set value", value1)

    }


    const setResult = (res) => {


        setNewsData(res);
        setTemp(res);



    }

    const renderHeader = () => {
        return <SearchBar placeholder="Search Here..."
            lightTheme round editable={true}
            value={search}
            onChangeText={() => updateSearch()}
        />;
    };

    const updateSearch = search => {

        // setNewsData(
        //     { value1 }, () => {
        //         if ('' == value1) {
        //             setNewsData(temp)
        //             return;
        //         }

        //         newsData = temp.filter(function (item) {
        //             return item.original_url.includes(value1)
        //         }).map(function ({ title, description, first_image, timestamp, original_url }) {
        //             return { title, description, first_image, timestamp, original_url };
        //         });
        //     });


        if (search == "desk") {
            setNewsData(temp)
        }
        else {
            setNewsData(temp.filter(function (item) {
                return item.original_url.includes('tel')
            }).map(function ({ title, description, first_image, timestamp, original_url }) {
                return { title, description, first_image, timestamp, original_url };
            }))
        }




    };

    const FilterComp = props => {



        return (
            <View style={{ margin: 5 }}>
                <View style={styles.filterStyle}>
                    <Text style={styles.filterText}>{translate("filtersource", lang)}</Text>
                    <TouchableOpacity onPress={() => filteModalOpen()} style={styles.filterIcon}>

                        <Image style={styles.filterIconImage} source={filter}></Image>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        filteModalAuto()
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            {/* <FlatList
                                data={newsData}
                                renderItem={({ item }) => <Catagory data={item} />}
                                keyExtractor={item => item.rapi_id.toString()}
                            /> */}


                            <CheckBox
                                title='cointelegraph.com'
                                style={styles.CheckBoxStyle}
                                checked={checkBox1}
                                onPress={() => setCheckBox1(!checkBox1)}
                            />

                            <CheckBox
                                title='www.coindesk.com'
                                checked={checkBox2}
                                onPress={() => setCheckBox2(!checkBox2)}
                                style={styles.CheckBoxStyle}

                            />

                            <CheckBox
                                title='www.newsbtc.com'
                                checked={checkBox3}
                                onPress={() => setCheckBox3(!checkBox3)}
                                style={styles.CheckBoxStyle}
                            />

                            <CheckBox
                                title='forklog.com'
                                checked={checkBox4}
                                onPress={() => setCheckBox4(!checkBox4)}
                                style={styles.CheckBoxStyle}
                            />

                            <CheckBox
                                title='coinlife.com'
                                checked={checkBox5}
                                onPress={() => setCheckBox5(!checkBox5)}
                                style={styles.CheckBoxStyle}
                            />

                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                                <TouchableHighlight
                                    style={{ ...styles.openButton, backgroundColor: "#5F5E5D" }}
                                    onPress={() => {
                                        filteModalClose()
                                    }}
                                >
                                    <Text style={styles.textStyle}>{translate("Cancel", lang)}</Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                    onPress={() => {
                                        filteModalClose();
                                        setchekvalue();
                                        //updateSearch();
                                    }}
                                >
                                    <Text style={styles.textStyle}>{translate("Okay", lang)}</Text>
                                </TouchableHighlight>
                            </View>


                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

    //////////////////////////////   LOADING INDICATOR   //////////////////////////////////
    while (loading) {
        return (
            <LoadingIndicator />
        )
    }

    if (isInternetReachable) {
        return (
            <ImageBackground
                source={bgImage}
                style={styles.bgImage}
                resizeMode="cover">
                <FilterComp />
                <View style={styles.screen}>

                    <FlatList
                        //ListHeaderComponent={renderHeader}
                        data={newsData}
                        renderItem={({ item }) => <Item data={item} />}
                        keyExtractor={item => item.rapi_id.toString()}

                    />
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
                    <Text style={styles.NetErrorText}>  {translate("PleaseCheck", lang)} </Text>
                    <Button style={styles.NetErrorButton} color="#fff" onPress={() => reload()} >{translate("Retry", lang)}</Button>
                </View>
            </ImageBackground>
        );
    }
}

export default CryptoNews;