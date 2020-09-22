import React, { Component } from 'react';
import { Text, View,StyleSheet,TextInput,TouchableHighlight,FlatList} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class restApi extends Component {

    constructor(props){
        super(props);
        this.state={
            textInputNama: '',
            textInputEmail: '',
            textInputPhone: '',
            dataSource: null,
        }
    }

    insertUser = () => {
        const {textInputNama} = this.state;
        const { textInputEmail} = this.state;
        const { textInputPhone} = this.state;

        fetch('http://192.168.1.9/restApi/insert.php',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                nama: textInputNama,
                email: textInputEmail,
                phone: textInputPhone,
            })
        }).then((response) => response.json())
          .then((response) =>{
              alert.alert(responseJson);
          }).catch((eror) => {
              console.log(eror);
          })
    }

    ViewData = () =>{
      this.props.navigation.navigate('Details')
    }

  render() {
    // let data = this.state.dataSource.map((val, key) => {
    //   return<View key={key}>
    //     <Text>{val.nama}</Text>
    //   </View>
    // })
    return (
      <View style={styles.container}>

      <View style={styles.header}>
           
      </View>
      
          <TextInput
          style={styles.textInput}
          onChangeText={textInputNama => this.setState({textInputNama: textInputNama})}
          placeholder="masukan nama"
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          >
          </TextInput>

          <TextInput
          style={styles.textInput}
          onChangeText={textInputEmail => this.setState({textInputEmail: textInputEmail})}
          placeholder="masukan email"
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          >
          </TextInput>

          <TextInput
          style={styles.textInput}
          onChangeText={textInputPhone => this.setState({textInputPhone: textInputPhone})}
          placeholder="masukan phone"
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          >
          </TextInput>

          <TouchableHighlight
          style={styles.addData}
          onPress={this.insertUser}
          >
            <Text style={{color: 'white', alignSelf:'center' }}>Tambah</Text>
          </TouchableHighlight>

          <TouchableHighlight
          style={styles.addData}
          >
            <Text style={{color: 'white', alignSelf:'center' }}>Tampilkan</Text>
          </TouchableHighlight>
          
          <View>
            
          </View>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#E91E63',
    height: 70,
  },
  textInput: {
    color:"#fff",
    padding: 15,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#ededed",
    margin: 15,
    borderRadius: 10,
    textAlign:'center',
  },
  addData: {
    color:"#fff",
    padding: 15,
    backgroundColor: "#E91E63",
    borderTopWidth: 2,
    borderTopColor: "#ededed",
    margin: 15,
    borderRadius: 10,
    textAlign:'center',
  },
  
})