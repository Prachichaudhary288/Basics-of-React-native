import React from "react";
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  myButtonPressed(){             //creating method for alert separately
    Alert.alert("Please don't");
  }
  render() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={this.myButtonPressed}> //TouchableHighlight //TouchableNativeFeedback //TouchableWithoutFeedback
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
  }
}

//TouchableOpacity:  A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased.
//TouchableHighlight:  darkening or tinting the view.
//TouchableNativeFeedback: drawable to display touch feedback.



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 12,
    paddingHorizontal: 40,
    color: "#FFFFFF",
    borderRadius: 10
  }
});
