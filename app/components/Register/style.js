import { StyleSheet, Dimensions } from "react-native";
let deviceWidth = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const Paddingwidth = Dimensions.get("window").width - 55;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  BackGroundImage: {
    width: "100%",
    height: "100%",
  },
  containerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 150,
    paddingBottom: 100,
    paddingLeft: 40,
    paddingRight: 40,
  },
  backButton: {
    paddingTop: 30,
    paddingLeft: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  SignUpNowBox: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    fontSize: 16,
    color: "white",
  },
  dividerHr: {
    color: "white",
    width: "100%",
  },
  SignUpNow: {
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 18,
    color: "white",
    marginTop: 20,
    width: 280,
    fontFamily: "Montseratt",
  },
  socialLogoBox: {
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
  },
  socialLogo: {
    height: null,
    width: null,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 50,
  },
  InputForm: {
    paddingBottom: 10,
    paddingTop: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    color: "#5eb0ef",
    width: Paddingwidth,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    marginBottom: 15,
    paddingLeft: 15,
  },
  button: {
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
    width: 200,
    height: 40,
    borderRadius: 15,
    marginBottom: 10,
  },
  footerText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Montseratt",
  },
  confairmationText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Montseratt",
    paddingBottom: 25,
  },
  InputTitle: {
    color: "white",
    paddingBottom: 5,
  },

  HeardTitle: {
    paddingLeft: 20,
    color: "white",
    fontSize: 24,
  },
  pading25LeftRight: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  minHeight: {
    minHeight: height - 130,
  },
  footer: {
    position: "absolute",
    bottom: 25,
  },
  footerNav: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 90,
  },
  footerpadding: {
    bottom: 25,
  },
  footerNavRight: {
    bottom: 25,
  },
  viewRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 25,
    paddingRight: 25,
  },
  touchableAbsoluteLeft: {
    position: "absolute",
    bottom: 25,
    left: 25
  },
  touchableAbsoluteRight: {
    position: "absolute",
    bottom: 25,
    right: 25
  },
  text24: {
    paddingLeft: 20,
    color: "white",
    fontSize: 24
  },
  orStyle: { alignSelf: "center", color: '#fff' }
});

export default styles;
