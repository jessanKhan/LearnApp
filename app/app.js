import React from 'react';
//REDUX IMPLEMENTATION
import {Provider} from 'react-redux';
import store from './store/store';

import RootNavigator from './navigation/RootNavigator';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
export default App;
