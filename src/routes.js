import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './screens/Feed';

const Routes = () => {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerTitle: 'Route Name',
      }}>
        <Screen name="Feed" component={Feed} />
      </Navigator>  
    </NavigationContainer>
  );
};

export default Routes;
