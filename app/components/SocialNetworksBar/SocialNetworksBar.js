import React from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import Share from 'react-native-share';

import styles from './styles'
import GoogleIcon from '../SVG/GoogleIcon';
import FacebookIcon from '../SVG/FacebookIcon';
import TwitterIcon from '../SVG/TwitterIcon';

//REDUX HOOK AND ACTIONS
import { useSelector } from 'react-redux';
//i18n TRANSLATE FUNCTION FROM SERVICES FOLDER
import translate from '../../services/i18n/customTranslator';

const SocialNetworkBar = props => {


    //GET CURRENT LANGUAGE FROM STORE
    const lang = useSelector(state => state.languageReducer.lang);

    // Facebook Share 
    const FacebookOptions = {
        title: 'Share via',
        message: "Test our application expand your horizons",
        url:
            'https://play.google.com/store/apps/details?id=com.instaforex.android.cryptolearn&hl=en',
        social: Share.Social.FACEBOOK,

    };

    // Twitter Share 
    const TwitterOptions = {
        title: 'Share via',
        message: 'Test our application expand your horizons',
        url:
            'https://play.google.com/store/apps/details?id=com.instaforex.android.cryptolearn&hl=en',
        social: Share.Social.TWITTER,

    };

    // Google Share 
    const GoogleOptions = {
        title: 'Share via',
        message: 'Test our application expand your horizons',
        url:
            'https://play.google.com/store/apps/details?id=com.instaforex.android.cryptolearn&hl=en',
        social: Share.Social.EMAIL,

    };

    // Facebook Share RU 
    const FacebookOptionsRU = {
        title: 'Share via',
        message: "Протестируйте наше приложение, расширьте свой кругозор",
        url:
            'https://play.google.com/store/apps/details?id=com.instaforex.android.cryptolearn&hl=ru',
        social: Share.Social.FACEBOOK,

    };

    // Twitter Share RU
    const TwitterOptionsRU = {
        title: 'Share via',
        message: 'Протестируйте наше приложение, расширьте свой кругозор',
        url:
            'https://play.google.com/store/apps/details?id=com.instaforex.android.cryptolearn&hl=ru',
        social: Share.Social.TWITTER,

    };

    // Google Share RU 
    const GoogleOptionsRU = {
        title: 'Share via',
        message: 'Протестируйте наше приложение, расширьте свой кругозор',
        url:
            'https://play.google.com/store/apps/details?id=com.instaforex.android.cryptolearn&hl=ru',
        social: Share.Social.EMAIL,

    };

    return (
        <View style={styles.screen}>
            <TouchableOpacity
                // onPress={() => props.navigation.navigate('SocialNetwork', {
                //     color: "#3A559F",
                //     text: translate('facebookShare', lang)
                // })}
                onPress={() => lang == "en" ? Share.shareSingle(FacebookOptions) : Share.shareSingle(FacebookOptionsRU)}
                style={styles.facebookIconContainer}>
                <FacebookIcon width="45" height="45" />
            </TouchableOpacity>
            <TouchableOpacity
                // onPress={() => props.navigation.navigate('SocialNetwork', {
                //     color: "#50ABF1",
                //     text: translate('twitterShare', lang)
                // })}
                onPress={() => lang == "en" ? Share.shareSingle(TwitterOptions) : Share.shareSingle(TwitterOptionsRU)}
                style={styles.twitterIconContainer}>
                <TwitterIcon width="45" height="45" />
            </TouchableOpacity>
            <TouchableOpacity
                // onPress={() => props.navigation.navigate('SocialNetwork', {
                //     color: "#EA4335",
                //     text: translate('googleShare', lang)
                // })}
                onPress={() => lang == "en" ? Share.shareSingle(GoogleOptions) : Share.shareSingle(GoogleOptionsRU)}
                style={styles.googleIconContainer}>
                <GoogleIcon width="45" height="45" />
            </TouchableOpacity>

        </View>
    )
}

export default SocialNetworkBar;