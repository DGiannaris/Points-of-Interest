import React,{useState} from 'react';
import {useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Alert,
  View,
  List,
  ListItem,
} from 'react-native';


// the List component, self explanatory
export default function ListScreen(props) {

//get distance from you to a point
  const distance=(lat1, lon1, lat2, lon2, unit)=>{
      let radlat1 = Math.PI * lat1/180;
      let radlat2 = Math.PI * lat2/180;
      let theta = lon1-lon2;
      let radtheta = Math.PI * theta/180;
      let  dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      dist = Math.acos(dist)
      dist = dist * 180/Math.PI
      dist = dist * 60 * 1.1515
      if (unit=="K") { dist = dist * 1.609344 }
      if (unit=="M") { dist = dist * 0.8684 }
      return (Math.round(dist * 100) / 100).toString();
  }


  // simultaneous sort of 2 arrays distances and addresses
  const sorter=()=>{
    let dist=[];

    props.points['points'].map((item,ind)=>{
      dist.push({'dist':distance(
        props.screenProps.latitude,
        props.screenProps.longitude,
        item['latitude'],
        item['longitude'],
        'K'),
        'addr':item['address']
      })
    })

    return dist.sort((a, b)=> {return a.dist-b.dist});
  }


const listitems = sorter().map((item,ind)=>{
  return (
    <View style={styles.itemline} key={400+ind}>
    <View style={styles.littleBox} key={500+ind}></View>
    <Text style={styles.item} key={200+ind} >{item['addr']}</Text>
    <Text style={styles.dist} key={300+ind}>
      {item['dist'] !='NaN'?`Distance (km): ${item['dist']} `:'Destroyed Data'}
    </Text>
    </View>
  )
});


  return (
    <ScrollView style={styles.container}>
      {listitems}
    </ScrollView>
  );
}

const styles = StyleSheet.create({


  container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      marginLeft:10,
      padding: 2,
      fontSize: 16,
      height: 44,
      fontWeight:'400'
    },
    dist:{
      marginLeft:10,
      padding: 2,
      fontSize: 16,
      height: 44,
      fontWeight:'400',
      color:'#006064'
    },
    itemline:{
      backgroundColor:'#FAFAFA',
      marginLeft:5,
      marginRight:7,
      marginBottom:13,
      shadowColor: '#202020',
      shadowOffset: {width: 0, height: 0},
      shadowRadius: 5,
      elevation:4,
    },
    littleBox:{
      height:88,
      width:5,
      backgroundColor:'#0097A7',
      position: 'absolute',
      left:0,
      top:0,
    }
});
