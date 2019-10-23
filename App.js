import React,{useState} from 'react';
import {useEffect} from 'react';
import { createAppContainer,addNavigationHelpers  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import List_MapScreen from './List_MapScreen.js';
import HomeScreen from './HomeScreen.js';
import MapScreen from './MapScreen.js';
import ListScreen from './ListScreen.js';
import store from './chatStore.js';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import * as Permissions from 'expo-permissions';
import * as Location from  'expo-location';
import {fetchPoints} from './setThunk.js';
import {
  Alert,
  AppRegistry,
} from 'react-native';


//no warning spam please
console.disableYellowBox = true;

//Redux connect tab screens
let ListContainer = connect(state => ({ points: state }))(ListScreen);
let MapContainer = connect(state => ({ points: state }))(MapScreen);

//routes/stacks..navigation in general (<a> is so much better)
const ListMapStack1 = createStackNavigator({
  Map: {
    screen: MapContainer,
    navigationOptions: () => ({
      header: null,
    }),
  },
  List: {
    screen: ListContainer,
    navigationOptions: () => ({
      header: null,
    }),
  },

}, {
  initialRouteName: 'Map',
});

const ListMapStack2 = createStackNavigator({
  Map: {
    screen: MapContainer,
    navigationOptions: () => ({
      header: null,
    }),
  },
  List: {
    screen: ListContainer,
    navigationOptions: () => ({
      header: null,
    }),
  },

}, {
  initialRouteName: 'List',
});

//stack navigator and appcontainer for the App component
const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: 'Welcome to POIS',
      headerStyle: {
        backgroundColor: '#80DEEA'
      },
      headerTitleStyle: {
        color: '#E0F7FA'
      },
    }),
  },
  List_Map: {
    screen: createBottomTabNavigator({
      List: ListMapStack2,
      Map: ListMapStack1,
    }, {
      initialRouteName: 'List',
      tabBarOptions: {
        activeTintColor: '#0097A7',
        inactiveTintColor: '#E0F7FA',
        labelStyle: {
          fontSize: 17,
          fontWeight: '500',
          marginBottom: 10,
        },
        style: {
          backgroundColor: '#80DEEA',
        },
      }
    }),
    navigationOptions: () => ({
      title: 'List/Map',
      headerStyle: {
        backgroundColor: '#80DEEA'
      },
      headerTitleStyle: {
        color: '#E0F7FA'
      },
      headerTintColor: '#E0F7FA',

    }),
  },
});

const AppContainer = createAppContainer(RootStack);

export default function App() {

  const [userLoc,setUserLoc]=useState({})

  useEffect(() => {
    //when you open the app,ill get your location,if you allow it
    this._getLocationAsync();

  }, []);

  useEffect(() => {
    //after i get the location i fetch the points from the api using middleware,store
    store.dispatch(fetchPoints());

  }, [userLoc])


  _getLocationAsync = async () => {
    let {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setUserLoc('false');
      Alert.alert('Some services may not work correctly')
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
