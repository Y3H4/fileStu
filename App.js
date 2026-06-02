import React from "react";
import { View , Text , StyleSheet } from "react-native";






export default function App(){
    return (<View style={styles.container}>
      <Text style={styles.textStyle}>Dummy888 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})


