import React, { Component } from "react";
import {
  ToastAndroid,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  AsyncStorage,
  Alert
} from "react-native";
import { Button } from "react-native-elements";
//import axios from "axios";
import { connect } from "react-redux";
//import * as actionCreators from "../../action";
import translate from '../../services/i18n/customTranslator';
import SvgUri from "react-native-svg-uri";
import SvgImageData from "./../../images/svg/svg";
import styles from "./style";
class PasswordRecovery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmationEmail: "",
      code: "",
      loading: false,
      disabled: false,
      level: 1,
      pass1: "",
      pass2: "",
      errorText: "",
      appcode: ''
    };
  }
  componentDidMount() {

  }


  levelUP1 = props => {
    this.setState({ level: 2 })
  }
  levelUP2 = props => {
    this.setState({ level: 3 })
  }

  render() {
    const { goBack } = this.props.navigation;
    if (this.state.level == 1) {
      return (
        <ImageBackground source={require("../../images/AppBackground.png")} style={styles.BackGroundImage}>
          <ScrollView>
            <View style={styles.minHeight}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              >
                <SvgUri width="25" height="40" svgXmlData={SvgImageData.icon.back} />
                <Text style={styles.Header}>{translate("forgotPass", this.props.lang)}</Text>
              </TouchableOpacity>

              <View style={[styles.SignUpNowBox, styles.sidePadding25]}>
                <View style={styles.InputForm}>
                  <Text style={styles.confairmationText}>
                    {translate("forgotPassText", this.props.lang)}
                  </Text>
                  <View>
                    <Text style={styles.InputTitle}>{translate("email", this.props.lang)}</Text>
                    <TextInput
                      style={styles.input}
                      placeholder={translate("enryrEmail", this.props.lang)}
                      placeholderTextColor="#5eb0ef"
                      textContentType="emailAddress"
                      returnKeyType="next"
                      autoCapitalize='none'
                      value={this.state.confirmationEmail.replace(/\s/g, '')}
                      underlineColorAndroid="#fff0"
                    />
                  </View>
                </View>
                <View>
                  <Button
                    title={translate("Submit", this.props.lang)}
                    titleStyle={styles.buttonTitle}
                    loading={this.state.loading}
                    loadingProps={{ size: "large", color: "#ffffff" }}
                    titleStyle={styles.buttonTitleStyle}
                    buttonStyle={styles.defaultButtonStyle}
                    disabledStyle={styles.buttonDisabledStyle}
                    containerStyle={styles.buttonContainerStyle}
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
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
        </ImageBackground>
      );
    } else if (this.state.level == 2) {
      return (
        <ImageBackground source={require("../../images/AppBackground.png")} style={styles.BackGroundImage}>
          <ScrollView>
            <View style={styles.minHeight}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              >
                <SvgUri width="25" height="40" svgXmlData={SvgImageData.icon.back} />
                <Text style={styles.Header}>{translate("forgotPass", this.props.lang)}</Text>
              </TouchableOpacity>

              <View style={[styles.SignUpNowBox, styles.sidePadding25]}>
                <View style={styles.InputForm}>
                  <Text style={styles.confairmationText}>
                    {translate("EmailConfirmText", this.props.lang)}
                  </Text>
                  <Text style={[styles.confairmationText, { color: "red", fontSize: 14 }]}>
                    {this.state.errorText}
                  </Text>
                  <View>
                    <Text style={styles.InputTitle}>
                      {translate("confirmationcode", this.props.lang)}
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder={translate("confirmationcode", this.props.lang)}
                      placeholderTextColor="#5eb0ef"
                      textContentType="password"
                      returnKeyType="next"
                      keyboardType="default"
                      value={this.state.username}
                      underlineColorAndroid="#fff0"
                    />
                  </View>
                </View>
                <View style={styles.flexRow}>
                  <Button
                    title={translate("GoBack", this.props.lang)}
                    titleStyle={styles.buttonTitle}
                    loadingProps={{ size: "large", color: "#ffffff" }}
                    titleStyle={styles.buttonTitleStyle}
                    buttonStyle={styles.defaultButtonStyle1}
                    disabledStyle={styles.buttonDisabledStyle}
                    containerStyle={styles.buttonContainerStyle}
                    clear={true}
                    onPress={() => {
                      this.setState({ level: 1 });
                    }}
                  />
                  <Button
                    title={translate("Submit", this.props.lang)}
                    titleStyle={styles.buttonTitle}
                    loading={this.state.loading}
                    loadingProps={{ size: "large", color: "#ffffff" }}
                    titleStyle={styles.buttonTitleStyle}
                    buttonStyle={styles.defaultButtonStyle1}
                    disabledStyle={styles.buttonDisabledStyle}
                    containerStyle={styles.buttonContainerStyle}
                    clear={true}
                    disabled={this.state.disabled}
                    onPress={this.levelUP2}
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
                alignItems: "center",
              }}
              disabledStyle={{
                alignItems: "center",
                backgroundColor: "transparent",
                borderColor: "white",
                alignSelf: "center",
              }}
              containerStyle={{ marginTop: 20, marginBottom: 10 }}
              clear={true}
              disabled={this.state.disabled}
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
        </ImageBackground>
      );
    } else if (this.state.level == 3) {
      return (
        <ImageBackground source={require("../../images/AppBackground.png")} style={styles.BackGroundImage}>
          <ScrollView>
            <View style={styles.minHeight}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              >
                <SvgUri width="25" height="40" svgXmlData={SvgImageData.icon.back} />
                <Text style={styles.text24}>
                  {translate("forgotPass", this.props.lang)}
                </Text>
              </TouchableOpacity>

              <View style={[styles.SignUpNowBox, { paddingLeft: 25, paddingRight: 25 }]}>
                <View style={styles.InputForm}>
                  <Text style={styles.confairmationText}>

                  </Text>
                  <View>
                    <Text style={styles.InputTitle}>{translate("NewPass", this.props.lang)}</Text>
                    <TextInput
                      style={styles.input}
                      placeholder={translate("NewPass", this.props.lang)}
                      placeholderTextColor="#5eb0ef"
                      textContentType="password"
                      returnKeyType="next"
                      keyboardType="default"
                      secureTextEntry={true}
                      value={this.state.username}
                      underlineColorAndroid="#fff0"
                      inlineImageLeft="username"
                      selectionColor="white"
                    />
                    <Text style={styles.InputTitle}>{translate("NewPassConf", this.props.lang)}</Text>
                    <TextInput
                      style={styles.input}
                      placeholder={translate("NewPassConf", this.props.lang)}
                      placeholderTextColor="#5eb0ef"
                      textContentType="password"
                      returnKeyType="next"
                      keyboardType="default"
                      secureTextEntry={true}
                      value={this.state.username}
                      underlineColorAndroid="#fff0"
                      inlineImageLeft="username"
                      selectionColor="white"
                    />
                  </View>
                </View>
                <View>
                  <Button
                    title={translate("ChangPass", this.props.lang)}
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
                    onPress={console.log("pasword changed")}
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
              onPress={() => this.props.navigation.goBack()}
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


export default connect(mapStateToProps)(PasswordRecovery);
