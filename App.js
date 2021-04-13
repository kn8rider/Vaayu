import React from 'react';
import Graph from './assets/Graph';
import Register from './assets/Register';
import Login from './assets/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={Register}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Graph" component={Graph}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const Stack = createStackNavigator();
export default App;
