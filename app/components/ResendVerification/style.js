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
  },
  SignUpNowBox: {
    flex: 1,
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
    paddingTop: 40,
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
    paddingLeft: 0,
    alignSelf: "center"
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
  verficationButton: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    width: 200,
    height: 40,
    borderRadius: 15,
    marginBottom: 10,
  },
  text24: {
    paddingLeft: 20,
    color: "white",
    fontSize: 24
  },
  viewRow: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: "center"

  },
  touchableAbsoluteLeft: {
    alignSelf: "center",
    position: "absolute",
    //bottom: 25,
    // left: 25
  },
});

export default styles;
