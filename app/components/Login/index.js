import React, { Component } from "react";
import { View } from "react-native";
import Login from "./Login";

export default class index extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Login navigate={this.props.navigation.navigate} navigation={this.props.navigation} />
      </View>
    );
  }
}
