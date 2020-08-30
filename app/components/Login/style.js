import { StyleSheet, Dimensions } from "react-native";
const height = Dimensions.get("window").height;
footerHeight = height - 100;
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
    marginTop: 25,
    width: 280,
    fontFamily: "Montseratt",
  },
  socialLogoBox: {
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 40,
    paddingBottom: 40,
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
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    width: 200,
    height: 40,
    borderRadius: 15,
    marginBottom: 5,
  },
  footerText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Montseratt",
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

  pading25LeftRight: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  minHeight: {
    minHeight: height - 110,
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
    paddingTop: 40,
  },
  footerpadding: {
    bottom: 25,
  },
  footerNavRight: {
    bottom: 25,
  },
  keyboard: {
    backgroundColor: 'transparent',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orStyle: { alignSelf: "center", color: '#fff' }
});

export default styles;
