import React, { Component } from "react";
import { StyleSheet, Text, View ,TouchableOpacity, Image} from "react-native";

export default class Alphabet2 extends Component {
  render() {
    return (
      <View style={styles.container}>
       
         <TouchableOpacity style={styles.routeCard} onPress={() =>
                       this.props.navigation.navigate("Alphabet3")
                    }>
       <Text style={styles.routeText}>Numbers !!!!</Text>
                        
       </TouchableOpacity>
       <View>
       <Image
       source={require('../assets/numbers_eyeCheckup.jpg')}

       />
       </View>
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
        backgroundColor: 'purple',
        
    },
    routeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginTop: 20,
        paddingLeft: 20
    },
    numbersImage:{
      
    }
  
});
