import {React,Component} from 'react';
import {Text,View, StyleSheet,TouchableOpacity} from 'react-native';
import {CalendarPicker} from 'react-native-calendar-picker';
import db from 'config';

export default class calendar extends Component{

constructor(props){
    super(props );
    this.state({
        selectedStartDate: null
    })
   this.onDateChange = this.onDateChange.bind(this);
}

onDateChange(date){
    this.setState({
        selectedStartDate : date
    })
        
}
render(){
const{selectedStartDate} = this.state
const startDate = selectedStartDate ? selectectStartDate.toString() : "";
    return(
    
       <View style = {styles.container}>
       <CalendarPicker 
         onDateChange = {this.onDateChange}
        />
       <View>
    <Text> Selected Date : {startDate} </Text>
       </View>
      </View>
    )
}
}

 const styles = Stylesheet.create({
container:{
backgroundColor  : "white",
flex : 1,

}
 })