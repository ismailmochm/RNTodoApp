import React, { Component } from 'react';
import { Text, View,StyleSheet,} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Note extends Component {

  render() {
    return (
      <View key={this.props.keyval}style={styles.note}>
        <TouchableHighlight onPress={this.props.deleteRow} style={styles.deleteMethod}>
                <Text style={styles.deleteTextMethod}>D</Text>
        </TouchableHighlight>

     </View>
    );
  }
}

const styles = StyleSheet.create({
 note: {
     borderBottomWidth: 2,
     borderBottomColor: '#ededed',
     marginTop: 10,
     height: 50,
 },
 notText: {
     paddingLeft: 20,
     borderLeftWidth: 10,
     borderLeftColor: '#E91E63'
 },
 deleteMethod: {
    alignSelf: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    bottom: 38,
    left: 140,
 },
 deleteTextMethod: {
     color: 'white'
 }
})