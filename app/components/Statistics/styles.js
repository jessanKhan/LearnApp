import { StyleSheet, Dimensions } from 'react-native';

//GET DEVICE'S SCREEN INFORMATION
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  bgImage: {
    height: deviceHeight,
    width: '100%',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 45,
    left: 25,
  },
  socialBar: {
    height: 100,
    backgroundColor: '#FFF',
  },
  resultContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: null,
    height: deviceHeight / 7.5,
    borderColor: '#FFF',
    borderWidth: 1,
  },
  progressText: {
    color: 'gray',
    fontSize: 12,
    paddingVertical: 8,
    textAlign: 'center',
  },
  progressTextPercent: {
    color: '#FFF',
    fontSize: 24,
  },
  shareTextContainer: {
    position: 'absolute',
    bottom: 180,
    width: '100%',
  },
  shareText: {
    color: '#FFF',
    fontSize: 24,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  userIcon: {
    position: 'absolute',
    top: deviceHeight / 5,
    left: deviceWidth / 2 - 60,
  },
});

export default styles;
