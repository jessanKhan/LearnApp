// import React from 'react';
// import {View, StyleSheet} from 'react-native';
// import TrainingCourses from './TrainingCourses';

// const TrainingCoursesIndex = props => {
//     return (
//         <View style={styles.screen}>
//             <TrainingCourses {...props}/>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     screen: {
//         flex: 1
//     }
// })

// export default TrainingCoursesIndex;

import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TrainingCourses from './TrainingCourses';
import {connect} from 'react-redux';
import {homeDataLoad, homeDataRefresh} from '../../actions/homeAction';

class TrainingCoursesIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
    };

    // this.navigationWillFocusListener = props.navigation.addListener(
    //   'willFocus',
    //   () => {
    //     this.props.initData == 'success'
    //       ? this.props.dispatch(
    //           homeDataRefresh(
    //             this.props.lang,
    //             this.props.GetLesson,
    //             this.props.YoutubeData,
    //             this.props.GetNews_Data,
    //             this.props.Top100Currency,
    //             this.props.EncryptionServiceID,
    //             this.props.LawsData,
    //             this.props.GetNewUpdateNews_Data,
    //           ),
    //         )
    //       : this.props.lnagLoaded == true
    //       ? this.props.dispatch(homeDataLoad(props.lang))
    //       : null;
    //   },
    // );
  }

  render() {
    return (
      <View style={styles.screen}>
        <TrainingCourses {...this.props} />
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
  console.log('state', state);
  const lang = state.languageReducer.lang;
  const lnagLoaded = state.languageReducer.lnagLoaded;
  const T_C_unread_data = state.homeReducer.T_C_unread_data;
  const Min_C_unread_data = state.homeReducer.Min_C_unread_data;
  const C_N_unread_data = state.homeReducer.C_N_unread_data;
  const loader = state.homeReducer.loader;
  const USER_DB = state.homeReducer.USER_DB;
  const GetLesson = state.homeReducer.GetLesson;
  const initData = state.homeReducer.initData;
  const YoutubeData = state.homeReducer.YoutubeData;
  const GetNews_Data = state.homeReducer.GetNews_Data;
  const LawsData = state.homeReducer.LawsData;
  const EncryptionServiceID = state.homeReducer.EncryptionServiceID;
  const Top100Currency = state.homeReducer.Top100Currency;
  const GetNewUpdateNews_Data = state.homeReducer.GetNewUpdateNews_Data;

  return {
    lang,
    lnagLoaded,
    T_C_unread_data,
    Min_C_unread_data,
    C_N_unread_data,
    loader,
    USER_DB,
    GetLesson,
    initData,
    YoutubeData,
    GetNews_Data,
    LawsData,
    EncryptionServiceID,
    Top100Currency,
    GetNewUpdateNews_Data,
  };
};

export default connect(mapStateProps)(TrainingCoursesIndex);
