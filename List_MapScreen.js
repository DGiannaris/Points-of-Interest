import React,{useState} from 'react';
import {useEffect} from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import * as Permissions from 'expo-permissions';
import * as Location from  'expo-location';
import MapView from 'react-native-maps';
import MapScreen from './MapScreen.js';
import ListScreen from './ListScreen.js';
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




export default function List_MapScreen(props) {




  return (
    <View style={styles.container}>
      <Text>Tabs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
