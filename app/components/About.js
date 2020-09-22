import React, { Component } from 'react';
import { Text, View,StyleSheet,} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class About extends Component {

  render() {
    return (
      <View style={styles.container}>

      <View style={styles.header}>
           
      </View>

      <View style={styles.label}>
        <Icon name="ios-heart" size={24} />
        <Icon name="ios-heart" size={24}/>
        <Icon name="ios-heart" size={24}/>
        </View>
        <View style={{ flex: 1, justifyContent: "center",alignItems: "center",marginBottom: 240, }}>
        <Text style={{marginLeft: 5,}}>ismail moch malik ridwan</Text>
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
    backgroundColor: '#00008B',
    height: 70,
  },
  label: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    flexDirection: 'row',
    marginTop: 240,
  }
})