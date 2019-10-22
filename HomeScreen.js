import React from 'react';
import * as Animatable from 'react-native-animatable';
import store from './chatStore.js';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native';



export default function HomeScreen(props) {

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
