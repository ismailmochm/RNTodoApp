import React from 'react';
import {
  View, 
  Text,
  ListView,
  StyleSheet,  
  StatusBar,
  TouchableHighlight,
  Modal,
  CheckBox,
} from 'react-native';
import {
  Button, 
  Content,
  ListItem, 
  Container, 
  Header,
  Item,
  Input, 
  Icon,
  Right,
} from 'native-base';
import * as firebase from 'firebase';


  const firebaseConfig = {
    apiKey: "AIzaSyAh9iKNJ1aCXeOUcRLCjRKqqjfDrO2y49U",
    authDomain: "crud-11186.firebaseapp.com",
    databaseURL: "https://crud-11186.firebaseio.com",
    projectId: "crud-11186",
    storageBucket: "crud-11186.appspot.com",
    messagingSenderId: "336907641241",
  }
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }
  
 var data = []

export default class Data extends React.Component {

  constructor(props){
    super(props);

      this.ds = new ListView.DataSource({ rowHasChanged: (r1,r2) => r1 !== r2})
      
      this.state = {
        ListViewData: data,
        newContact: "",
        modalVisible: false,
        ceck: true,
      }
    }

    componentDidMount(){

      var that = this
        firebase.database().ref('/contacts').on('child_added', function(data){
        var newData = [...that.state.ListViewData]
        newData.push(data)
        that.setState({ListViewData: newData})
      })

    }

    changeBox(){
      this.setState({
        ceck:!this.state.ceck
      })
    }

    addRow(data){
      var key = firebase.database()
      .ref('/contacts')
      .push().key
      firebase.database()
      .ref('/contacts')
      .child(key)
      .set({nama: data})
    }

   async deleteRow(secId, rowId, rowMap, data){
     
      await firebase.database().ref('contacts/' + data.key).set(null)

      rowMap['${secId}${rowid}'].props.closeRow();
      var newData = [...this.state.ListViewData];
      newData.splice(rowId,1)
      this.setState({ ListViewData: newData})
    }

    showRow(){

    } 

    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

  render() {
    return (

      <Container style={styles.container}>

        <View style={styles.header}>
           
        </View>

        <Header style={{backgroundColor: 'white', marginTop: 10}}>
          <Content>

            <Item>
              <Input
                onChangeText={(newContact) => this.setState({newContact})}
                value={this.state.newContact}
                placeholder="masukan nama"
                />
               <Button 
                  primary
                  onPress={() => this.addRow(this.state.newContact)}
                  style={{right: 10,}}
                  >
               <Icon name="add" />
              </Button>

              <Button 
                  danger
                  style={{width: 50,}}
                  onPress={() => this.deleteRow(secId, rowId, rowMap, data)}
                  
              >
              <Icon name="trash" />
              </Button>
            </Item>

          </Content>
        </Header>

        
          <Text style={{color:'#A9A9A9',}}>Tap nama untuk mengedit</Text>
       

        <Content>
        <ListView
            dataSource = {this.ds.cloneWithRows(this.state.ListViewData)}
            renderRow = {data =>
              <ListItem>
                <CheckBox
                   value={this.state.ceck} onChange={() => this.changeBox()}
                  />
                <TouchableHighlight onPress={() => {
                     this.setModalVisible(true);
                }}>
                  <Text style={{left: 10,}}>{data.val().nama}</Text>
                </TouchableHighlight>
            </ListItem>
            } 
            
            />

            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              style={{width: 80,}}
              onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text style={{alignSelf:'center'}}>Hello World!</Text>

              <Item style={{margin: 30, left: 10,}}>
               <Input
                placeholder="masukan nama"
                />
              </Item>

              <View style={{flex: 1, flexDirection: 'row', top:10,left: 50,}}>
              <Button 
                full
                style={{left: 20,width: 100, alignSelf: 'center'}}
                rounded
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                >
                    <Text style= {{color: 'white'}}>Ok</Text>
             </Button>

              <Button 
              danger
              style={{left: 40,width: 100,alignSelf:'center'}}
              full
              rounded
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
              >
                <Text style= {{color: 'white'}}>Cancel</Text>
              </Button>
              </View>

            </View>
          </View>
        </Modal>
  
        </Content>
      </Container>
    
    );
  }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#00008B',
    height: 70,
  },
  buttonOk: {

  }
})