import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
    <View style={{flex: 1,
      flexDirection: "column-reverse",
      justifyContent: "space-between",
      alignItems: "stretch",
      marginTop: 50
      }}>
      <View style={{flex: 1, backgroundColor: "#00BC40"}}/>
      <View style={{flex: 1, backgroundColor: "#FF9F4A"}} />
      <View style={{flex: 1, backgroundColor: "#EFF54D"}} />
      <View style={{flex: 1, backgroundColor: "#253898"}} />
      <View style={{flex: 1, backgroundColor: "#DB0B5F"}} />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
