// In App.js in a new project

import * as React from 'react';
import AppNavigator from './src/AppNavigator';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
