import React from "react";
import { View , Text , StyleSheet } from "react-native";
import WeatherScreen from "./src/screens/WeatherScreen";






export default function App(){
    return <WeatherScreen />
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})


