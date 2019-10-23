import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

// tabscreens 'container'
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
