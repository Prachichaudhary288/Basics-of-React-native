import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import NameText from "./src/components/NameText";

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <NameText name="Hello World"/>
        <Image source={{
          uri: "Image_Address"
        }}
        style={{width: 240, height: 280}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },

});