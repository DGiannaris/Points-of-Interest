import React,{useState} from 'react';
import {useEffect} from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import * as Permissions from 'expo-permissions';
import * as Location from  'expo-location';
import MapView from 'react-native-maps';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Alert,
  FlatList,
} from 'react-native';




export default function ListScreen(props) {
//Alert.alert(props.screenProps.points.addres.toString())
console.log(props.screenProps.points.points)
//   store.dispatch({
//       type: "LOGIN",
//     });
//
//     store.subscribe(()=>{
//   this.setState(store.getState());
// }

  return (
    <ScrollView style={styles.container}>

       {props.screenProps.points.points.map((item,ind )=> <Text key={ind} >{item['address']}</Text>)}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
});
