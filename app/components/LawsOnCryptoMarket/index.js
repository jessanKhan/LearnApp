// import React from 'react';
// import {View, StyleSheet} from 'react-native';
// import LawsOnCryptoMarket from './LawsOnCryptoMarket';

// const LawsIndex = props => {
//     return (
//         <View style={styles.screen}>
//             <LawsOnCryptoMarket {...props}/>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     screen: {
//         flex: 1
//     }
// })

// export default LawsIndex;

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import LawsOnCryptoMarket from './LawsOnCryptoMarket';
import {connect} from 'react-redux';
import {homeDataLoad, homeDataRefresh} from '../../actions/homeAction';

class LawsIndex extends React.Component {
  constructor(props) {
    super(props);

    // this.navigationWillFocusListener = props.navigation.addListener(
    //     'willFocus',
    //     () => {
    //         this.props.dispatch(
    //             homeDataRefresh(
    //                 this.props.lang,
    //                 this.props.GetLesson,
    //                 this.props.YoutubeData,
    //                 this.props.GetNews_Data,
    //                 this.props.Top100Currency,
    //                 this.props.EncryptionServiceID,
    //                 this.props.LawsData,
    //                 this.props.GetNewUpdateNews_Data
    //             ),
    //         );
    //     },
    // );
  }

  render() {
    return (
      <View style={styles.screen}>
        <LawsOnCryptoMarket {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

const mapStateProps = state => {
  const lang = state.languageReducer.lang;
  const USER_DB = state.homeReducer.USER_DB;
  const GetLesson = state.homeReducer.GetLesson;
  const YoutubeData = state.homeReducer.YoutubeData;
  const GetNews_Data = state.homeReducer.GetNews_Data;
  const LawsData = state.homeReducer.LawsData;
  const EncryptionServiceID = state.homeReducer.EncryptionServiceID;
  const Top100Currency = state.homeReducer.Top100Currency;
  const GetNewUpdateNews_Data = state.homeReducer.GetNewUpdateNews_Data;
  return {
    lang,
    USER_DB,
    GetLesson,
    YoutubeData,
    GetNews_Data,
    LawsData,
    EncryptionServiceID,
    Top100Currency,
    GetNewUpdateNews_Data,
  };
};

export default connect(mapStateProps)(LawsIndex);
