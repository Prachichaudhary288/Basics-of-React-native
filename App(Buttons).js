import React from "react";
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {

  myButtonPressed(){             //creating method for alert separately
    Alert.alert("Please don't");
  }
  render() {
  return (
    <View style={styles.container}>
      <Button onPress= {()=> {   //empty callback function
      }}
      color="#BB2CD9" //change the background color of button
      title="Hit Me"
      />
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
