import React,{useState} from 'react';
import {useEffect} from 'react';
import * as Permissions from 'expo-permissions';
import * as Location from  'expo-location';
import MapView from 'react-native-map-clustering';
import {Marker} from 'react-native-maps';
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



// the Map component, self explanatory
export default function MapScreen(props) {

  //create the Marker components
  const pointsMarkers=props.points['points'].map((item,ind)=>{
        return(
          <Marker key={ind+200}
            coordinate={{ latitude: parseFloat(item['latitude']), longitude:parseFloat(item['longitude']) }} />
        )
      })


  return (
    <View style={styles.container}>
      < MapView style = {  {  flex: 1}  }
          region = {
            {
              latitude: props.screenProps.latitude,
              longitude: props.screenProps.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }

          }
          style={{ width: 400, height: 800 }}
          showsUserLocation = {  true }>
          {pointsMarkers}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
