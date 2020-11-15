import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import logo from './assets/instagram.png';
import Feed from './screens/Feed';

const Routes = () => {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerTitle: <Image source={logo} />,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f5f5f5',
          height: '100%',
        }
      }}>
        <Screen name="Feed" component={Feed} />
      </Navigator>  
    </NavigationContainer>
  );
};

export default Routes;
