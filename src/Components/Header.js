import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image,Dimensions} from 'react-native';
const {width,height} =Dimensions.get('window')

const Header = props => (
  <View style={[styles.NavContainer, props.containerStyle]}>
    <TouchableOpacity
      style={styles.NavIconContainer}
      onPress={props.onPressLeft}>
      {props.BackButton && <Image source={require('../Assets/Images/back.png')} style={{width:22,height:22}} />}
    </TouchableOpacity>
     <Text style={[styles.Title, props.titleStyle]}>{props.Title}</Text> 
  </View>
);

const styles = StyleSheet.create({
  NavContainer: {
    width: '100%',
    height: height*0.1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#29A8B8',
  },
  Title: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    alignSelf:'center',
    marginTop:height*.05,
    marginLeft:width*0.01
  },
  NavIconContainer: {
    width: 24,
    height: 24,
    marginLeft: width*0.05,
    marginTop:height*.05
  },
});
export {Header};
