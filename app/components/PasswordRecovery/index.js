import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import PasswordRecovery from "./PasswordRecovery";

export default class index extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <PasswordRecovery
          navigate={this.props.navigation.navigate}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})
