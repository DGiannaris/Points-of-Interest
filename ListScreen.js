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


    dist.sort((a, b)=> {
      return a.dist-b.dist});


  //  sorted.sort((a, b)=> b-a);
    console.log(dist)
    return dist;
  }

//<Text style={styles.item} key={ind} >{item['address']}</Text>)
//<Text>distance(props.screenProps.latitude,props.screenProps.longitude,item['latitude'],item.['longitude'],'K')</Text>
const listitems = sorter().map((item,ind)=>{
  return (
    <View style={ind % 2===1 ?styles.itemline:null}>
    <Text style={styles.item} key={ind} >{item['addr']}</Text>
    <Text style={styles.dist} key={ind}>
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
      padding: 2,
      fontSize: 16,
      height: 44,
      fontWeight:'400'
    },
    dist:{
      padding: 2,
      fontSize: 16,
      height: 44,
      fontWeight:'400',
      color:'#006064'
    },
    itemline:{
      backgroundColor:'#B2EBF2'
    }
});
