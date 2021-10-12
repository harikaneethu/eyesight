import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image, 
  TouchableOpacity
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Alphabet1screen from "./Alphabet1"


import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};



export default class LeftEye extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

 

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/eye.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Eye Check Up App..!!</Text>
            </View>
          </View>
          
               <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Alphabet1")
                    }>
                        <Text style={styles.routeText}>Round1 for Lefteye </Text>

                        <Text style={styles.caption}>LETS START THE EYE CHECK UP</Text>
                      
                        
                    </TouchableOpacity>
          
          
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: "teal"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  
   routeCard: {
        flex: 0.5,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginTop: 20,
        paddingLeft: 30
    },
    caption: {
      marginTop : 60,
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    
});
