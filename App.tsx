import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})

