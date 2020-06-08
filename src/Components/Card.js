import React from "react";
import { View, StyleSheet, Platform } from "react-native";

const Card = props => {
  return <View style={styles.ContainerStyle}>{props.children}</View>;
};
const styles = StyleSheet.create({
  ContainerStyle: {
    backgroundColor: "#fff",
    flexWrap: "wrap",
    width: "95%",
    borderRadius:10,
   
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOpacity: 0.16,
        shadowOffset: { width: 0, height: 2 }
      },
      android: {
        elevation: 1
      }
    }),
    position: "relative",
   // justifyContent: "center"
  }
});
export { Card };
