import React, { Component, Dimensions } from "react";
import {
  ToastAndroid,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  AsyncStorage
} from "react-native";
import { Button } from "react-native-elements";

import { connect } from "react-redux";

import translate from "../../services/i18n/customTranslator";
import SvgUri from "react-native-svg-uri";
import SvgImageData from "./../../images/svg/svg";
import styles from "./style";
class ResendVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      disabled: false,
      level: 1,

    };
  }



  levelUP1 = props => {
    this.setState({ level: 2 })
  }



  render() {
    if (this.state.level == 1) {
      return (
        <ImageBackground source={require("../../images/AppBackground.png")} style={styles.BackGroundImage}>
          <ScrollView>
            <View>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              >
                <SvgUri width="25" height="40" svgXmlData={SvgImageData.icon.back} />
                <Text style={styles.text24}>
                  {translate("EmailVerify", this.props.lang)}
                </Text>
              </TouchableOpacity>

              <View style={[styles.SignUpNowBox, { paddingLeft: 25, paddingRight: 25 }]}>
                <View style={styles.InputForm}>
                  <Text style={styles.confairmationText}>
                    {translate("textEVerify", this.props.lang)}
                  </Text>
                  <Text style={[styles.confairmationText, { color: "red", fontSize: 14 }]}>
                    {this.state.errorText}
                  </Text>
                </View>
                <View>
                  <Button
                    title={translate("VerifyEmailbutton", this.props.lang)}
                    titleStyle={{ color: "#ffffff", fontSize: 18, paddingTop: 6 }}
                    loading={this.state.loading}
                    loadingProps={{ size: "large", color: "#ffffff" }}
                    titleStyle={{ fontWeight: "700" }}
                    buttonStyle={{
                      alignItems: "center",
                      backgroundColor: "transparent",
                      borderColor: "white",
                      borderWidth: 1,
                      width: 200,
                      height: 40,
                      borderRadius: 15,
                    }}
                    disabledStyle={{
                      alignItems: "center",
                      backgroundColor: "transparent",
                      borderColor: "white",
                    }}
                    containerStyle={{ marginTop: 20, marginBottom: 10 }}
                    clear={true}
                    disabled={this.state.disabled}
                    onPress={this.levelUP1}
                  />
                </View>
              </View>
            </View>
          </ScrollView>

          <View style={{ alignSelf: "center", bottom: 30 }}>
            <Button
              title={translate("siginIn", this.props.lang)}
              titleStyle={{ color: "#ffffff", fontSize: 18, paddingTop: 6 }}
              loading={this.state.loading}
              loadingProps={{ size: "large", color: "#ffffff" }}
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                alignItems: "center",
                backgroundColor: "transparent",
                borderColor: "white",
                borderWidth: 1,
                width: 200,
                height: 40,
                borderRadius: 15,
                alignSelf: "center",
                alignItems: "center"
              }}
              disabledStyle={{
                alignItems: "center",
                backgroundColor: "transparent",
                borderColor: "white",
                alignSelf: "center"
              }}
              containerStyle={{ marginTop: 20, marginBottom: 10 }}
              clear={true}
              disabled={this.state.disabled}
              onPress={() => this.props.navigation.navigate("LoginRoute")}
            />
          </View>

        </ImageBackground>
      );
    } else if (this.state.level == 2) {
      return (
        <ImageBackground source={require("../../images/AppBackground.png")} style={styles.BackGroundImage}>
          <ScrollView>
            <View>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              >
                <SvgUri width="25" height="40" svgXmlData={SvgImageData.icon.back} />
                <Text style={styles.text24}>

                  {translate("EmailVerify", this.props.lang)}
                </Text>
              </TouchableOpacity>

              <View style={[styles.SignUpNowBox, { paddingLeft: 25, paddingRight: 25 }]}>
                <View style={styles.InputForm}>
                  <Text style={styles.confairmationText}>
                    {translate("textEVerify2", this.props.lang)}
                  </Text>
                  <TextInput
                    style={[styles.input, { textAlign: "center", width: 200 }]}
                    placeholder={translate("confirmationcode", this.props.lang)}
                    placeholderTextColor="#5eb0ef"
                    textContentType="password"
                    returnKeyType="next"
                    keyboardType="default"
                    onSubmitEditing={() => console.log("onSubmitEditing")}
                    onChangeText={code => this.UpdateConfirmationCode(code)}
                    value={this.state.username}
                    underlineColorAndroid="#fff0"
                  />
                </View>
                <View>
                  <Button
                    title={translate("Submit", this.props.lang)}
                    titleStyle={{ color: "#ffffff", fontSize: 18, paddingTop: 6 }}
                    loading={this.state.loading}
                    loadingProps={{ size: "large", color: "#ffffff" }}
                    titleStyle={{ fontWeight: "700" }}
                    buttonStyle={{
                      alignItems: "center",
                      backgroundColor: "transparent",
                      borderColor: "white",
                      borderWidth: 1,
                      width: 200,
                      height: 40,
                      borderRadius: 15,
                    }}
                    disabledStyle={{
                      alignItems: "center",
                      backgroundColor: "transparent",
                      borderColor: "white",
                    }}
                    containerStyle={{ marginTop: 20, marginBottom: 10 }}
                    clear={true}
                    disabled={this.state.disabled}
                    onPress={this.ConfirmationPress}
                  />
                </View>
              </View>
            </View>
          </ScrollView>

          <View style={{ alignSelf: "center", bottom: 30 }}>
            <Button
              title={translate("siginIn", this.props.lang)}
              titleStyle={{ color: "#ffffff", fontSize: 18, paddingTop: 6 }}
              loading={this.state.loading}
              loadingProps={{ size: "large", color: "#ffffff" }}
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                alignItems: "center",
                backgroundColor: "transparent",
                borderColor: "white",
                borderWidth: 1,
                width: 200,
                height: 40,
                borderRadius: 15,
                alignSelf: "center",
                alignItems: "center"
              }}
              disabledStyle={{
                alignItems: "center",
                backgroundColor: "transparent",
                borderColor: "white",
                alignSelf: "center"
              }}
              containerStyle={{ marginTop: 20, marginBottom: 10 }}
              clear={true}
              disabled={this.state.disabled}
              onPress={() => this.props.navigation.navigate("LoginRoute")}
            />
          </View>

        </ImageBackground>
      );
    } else {
      return null;
    }
  }
}



const mapStateToProps = state => {
  const lang = state.languageReducer.lang;

  return {
    lang,
  };
};


export default connect(
  mapStateToProps

)(ResendVerification);
