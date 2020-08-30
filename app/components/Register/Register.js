import React, { Component, Dimensions } from "react";
import {
  ToastAndroid,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  AsyncStorage,
  Alert,
  KeyboardAvoidingView
} from "react-native";
//import { Answers } from "react-native-fabric";
import { Button } from "react-native-elements";
//import axios from "axios";
//import * as Animatable from "react-native-animatable";
//import Hr from "react-native-hr-component";
import { connect } from "react-redux";
//import * as actionCreators from "../../action";
import translate from '../../services/i18n/customTranslator';
import SvgUri from "react-native-svg-uri";
import SvgImageData from "./../../images/svg/svg";
import styles from "../Register/style";
// import { AccessToken } from 'react-native-fbsdk';
// import { LoginManager } from "react-native-fbsdk";
// import langtran from "../../data/languagetrans";
// import { GoogleSignin } from 'react-native-google-signin';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Password: "",
      disabled: false,
      errorText: "",
      appcode: ''
    };
  }
  componentWillMount() {

  }
  componentDidMount() {

  }
  RegisterPress = () => {
    console.log("Register ok")
  };


  render() {
    const { goBack } = this.props.navigation;

    return (
      <KeyboardAvoidingView
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        behavior="padding"
      >
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
                  {translate("register", this.props.lang)}
                </Text>
              </TouchableOpacity>
              <View style={styles.SignUpNowBox}>
                <Text style={styles.SignUpNow}>{translate("RegisterpNOw", this.props.lang)}</Text>
              </View>
              <View style={styles.socialLogoBox}>
                <TouchableOpacity
                  onPress={() => this.fbLogin()}
                  style={[styles.socialLogo, { marginRight: 20, backgroundColor: "#1DA1F2" }]}
                >
                  <SvgUri width={25} height={25} svgXmlData={SvgImageData.icon.facebook} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.googleLogin()}
                  style={[styles.socialLogo, { marginLeft: 20, backgroundColor: "#ffffff" }]}
                >
                  <SvgUri width={25} height={25} svgXmlData={SvgImageData.icon.google} />
                </TouchableOpacity>
              </View>
              <View style={styles.pading25LeftRight}>
                <Text style={styles.orStyle}>  ──────────── {translate("or", this.props.lang)} ────────────</Text>
              </View>
              <View style={[styles.SignUpNowBox, { paddingLeft: 25, paddingRight: 25 }]}>
                <View style={styles.InputForm}>
                  <View>
                    <Text style={styles.InputTitle}>{translate("name", this.props.lang)}</Text>
                    <TextInput
                      style={styles.input}
                      type
                      placeholder={translate("namePlace", this.props.lang)}
                      placeholderTextColor="#5eb0ef"
                      textContentType="emailAddress"
                      returnKeyType="next"
                      keyboardType="email-address"
                      underlineColorAndroid="#fff0"
                      ref={this.thridTextInputRef}
                    />
                  </View>
                  <View>
                    <Text style={styles.InputTitle}>{translate("email", this.props.lang)}</Text>
                    <TextInput
                      style={styles.input}
                      type
                      placeholder={translate("enryrEmail", this.props.lang)}
                      placeholderTextColor="#5eb0ef"
                      textContentType="emailAddress"
                      returnKeyType="next"
                      keyboardType="email-address"
                      underlineColorAndroid="#fff0"
                    />
                  </View>
                  <View>
                    <Text style={styles.InputTitle}>
                      {translate("password", this.props.lang)}
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder={translate("passwordPlace", this.props.lang)}
                      placeholderTextColor="#5eb0ef"
                      textContentType="password"
                      returnKeyType="next"
                      keyboardType="default"
                      secureTextEntry={true}
                      underlineColorAndroid="#fff0"
                      ref="Password"
                      ref={this.secondTextInputRef}
                    />
                  </View>

                </View>
                <View>
                  <Button
                    title={translate("register", this.props.lang)}
                    titleStyle={{ color: "#ffffff", fontSize: 18, paddingTop: 6 }}
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
                    containerStyle={{ marginTop: 10, marginBottom: 8 }}
                    clear={true}
                    onPress={() => this.props.navigation.navigate("ResendVerificationRoute")}
                  />
                </View>
                <View style={{ alignSelf: "center" }}>
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
              </View>
            </View>
          </ScrollView>


        </ImageBackground>
      </KeyboardAvoidingView >
    );

  }
}

const mapStateToProps = state => {
  const lang = state.languageReducer.lang;

  return {
    lang,
  };
};


export default connect(mapStateToProps)(Register);
