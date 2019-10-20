import React,{useState} from 'react';
import {useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';


// the List component, self explanatory
export default function ListScreen(props) {

  return (
    <ScrollView style={styles.container}>
      {props.points['points'].map((item,ind )=> <Text key={ind} >{item['address']}</Text>)}
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
