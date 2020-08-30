import {StyleSheet, Dimensions} from 'react-native';

let deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  testSub_Title: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 8,
    color: '#608CB3',
  },
  screen: {
    flex: 1,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: deviceHeight / 13,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  //MODAL WINDOW STYLING

  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: deviceHeight / 1.15,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 24,
  },
  testContainer: {
    width: '100%',
    height: deviceHeight / 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 48,
  },
  testWelcomeTitle: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: deviceHeight / 4,
  },
  testInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  question: {
    fontSize: 14,
  },
  answerButton: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
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
});

export default styles;
