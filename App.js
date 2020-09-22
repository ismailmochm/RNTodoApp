import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Home from './app/components/Home'
import Data from './app/components/Data'
import About from './app/components/About'
import { 
  createStackNavigator, 
  createAppContainer, 
  createSwitchNavigator,
} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import Icon from "react-native-vector-icons/Ionicons";


export class App extends React.Component {

  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff"/>
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const AppStack = createBottomTabNavigator({
  Home: { screen: Home,
  navigationOptions: {
    tabBarLabel: 'Home',
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-home" color={tintColor} size={24}/>
    )
  }},
  Data: {screen:Data,
    navigationOptions: {
      tabBarLabel: 'Data',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-folder" color={tintColor} size={24}/>
      )
    }}, 
  About: {screen:About,
    navigationOptions: {
      tabBarLabel: 'About',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-person" color={tintColor} size={24}/>
      )
    }},
},
{
tabBarOptions: {
 activeTintColor: 'blue',
 inactiveTintColor: 'grey'
}
})

export default createAppContainer(createSwitchNavigator(
  {
    App: AppStack,
  },
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})
