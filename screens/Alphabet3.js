import React, { Component } from "react";
import { StyleSheet, Text, View ,TouchableOpacity} from "react-native";

export default class Alphabet3 extends Component {
  render() {
    return (
      <View style={styles.container}>
       
         <TouchableOpacity style={styles.routeCard} onPress={() =>
                       this.props.navigation.navigate("Result1")
                    }>
       <Text style={styles.routeText}>Alphabet3......!!!!</Text>
                        
       </TouchableOpacity>
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
        backgroundColor: 'green',
        
    },
    routeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginTop: 20,
        paddingLeft: 20
    },
  
});
