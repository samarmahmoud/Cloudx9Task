import {StyleSheet,Dimensions} from 'react-native';
const {width,height} =Dimensions.get('window')
import {Colors} from '../../Global/colors'

const styles= StyleSheet.create({
    container:{
         flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.AppColor

    },
    
    nameText:{
        color:Colors.WhiteColor,
        fontSize:25,
        marginTop:29,
    }

})
export {styles}