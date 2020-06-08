import React from "react";
import { Text, TouchableOpacity, StyleSheet ,Image} from "react-native";
import {Colors} from '../Global/colors'

const Button = props => {
  return (
    <TouchableOpacity
     disabled={props.disabled}
     onPress={props.onPress} style={[styles.buttonStyle,props.button]}>
      {/* <Image source={props.source} style={props.ImageStyle} ></Image> */}
      <Text style={[styles.buttonTextStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor: Colors.AppColor,
    borderRadius: 5,
    borderColor:Colors.AppColor,
    borderWidth:1,
    width: '90%',
    paddingVertical:'2%',
    margin:10
   
  },
  buttonTextStyle: {
    textAlign:'center',
    alignSelf:'center',
    color: Colors.WhiteColor,
    fontSize: 16,
    padding:5,
   
  }
});
export { Button };
