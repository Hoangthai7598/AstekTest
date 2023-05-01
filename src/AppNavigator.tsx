import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './routes/HomeStack';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
