import {StyleSheet, Dimensions} from 'react-native';

//GET DEVICE'S SCREEN INFORMATION
let deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionContainer: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 8,
  },
  description: {
    paddingBottom: 16,
  },

  // LIKES & VIEWS INFO
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
  },
  itemInfoText: {
    fontSize: 14,
    color: '#006DD8',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 0,
    width: '48%',
  },

  //MODAL WINDOW STYLING

  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: deviceHeight / 1.24,
    backgroundColor: 'rgba(255,255,255,1)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  testContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    top: 0,
  },
  testTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 8,
    color: '#608CB3',
  },
  _testTitle2: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 8,
    color: '#000',
  },
  testInner: {
    flex: 1,
    //height: deviceHeight / 1.2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  testButton: {
    width: 200,
    height: 50,
    backgroundColor: '#B8CFE3',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
    borderRadius: 20,
  },
  testButtonText: {
    color: '#52616E',
    fontSize: 16,
  },

  testSub_Title: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 8,
    color: '#608CB3',
  },

  testSubTitleGreat: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 8,
    color: '#025939',
  },
  testSubTitleGood: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 8,
    color: '#BF5B04',
  },
  testSubTitleBad: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 8,
    color: '#BF0B1A',
  },
  testResultGreat: {
    fontSize: 32,
    marginVertical: 16,
    color: '#025939',
  },
  testResultGood: {
    fontSize: 32,
    marginVertical: 16,
    color: '#BF5B04',
  },
  testResultBad: {
    fontSize: 32,
    marginVertical: 16,
    color: '#BF0B1A',
  },
  question: {
    fontSize: 16,
    paddingVertical: 8,
    textAlign: 'center',
    color: '#333',
  },
  answer: {
    minHeight: 50,
    padding: 10,

    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  answerText: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'justify',
  },
});

export default styles;
