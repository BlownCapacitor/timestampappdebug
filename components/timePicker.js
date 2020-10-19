import {React,Component} from 'react';
import {Text,View, StyleSheet,TouchableOpacity} from 'react-native';
import {TimePicker} from 'react-native-time-picker';
import db from 'config';


export default class SelectTime extends Component{
    constructor(){
        super();
        state = { 
            time : '10 : 00'
        }
    }
   
  onChange = time => this.setState({ time })
 
  render() {
    return (
      <div>
        <TimePicker
          onChange={this.onChange}
          value={this.state.time}
        />
      </div>
    );
  }
}
