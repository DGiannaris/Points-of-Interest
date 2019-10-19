import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import List_MapScreen from './List_MapScreen.js';
import * as Animatable from 'react-native-animatable';

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

console.disableYellowBox = true


 function HomeScreen(props) {

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <Text style={styles.tabBarInfoText}>GO</Text>
            <Animatable.Text animation="rubberBand" easing="ease-in-out" iterationCount="infinite" style={styles.tabBarArrow}>▼</Animatable.Text>
        <TouchableHighlight style={styles.touchableHigh} onPress={() => props.navigation.navigate('List_Map')}>
          <View><Image style={styles.welcomeImage} source={require('./assets/demap.png')}/></View>
        </TouchableHighlight>
      </ScrollView>


    </View>
  );
}




const RootStack = createStackNavigator(
  { Home:{
     screen:HomeScreen,
     navigationOptions: () => ({
          title: 'Welcome to POIS',
          headerStyle:{ backgroundColor:'#80DEEA'},
          headerTitleStyle:{ color: '#E0F7FA'},
        }),
  },
  List_Map:{
    screen:List_MapScreen,
    navigationOptions: () => ({
         title: 'List/Map',
         headerStyle:{ backgroundColor:'#80DEEA'},
         headerTitleStyle:{ color: '#E0F7FA'},
         headerTintColor:'#E0F7FA',
       }),
  },});

const AppContainer = createAppContainer(RootStack);



export default function App() {

  return (
    <AppContainer style={{backgroundColor:'red',}}/>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ACC1',
  },
  touchableHigh:{
      height: 150,
      width:150,
      marginTop:96,
      marginLeft: 105,
      borderRadius:100,
      backgroundColor:'#80DEEA',
      shadowColor: '#202020',
      shadowOffset: {width: 0, height: 0},
      shadowRadius: 5,
      elevation:2,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop:35,
    marginLeft: 26,

  },
  tabBarInfoText: {
    fontSize: 20,
    fontWeight:'400',
    color: '#80DEEA',
    textAlign: 'center',
  },
  tabBarArrow: {
    fontSize: 40,
    fontWeight:'400',
    color: '#80DEEA',
    textAlign: 'center',
  },
});
