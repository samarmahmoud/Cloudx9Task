import { StyleSheet ,Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window');
import {Colors} from '../../Global/colors'
const style = StyleSheet.create({
    HeadlinTex:{
        color:Colors.GrayColor,
        fontSize:22,
        fontWeight:'500'
    },
    MainContainer:{
        width:'95%',
        alignSelf:'center',
        marginTop:'6%'
    },
    entyRow:{
        backgroundColor:'#FCF4BD',
        borderRadius:18,
        padding:7,
        flexDirection:'row',
        flexWrap:'wrap',
        borderWidth:1,
        borderColor:'#B4AD78',
        margin:5,
        
    },
    iconStyle:{
        width:22,
        height:22
    },
    Text:{
        marginLeft:5,
        color:Colors.GrayColor,
        fontSize:17
    },
    LitsStyle:{
        flexDirection : "row", 
        flexWrap : "wrap"
    },
    ServiceNameStyle:{
        marginLeft:'5%',
        color:'#000'
    },
    discriptionStyle:{
        marginLeft:'5%',
        color:Colors.GrayColor
    },
    BookNowContainer:{
        backgroundColor:'#EEEEED',
        paddingVertical:8,
        marginTop:'5%'
    },
    LocationContainer:{
        marginTop:'15%'
    },
    input:{
        borderRadius: 30,
        width:'100%',
        height:55,
        borderWidth: 2,
        borderColor: "#EEEEED",
        color: Colors.DarkColor,
        backgroundColor: Colors.WhiteColor,
        fontSize: 18,
        padding:10
      },
      passwordContainer: {
        marginTop: height* .01
      },
})
export {style}