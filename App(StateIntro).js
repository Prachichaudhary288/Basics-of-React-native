import React from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {   //constructor is a method used to initialize an object's state in a class
    super(props);
    this.state = {
      text: ""
    };
  }
  
  render() {
    return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholderTextColor="#383CC1"
      placeholder="Enter value here..."
      onChangeText={(text) => {this.setState({text});
    }}
      />
      <Text style={{
        marginTop: 60,
        fontSize: 25,
      }}
      >{this.state.text
      .split(' ')
      .map(text => text && "👽")
      .join(' ')}
      </Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  input: {
    marginTop: 40,
    height: 50,
    width: 200,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    borderColor: "#0D0D0D"
  }
});
