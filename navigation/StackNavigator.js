import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import Alphabet1 from "../screens/Alphabet1"
import TabNavigator from "./TabNavigator"
import Alphabet2 from "../screens/Alphabet2"
import Alphabet3 from "../screens/Alphabet3"
import Result1 from "../screens/Result1"
import Result2 from "../screens/Result2"
import Result3 from "../screens/Result3"
import Thankyou from "../screens/Thankyou"


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Alphabet1" component={Alphabet1} />
      <Stack.Screen name="Alphabet2" component={Alphabet2} />
      <Stack.Screen name="Alphabet3" component={Alphabet3} />
      <Stack.Screen name = "Result1" component = {Result1} />
      <Stack.Screen name = "Result2" component = {Result2} />
      <Stack.Screen name = "Result3" component = {Result3} />
       <Stack.Screen name = "Thankyou" component = {Thankyou}/>
    </Stack.Navigator>
  );
};
  export default StackNavigator;
