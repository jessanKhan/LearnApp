import {StyleSheet, Dimensions} from 'react-native';

//GET DEVICE'S SCREEN INFORMATION
let deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    marginBottom: 70,
  },
  courseContainer: {
    flex: 1,
    marginVertical: 2,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: deviceHeight / 3.1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 0.8,
    marginBottom: 8,
    overflow: 'hidden',
    height: 80,
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(28, 41, 69, .3)',
  },
  counter: {
    position: 'absolute',
    top: 8,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: '#FF0069',
    borderWidth: 4,
    borderColor: 'white',
    zIndex: 1000,
  },
  penIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 35,
    height: 35,
    zIndex: 1000,
  },
  counterText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFF',
  },
  headerInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 22,
  },

  infoContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 10,
    width: '66%',
  },
  infoText: {
    color: '#006DD8',
    fontWeight: 'bold',
  },
  itemInfoText: {
    fontSize: 14,
    color: '#006DD8',
    fontWeight: 'bold',
  },
  itemInfoTextX: {
    fontSize: 14,
    color: '#FFF',
  },
  itemInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 38,
    paddingLeft: 30,
    paddingRight: 30,
    //width: '55%',
    backgroundColor: '#ffffff',
    borderRadius: 50,
  },
});

export default styles;
