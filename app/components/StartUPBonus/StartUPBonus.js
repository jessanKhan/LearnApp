import React from 'react';
import { useEffect, useState } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    Alert,
    FlatList,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { WebView } from 'react-native-webview';
import { Button } from 'react-native-paper';
import NetInfo from "@react-native-community/netinfo";
import translate from '../../services/i18n/customTranslator';

const bgImage = require('../../images/AppBackground.png');
import styles from './styles'
//REDUX HOOK AND ACTIONS
import { useSelector } from 'react-redux';

const StartUPBonus = props => {

    const [isInternetReachable, setIsInternetReachable] = useState(false);
    //GET CURRENT LANGUAGE FROM STORE
    const lang = useSelector(state => state.languageReducer.lang);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsInternetReachable(state.isInternetReachable);
            console.log("NET", state.isInternetReachable)
        });
        return () => {
            unsubscribe();
        }
    });


    const ActivityIndicatorLoadingView = props => {

        return (

            <ActivityIndicator
                color='#354E72'
                size='large'
                style={styles.ActivityIndicatorStyle}
            />
        );
    }

    const jsinject = props => {
        $("._container-fluid").parents("div").parents("div").parents("div").remove();
        $("attention-eu").remove();
    }

    // const reload = props => {
    //     if (!isInternetReachable) {
    //         return (
    //             <WebView
    //                 source={{ uri: `https://www.instaforex.com/${lang}/no_deposit_bonus?x=crptlrn` }}
    //                 javaScriptEnabled={true}
    //                 domStorageEnabled={true}
    //                 injectJavaScript={jsinject}
    //                 renderLoading={ActivityIndicatorLoadingView}
    //                 startInLoadingState={true}
    //             />
    //         )
    //     }

    //     else {
    //         return (
    //             <ImageBackground
    //                 source={bgImage}
    //                 style={styles.bgImage}
    //                 resizeMode="cover">
    //                 <View style={styles.NoNetView}>
    //                     <Text style={styles.NetErrorText}> {translate("PleaseCheck", lang)} </Text>
    //                     <Button style={styles.NetErrorButton} color="#fff" onPress={() => reload()} > {translate("Retry", lang)} </Button>
    //                 </View>
    //             </ImageBackground >

    //         )
    //     }
    // }



    if (isInternetReachable) {
        return (
            <WebView
                source={{ uri: `https://www.instaforex.com/${lang}/no_deposit_bonus?x=crptlrn` }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                injectJavaScript={jsinject}
                renderLoading={ActivityIndicatorLoadingView}
                startInLoadingState={true}
            />
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
                </View>
            </ImageBackground >

        )
    }
}

export default StartUPBonus;