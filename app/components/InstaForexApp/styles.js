import {StyleSheet, Dimensions} from 'react-native';

//GET DEVICE'S SCREEN INFORMATION
let deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  closeButtonTouch: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 100,
    height: 100,
  },
  closeButtonView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20
  }
});

export default styles;