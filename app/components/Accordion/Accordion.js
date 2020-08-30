import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

import ArrowDownIcon from '../../components/SVG/ArrowDownIcon';
import ArrowUpIcon from '../../components/SVG/ArrowUpIcon';
import AsyncStorage from '@react-native-community/async-storage';

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };
  }

  toggleExpand = () => {
    this.setState({expanded: !this.state.expanded});

    let currentReadID = this.props.id;

    if (this.state.expanded == false) {
      AsyncStorage.getItem('ReadTop100CryptoData').then(data => {
        let _ReadYoutubeData = JSON.parse(data);

        let Save_Data = [],
          data_crt,
          chker = false;

        if (_ReadYoutubeData.length == 0) {
          data_crt = {
            id: currentReadID,
          };
          chker = false;
          Save_Data.push(data_crt);
        } else {
          Save_Data = _ReadYoutubeData;

          _ReadYoutubeData.map(e =>
            e.id == currentReadID ? (chker = true) : null,
          );

          data_crt = {
            id: currentReadID,
          };
          Save_Data.push(data_crt);
        }

        if (chker == false) {
          AsyncStorage.setItem(
            'ReadTop100CryptoData',
            JSON.stringify(Save_Data),
          );
        }
      });
    }
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.row}
          onPress={() => this.toggleExpand()}>
          <View style={styles.itemContainer}>
            <View style={styles.iconStyle}>
              <Text style={styles.title}>{this.props.realID}.</Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{this.props.title}</Text>
            </View>
            {this.state.expanded ? (
              <ArrowUpIcon width={25} height={25} fill={'#999'} />
            ) : (
              <ArrowDownIcon width={25} height={25} fill={'#999'} />
            )}
          </View>
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {this.state.expanded && (
          <View style={styles.child}>
            <Text>{this.props.data}</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
  },
  titleX: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  parentHr: {
    height: 1,
    backgroundColor: '#DDD',
    width: '100%',
  },
  child: {
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
});
