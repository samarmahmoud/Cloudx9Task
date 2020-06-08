import React from 'react';
import {View, Image,StyleSheet} from 'react-native';

const RoundImage=(props)=>(
    <View style={style.ContainerImageStyle} >
     <Image source={props.source} style={style.RoundImageStyle}></Image>
    </View>

);

export {RoundImage};

const style=StyleSheet.create({
    ContainerImageStyle:{
        width:56,
        height:56,
        borderRadius:56/2,
        marginLeft:10,
        backgroundColor:'#FFF39D',
        alignItems:'center',
        justifyContent:'center'
        
     },
    RoundImageStyle:{
       width:32,
       height:32,
       borderRadius:32/2,
       
    },

})