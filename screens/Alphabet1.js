import React, { Component } from "react";
import { StyleSheet, Text, View ,TouchableOpacity, Image} from "react-native";

export default class Alphabet1 extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.routeText}> Alphabets !!!!</Text>

     
       <View >
      <Image
      source = {require('../assets/alphabets_eyeCheckup.jpg')}
       style={styles.alphabetsImage}
      />
     
      </View>
      <TouchableOpacity style={styles.routeCard} onPress={() =>
                       this.props.navigation.navigate("Alphabet2")
                    }>   
      <Text style={styles.nextText}> Next !!!!</Text>
   
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
        flex: 2,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 5,
        marginBottom : 10,
        borderRadius: 300,
        backgroundColor : 'yellow',
        
    },
    routeText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "purple",
        marginTop: 20 ,
        paddingLeft: 20
    },
    alphabetsImage:{
      flex : 1 , 
      justifyContent : "center",
      alignItems:"center",
      marginBottom : 50,
    
    },
     nextText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "purple",
        marginTop: 20 ,
        paddingLeft: 10
    },
  
});
