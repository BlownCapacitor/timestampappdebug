import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ActivityScreen from '../screens/activityScreen';
import ListScreen from '../screens/listScreen'

export const AppTabNavigator = createBottomTabNavigator({
  
  ActivityScreen : {
    screen: ActivityScreen,
    navigationOptions :{
      tabBarLabel : "Activity",
    }
  },
   CalenderScreen: {
    screen: ListScreen,
    navigationOptions :{
      tabBarLabel : "Calender",
    }
  },


});