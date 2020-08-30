import React, { Component, Dimensions } from "react";
import {
  ToastAndroid,
  Text,
  View,
  ImageBackground,
  AsyncStorage,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import { Button } from "react-native-elements";
import { DrawerActions } from "react-navigation-drawer";
import { connect } from "react-redux";
import translate from '../../services/i18n/customTranslator';
import SvgUri from 'react-native-svg-uri';
import styles from "../Login/style";
import BackIcon from '../SVG/BackIcon';
import SvgImageData from "./../../images/svg/svg";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      Password: "",
      loading: false,
      disabled: false,
      appcode: '',
      langUUU: 'en',
    };
  }

  componentDidMount() {

  }

  LoginPress = () => {

    let x = this.props.lang;
    let params = { UserEmail: this.state.email, Password: this.state.Password };
    if (this.state.email == "" || this.state.Password == "") {
      if (this.props.lang == 'ru') {
        ToastAndroid.show("Поле с электронным адресом или паролем не должно быть пустым !", ToastAndroid.SHORT);
        return;
      }
      else {
        ToastAndroid.show("Email or Password Can't be Empty !", ToastAndroid.SHORT);
        return;
      }
    }

  };


  render() {
    //console.log('login')
    return (
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior="padding"
      >
        <ImageBackground source={require("../../images/AppBackground.png")} style={styles.BackGroundImage}>
          <ScrollView>
            <View >
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                  console.log('works')

                  this.props.navigation.navigate("Home");
                  this.props.navigation.dispatch(DrawerActions.openDrawer());
                }}
              >
                <BackIcon width={24} height={24} fill="#FFF" />
                <Text style={styles.HeardTitle}>{translate("siginIn", this.props.lang)}</Text>
              </TouchableOpacity>
              <View style={styles.SignUpNowBox}>

                <Text style={styles.SignUpNow}>
                  {translate("SignUpNOw", this.props.lang)}
                </Text>
              </View>
              <View style={styles.socialLogoBox}>
                <TouchableOpacity
                  onPress={() => console.log("Facebook login")}
                  style={[styles.socialLogo, { marginRight: 20, backgroundColor: "#1DA1F2" }]}
                >
                  <SvgUri width={30} height={30} svgXmlData={SvgImageData.icon.facebook} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => console.log("Google Login")}
                  style={[styles.socialLogo, { marginLeft: 20, backgroundColor: "#ffffff" }]}
                >
                  <SvgUri width={30} height={30} svgXmlData={SvgImageData.icon.google} />
                </TouchableOpacity>
              </View>
              <View style={[styles.SignUpNowBox, styles.pading25LeftRight]}>
                {/* <Hr
                  text={translate("or", this.props.Language)}
                  fontSize={5}
                  lineColor="#eee"
                  textPadding={5}
                  textStyles={{ fontSize: 16, color: "white" }}
                  hrStyles={{ width: "100%" }}
                /> */}<Text style={styles.orStyle}>  ──────────── {translate("or", this.props.lang)} ────────────</Text>
                <View style={styles.InputForm}>
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
                      onSubmitEditing={() => console.log("onSubmitEditing")}
                      onChangeText={email => this.setState({ email })}
                      value={this.state.username}
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
                      onSubmitEditing={() => console.log("onSubmitEditing")}
                      onChangeText={Password => this.setState({ Password })}
                      secureTextEntry={true}
                      value={this.state.username}
                      underlineColorAndroid="#fff0"
                    />
                  </View>
                </View>
                <View>
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
                    }}
                    disabledStyle={{
                      alignItems: "center",
                      backgroundColor: "transparent",
                      borderColor: "white",
                    }}
                    containerStyle={{ marginTop: 20, marginBottom: 10 }}
                    clear={true}
                    disabled={this.state.disabled}
                    onPress={this.LoginPress}
                  />
                </View>
              </View>
            </View>


            <View style={styles.footerNav}>
              <TouchableOpacity
                style={styles.footerpadding}
                onPress={() => this.props.navigation.navigate("RegisterRoute")}
              >
                <Text style={styles.footerText}>{translate("RegisterNow", this.props.lang)}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.footerpadding}
                onPress={() => this.props.navigation.navigate("PasswordRecoveryRoute")}
              >
                <Text style={styles.footerText}>{translate("forgotPass", this.props.lang)}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>

      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => {
  const lang = state.languageReducer.lang;

  return {
    lang,
  };
};

export default connect(mapStateToProps)(Login);
