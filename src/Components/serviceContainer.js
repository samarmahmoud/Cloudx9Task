import React from 'react';
import { View, Image,Text,TouchableOpacity ,StyleSheet} from 'react-native';
import {RoundImage} from './ImageRound'
import {Colors} from '../Global/colors'
import Icon from 'react-native-vector-icons/FontAwesome'

const ServicesContainer = (props) => (
   
        <TouchableOpacity
        style={style.container}
            onPress={props.onPress}>
            <View style={style.rowContainer}>
                <RoundImage source={props.servicesIcon}/>
                <View>
                <Text style={style.ServiceNameStyle}>{props.ServiceName}</Text>
                <Text style={style.discriptionStyle}>{props.discription}</Text>
                </View>
            </View>

            <View style={{ marginRight: 30 }}>
                <Icon
                    name={'angle-right'}
                    color={Colors.AppColor}
                    size={25}
                />
            </View>
        </TouchableOpacity>
   

);

export { ServicesContainer };

const style = StyleSheet.create({
    RoundImageStyle: {
        width: 56,
        height: 56,
        borderRadius: 23,
        marginLeft: 10
    },
    container:{
        flexDirection: 'row',
        backgroundColor:'#fff',
        paddingVertical:20,
        justifyContent:'space-between',
        alignItems:'center'
    },
    rowContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    ServiceNameStyle:{
        marginLeft:'5%',
        color:'#000'
    },
    discriptionStyle:{
        marginLeft:'5%',
        color:Colors.GrayColor
    }

})