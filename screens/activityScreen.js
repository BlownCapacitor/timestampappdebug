import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'


export default class ActivityScreen extends React.Component{
  constructor(){
    super()
    this.state = {
     // userId  : firebase.auth().currentUser.email,
        Items : []
    }
  //this.requestRef= null
  }

  getItems =()=>{
    this.requestRef = db.collection("Alarms")
    .onSnapshot((snapshot)=>{
      var Items = snapshot.docs.map((doc) => doc.data())
      this.setState({
        Items : Items
      });
    })
  }

  componentDidMount(){
    this.getItems()
  }

  /*componentWillUnmount(){
    this.requestRef();
  }*/

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.Name}
        subtitle = {item.Time,item.Date}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        leftElement = {<Image
        style = {{height : 50, width : 50}}
        //source = {{uri :item.image_link}}
      />}
      
       /* rightElement={
            <TouchableOpacity style={styles.button}
              onPress ={()=>{
                this.props.navigation.navigate("RecieverDetails",{"details": item})
              }}
              >
              <Text style={{color:'#ffff'}}>View</Text>
            </TouchableOpacity>
          }*/
        bottomDivider
      />
    )
  }

  render(){
    return(
      <View style={{flex:1}}>
   
        <View style={{flex:1}}>
          {
            this.state.Items.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>Items</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.Items}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})


