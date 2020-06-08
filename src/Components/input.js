import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
const {width,height} =Dimensions.get('window')

const Input = props => {
  let _keyboardType = "default",
    secureInput = false;

  switch (props.type) {
    case "Password":
      {
        _keyboardType = "default";
        secureInput = props.secureTextEntry;
      }
      break;
    case "Number":
      {
        _keyboardType = "numeric";
      }
      break;
    case "Email":
      {
        _keyboardType = "email-address";
      }
      break;
    case "TextArea":
      {
        _keyboardType = "default";
        multiline = true;
        style = styles.textArea;
      }
      break;
    default: {
      _keyboardType = "default";
    }
  }
  return (
    <View style={[styles.inputContainer,props.inputContainer]}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor={"#AEB6BC"}
        style={props.inputStyle}
        type={props.type}
        keyboardType={_keyboardType}
        secureTextEntry={secureInput}
        onEndEditing={props.onEndEditing}
      />
      <TouchableOpacity onPress={props.changeIcon}>
        <Icon
          name={props.icon}
          color={props.iconColor}
          size={22}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    flexDirection: "row",
    alignItems: "center",
    alignSelf:'center'
  },
  input: {
    //paddingLeft: 17,
    paddingVertical:height * 0.01,
    width: "90%",
    fontSize: 16,
    color: "#000"
  },

  iconContainer: {
    width: 24,
    height: 14
  }
});

export { Input };
