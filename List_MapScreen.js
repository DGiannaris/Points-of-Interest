import React,{useState} from 'react';
import {useEffect} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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
} from 'react-native';




export default function List_MapScreen() {

const [userLoc,setUserLoc]=useState(null)

useEffect(()=>{

this._getLocationAsync();

},[]);

_getLocationAsync = async () => {
let {status} = await Permissions.askAsync(Permissions.LOCATION);

if (status !== 'granted') {setUserLoc( 'Permission to access location was denied');
}

let location = await Location.getCurrentPositionAsync({});
setUserLoc( JSON.stringify(location) );
};

  return (
    <View style={styles.container}>
    < MapView style = {  {  flex: 1}  }
        region = {
          {
            latitude: 37.973563,
            longitude: 23.726044,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }
        }
        showsUserLocation = {  true }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
