import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LotsOfGreetings from '/Users/kds/projectName/LotsOfGreetings'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>aaaa up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <LotsOfGreetings></LotsOfGreetings>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
