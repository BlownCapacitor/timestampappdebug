import React,{Component} from 'react';
import {StyleSheet,View} from 'react-native';
import WelcomeScreen from './screens/welcomeScreen';

import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {AppTabNavigator} from './components/AppTabNavigator';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default function App() { 
    
    return(
  
    <AppContainer/>
    )
}

const switchNavigator = createSwitchNavigator({
    WelcomeScreen : {screens:WelcomeScreen},
    BottomTab : {screens : AppTabNavigator}
})
const AppContainer = createAppContainer(switchNavigator);