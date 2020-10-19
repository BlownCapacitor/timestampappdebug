import React,{Component}from 'react';
import {View, Text, TextInput,Modal,KeyboardAvoidingView,StyleSheet,TouchableOpacity,Alert,ScrollView} from 'react-native';
import {Input,Icon} from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import db from '../config';
import firebase from 'firebase';

export default class AlarmScreen extends React.Component(){
    render(){
        return(
          <View>
              <Text> Alarm Screen</Text>
          </View>  
        )
    }
}