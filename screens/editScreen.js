import React,{Component} from 'react';
import { View,Text, TextInput,KeyboardAvoidingView,StyleSheet,TouchableOpacity, ScrollView,
  TouchableHighlight, Alert} from 'react-native';
  import {Icon} from 'react-native-elements';

  import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'
import { FlatList } from 'react-native-gesture-handler';

export default class EditScreen extends React.Component{
  constructor(){
    super();
    this.state ={
    ItemName : firebase.auth().currentUser.Message,
    ItemDate: firebase.auth().currentUser.Date,
    ItemTime: firebase.auth().currentUser.Time,
    ItemStatus: firebase.auth().currentUser.Status,
    ItemId : '',
      userDocId: '',
      docId :''
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }



  addItem = async (ItemTime,ItemDate,ItemName)=>{
   
   
   
    var randomItemId = this.createUniqueId()
   db.collection('Alarms').add({
        
        "Message":ItemName,
        "Time":ItemTime,
        "MessageID"  : ItemId,
        "Date" : ItemDate,

    })

    await  this.getAlarms
    db.collection('Alarms').where("Status","==",ItemStatus).get()
    .then()
    .then((snapshot)=>{
      snapshot.forEach((doc)=>{
        db.collection('').doc(doc.id).update({
       Status: "pending"
      })
    })
  })

    this.setState({
        ItemName :'',
        ItemDate : '',
        ItemId: randomItemId
    })

    return Alert.alert("Item Added")


  }




getItemStatus(){
  db.collection('Alarms')
  .where('Status','==',this.state.ItemStatus)
  .onSnapshot(querySnapshot => {
    querySnapshot.forEach(doc => {
      this.setState({
        ItemStatus:doc.data().Status,
        
      })
    })
  })
}



componentDidMount(){
 this.getItemStatus()
  
}

updateItemStatus=()=>{
db.collection('Alarms').doc(this.state.docId)
  .update({
    Status : 'Complete'
  })
}


render(){

   
    return(
      <View style={{flex:1}}>
          <MyHeader title="Create Item" navigation ={this.props.navigation}/>

          <ScrollView>
            <KeyboardAvoidingView style={styles.keyBoardStyle}>
              <Input
                style ={styles.formTextInput}
                label = {'Time'}
                placeholder={"Enter Time"}
                onChangeText={(text)=>{
                    this.setState({
                        ItemTime:text
                    })
                }}
                value={this.state.ItemTime}
              />
               <Input
                style ={styles.formTextInput}
                label = {'Date'}
                placeholder={"Enter Date"}
                onChangeText={(text)=>{
                    this.setState({
                        ItemDate:text
                    })
                }}
                value={this.state.ItemDate}
              />
              <Input
                style ={styles.formTextInput}
                label = {'Name'}
                placeholder={"Enter Name"}
                onChangeText={(text)=>{
                    this.setState({
                        ItemName:text
                    })
                }}
                value={this.state.ItemName}
              />
              {this.state.showFlatList ? 
              (<FlatList
            data = {this.state.dataSoucre}
            renderItem = {this.renderItem}
            enableEmptySections = {true}
            style = {{marginTop : 10,}}
            keyExtractor = {(item,index) => index.toString()}
              />)
              :  (
                <View style = {{alignItems : 'center'}}>

             <TouchableOpacity
                style={styles.button}
                onPress={()=>{ this.addRequest(this.state.ItemName,this.state.ItemDate,this.state.ItemTime);
                }}
                >
                <Text>Create</Text>
              </TouchableOpacity>
              </View>
              )}

            </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
  }
)