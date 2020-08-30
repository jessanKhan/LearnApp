import React, { Component } from "react";
import { View } from "react-native";
import ResendVerification from "./ResendVerification";

export default class index extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ResendVerification
          navigate={this.props.navigation.navigate}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}
