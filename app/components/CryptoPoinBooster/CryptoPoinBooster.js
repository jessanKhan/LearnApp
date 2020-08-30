import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, ImageBackground} from 'react-native';
import {RetrivePoint} from '../../actions/cryptoPoint';
import {useSelector, useDispatch} from 'react-redux';
// import styles from './styles';

const bgImage = require('../../images/AppBackground.png');

const LoadIng = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator color="#354E72" size="large" />
    </View>
  );
};

const Content = props => {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1}}></View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#FFF', fontSize: 20}}>Crypto Point Booster</Text>
        <Text style={{color: '#FFF', fontSize: 14}}>{props.total_point}</Text>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
};

const PointBooster = props => {
  const dispatch = useDispatch();

  const loader = false; //useSelector(state => state.cryptoPointBooster.loader);
  const total_point = useSelector(
    state => state.cryptoPointBooster.total_point,
  );

  // useEffect(() => {
  //   try {
  //     dispatch(RetrivePoint());
  //   } catch (error) {
  //     console.log('Error is PointBooster ', error);
  //   }
  // }, []);

  return (
    <ImageBackground
      source={bgImage}
      style={{width: '100%', height: '100%'}}
      resizeMode="cover">
      {loader == true ? <LoadIng /> : <Content total_point={total_point} />}
    </ImageBackground>
  );
};

export default PointBooster;
