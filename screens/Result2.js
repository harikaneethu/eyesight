import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Result2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Result2 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
   routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 50,
        backgroundColor: 'yellow',
        
    },
    routeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginTop: 20,
        paddingLeft: 20
    },
  
});
