import React, { Component } from 'react';
import { Text, View,StyleSheet,FlatList,ActivityIndicator,Image} from 'react-native';
import { Content, Form, Item, Input, Label, Button, Container,Icon } from 'native-base';
import * as firebase from 'firebase';


  const Config = {
    apiKey: "AIzaSyAh9iKNJ1aCXeOUcRLCjRKqqjfDrO2y49U",
    authDomain: "crud-11186.firebaseapp.com",
    databaseURL: "https://crud-11186.firebaseio.com",
    projectId: "crud-11186",
    storageBucket: "crud-11186.appspot.com",
    messagingSenderId: "336907641241",
  }
  

  if (!firebase.app.length) {
    firebase.initializeApp(Config);
}

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      email: '',
      password: ''
    }
  }

  signIn(email,password){
    
  }

  signUp(email,password){
    try{
      firebase.auth().createUserWithEmailAndPassword(email,password)
    }
    catch (error)
    {
      consol.log(error)
    }
  }

  render(){

    return(

        <Container style={styles.container}>
          <Image
          style={{width: 150, height: 150, alignSelf:'center'}}
          source={require('../img/reacttiga.png')}
          />
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input 
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(email) => this.setState({email})}
              />
            </Item>
            <Item 
            floatingLabel>
              <Label>Password</Label>
              <Input 
              autoCorrect={false}
              secureTextEntry={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({password})}
              />
            </Item>
          </Form>

        <Button 
        full
        style={{marginTop: 20,}}
        rounded
        onPress={()=> this.signIn(this.state.email, this.state.password)}
        >
            <Text style= {{color: 'white'}}>Sign in</Text>
        </Button>

          <Button 
          style={{marginTop: 20,}}
          full
          rounded
          onPress={()=> this.signUp(this.state.email, this.state.password)}
          >
            <Text style= {{color: 'white'}}>Sign Up</Text>
          </Button>
        </Container>
          
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  }
})
