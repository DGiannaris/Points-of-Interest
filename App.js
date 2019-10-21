import React,{useState} from 'react';
import {useEffect} from 'react';
import { createAppContainer,addNavigationHelpers  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import List_MapScreen from './List_MapScreen.js';
import * as Animatable from 'react-native-animatable';
import MapScreen from './MapScreen.js';
import ListScreen from './ListScreen.js';
import store from './chatStore.js';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import * as Permissions from 'expo-permissions';
import * as Location from  'expo-location';
import {
  AppRegistry,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

//no warning spam please
console.disableYellowBox = true

//HomeScreen, didnt use different js file cause its a splash screen anyway..noone is gonna ever touch it again
 function HomeScreen(props) {


     const [points,setPoints]=useState(store.getState());


  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <Text style={styles.tabBarInfoText}>GO</Text>
        <Animatable.Text animation="rubberBand" easing="ease-in-out" iterationCount="infinite" style={styles.tabBarArrow}>▼</Animatable.Text>
        <TouchableHighlight style={styles.touchableHigh} onPress={() => props.navigation.navigate('List_Map')}>
          <View>
            <Image style={styles.welcomeImage} source={require('./assets/demap.png')}/>
          </View>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
}




let ListContainer = connect(state => ({ points: state }))(ListScreen);
let MapContainer = connect(state => ({ points: state }))(MapScreen);

//routes/stacks..navigation in general (<a> is so much better)
const ListMapStack1 = createStackNavigator({
  Map:{
     screen:MapContainer,
     navigationOptions: () => ({
          header:null,
        }),
  },
  List:{
     screen:ListContainer,
     navigationOptions: () => ({
          header:null,
        }),
  },

},{
    initialRouteName: 'Map',
  }
);

const ListMapStack2 = createStackNavigator({
  Map:{
     screen:MapContainer,
     navigationOptions: () => ({
          header:null,
        }),
  },
  List:{
     screen:ListContainer,
     navigationOptions: () => ({
          header:null,
        }),
  },

},{
    initialRouteName: 'List',
  }
);

//stack navigator and appcontainer for the App component
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
    screen:createBottomTabNavigator({
      Map:ListMapStack1,
      List:ListMapStack2,
    }),
    navigationOptions: () => ({
         title: 'List/Map',
         headerStyle:{ backgroundColor:'#80DEEA'},
         headerTitleStyle:{ color: '#E0F7FA'},
         headerTintColor:'#E0F7FA',

       }),
  },});

const AppContainer = createAppContainer(RootStack);


export default function App() {
  const [userLoc,setUserLoc]=useState({})

  useEffect(()=>{

  this._getLocationAsync();
  store.dispatch({type: "LOGIN"});
  });

  _getLocationAsync = async () => {
    let {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {setUserLoc( 'Permission to access location was denied');
  }

  let location = await Location.getCurrentPositionAsync({});
  setUserLoc( location.coords );
  };


  return (
    <Provider store={store}>
      <AppContainer screenProps={userLoc} />
    </Provider>
  );
}
//----------------------------------------------------------
AppRegistry.registerComponent("NCAPRNRedux", () => App);


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
