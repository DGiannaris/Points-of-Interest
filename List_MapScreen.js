import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



// made this component as fallback, which ill use later in development
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
