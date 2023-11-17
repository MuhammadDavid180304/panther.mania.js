import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PageScreen from '../pages/PageScreen';
import NextScreen from '../pages/NextScreen';
import LoginScreen from '../screen/LoginScreen';
import CostumeScreen from '../pages/CostumeScreen';
import ScanId from '../screen/ScanId';

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PageScreen"
          component={PageScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NextScreen"
          component={NextScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CostumeScreen"
          component={CostumeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScanId"
          component={ScanId}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
