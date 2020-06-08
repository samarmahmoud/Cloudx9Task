import React from "react";
import { StyleSheet, TextInput, Image, View } from "react-native";

const EmailInput = props => {
  return (
    <View>
      <View style={styles.SectionStyle}>
        <Image source={props.mailType} style={styles.ImageStyle} />
        <TextInput
          value={props.value}
          onChangeText={props.onChangeText}
          style={styles.textColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    width: 284,
    height: 42.5,
    borderBottomWidth: 2,
    margin: 10,
    borderBottomColor: "#66839D"
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 19,
    width: 30,
    resizeMode: "stretch",
    alignItems: "center"
  },
  textColor: {
    color: "#fff",
    fontSize: 13,
    marginLeft: 19
  }
});

export { EmailInput };
