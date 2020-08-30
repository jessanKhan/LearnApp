import React, { Component } from "react";
import { View } from "react-native";
import Register from "./Register";

export default class index extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Register navigate={this.props.navigation.navigate} navigation={this.props.navigation} />
      </View>
    );
  }
}
