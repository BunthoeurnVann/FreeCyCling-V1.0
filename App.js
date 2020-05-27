import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { Drawer } from 'react-native-paper';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home'
import BottomNavigation from './src/screens/BottonNavigation';
import Profile from './src/screens/Profile';
import Setting from './src/screens/Setting';
import EachChat from './src/screens/EachChat';
import Help from './src/screens/Help';
import Proceed from './src/screens/Proceed';
const Stack = createStackNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();
export default class App extends Component{
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name= "Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{headerShown: false}}/>
          <Stack.Screen name="Setting" component={Setting} options={{headerShown: false}}/>
          <Stack.Screen name="EachChat" component={EachChat} options={{headerShown: false}}/>
          <Stack.Screen name="Help" component={Help} options={{headerShown: false}}/>
          <Stack.Screen name="Proceed" component={Proceed} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}