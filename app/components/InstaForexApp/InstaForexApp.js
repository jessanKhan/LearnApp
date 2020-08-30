import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles'
import TimedSlideshow from 'react-native-timed-slideshow';
//IMPORT IMAGES BACKGROUND
const ForexCourse = require('../../images/InstaForexApps/ForexCourseen.jpg');
const ForexQuotes = require('../../images/InstaForexApps/ForexQuotesen.jpg');
const ForexSignals = require('../../images/InstaForexApps/ForexSignalsen.jpg');
const InstaForex = require('../../images/InstaForexApps/InstaForexen.jpg');
import CloseIcon from '../SVG/CloseIcon';

//I18n CUSTOM TRANSLATOR FROM SERVICES FOLDER
import translate from '../../services/i18n/customTranslator';

const InstaForexApp = props => {

    //GET LANGUAGE INFO FROM STORE
    const lang = useSelector(state=>state.languageReducer.lang);
    
    const {goBack} = props.navigation

    const items = [
        {
            uri: ForexCourse,
            title: translate('ForexCourse', lang),
            duration: 3000,
        },
        {
            uri: ForexQuotes,
            title: translate('ForexQuotes', lang),
            duration: 3000,
        },
        {
            uri: ForexSignals,
            title: translate('ForexSignals', lang),
            duration: 3000,
        },
        {
            uri: InstaForex,
            title: translate('InstaForex', lang),
            duration: 3000,
        }
    ]

    const CloseComponent = props =>{
        return(
                <TouchableOpacity style={styles.closeButtonTouch} onPress={()=>{goBack()}}>
                    <View style={styles.closeButtonView}>
                        <CloseIcon   width={24} height={24}  fill="#FFF"/>
                    </View>
                </TouchableOpacity>
        )
    }

    return (
        <TimedSlideshow	
            progressBarColor={"#303B55"}
            renderCloseIcon={()=><CloseComponent {...props}/>}
            onClose={()=>goBack()} 
            titleStyle={styles.title} 
            items={items}
        />
    )
    
}

export default InstaForexApp;

