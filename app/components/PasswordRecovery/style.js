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
    paddingTop: 40,
    paddingLeft: 20,
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
    textAlign: "center", // <-- the magic
    fontSize: 22,
    color: "white",
    marginTop: 30,
    width: 280,
    fontFamily: "Montseratt",
  },
  socialLogoBox: {
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 25,
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
    paddingBottom: 15,
    paddingTop: 15,
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

  Header: {
    paddingLeft: 20,
    color: "white",
    fontSize: 24,
  },
  sidePadding25: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  buttonTitle: {
    color: "#ffffff",
    fontSize: 18,
    paddingTop: 6,
    fontWeight: "700",
    //alignSelf: "center"
  },
  defaultButtonStyle: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    width: 200,
    height: 40,
    borderRadius: 15,

  },
  defaultButtonStyle1: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    width: 135,
    height: 40,
    borderRadius: 15,
    marginHorizontal: 20
  },
  buttonDisabledStyle: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "white",

  },
  buttonContainerStyle: {
    marginTop: 20,
    marginBottom: 10,
  },
  buttonTitleStyle: {
    fontWeight: "700",
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 25,
    paddingRight: 25,
  },
  footerLinkLeft: {
    position: "absolute",
    bottom: 25,
    left: 25,
  },
  footerLinkRight: { position: "absolute", bottom: 25, right: 25 },
  fier: {
    height: 10,
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

  pading25LeftRight: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  minHeight: {
    minHeight: height - 110,
  },
  minHeight1: {
    minHeight: height - 150,
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
  flexRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text24: {
    paddingLeft: 20,
    color: "white",
    fontSize: 24
  }
});

export default styles;
