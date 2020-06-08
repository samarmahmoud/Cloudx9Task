import { StyleSheet ,Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window');
import {Colors} from '../../Global/colors'

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center'
     },
     headerContainer:{
        alignItems:'center',
        alignSelf:'center',
        marginTop:'5%'
     },
     headerText:{
         fontSize:18,
         color:Colors.AppColor
        },
     inputContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: 74
        // justifyContent: "center"
      },
     
      passwordContainer: {
        marginTop: height* .03
      },
      forgetContainer: {
        marginLeft: "34%",
        marginTop: 17.5
      },
      buttonContainer: {
        marginTop: height*.08
      },
      Maincontainer: {
        width: "100%",
        height: "100%",
      },
     
      input:{
        borderRadius: 10,
        width:'100%',
        height:68,
        borderWidth: 1,
        borderColor: Colors.AppColor,
        color: Colors.AppColor,
        backgroundColor: Colors.WhiteColor,
        fontSize: 18,
      },
      buttonStyle:{
         width: width * 0.8,
         backgroundColor: Colors.AppColor 
      },
      text:{
         color:Colors.AppColor,
        fontSize:15,
        lineHeight:28
      },
      watingContainer:{
        width:'90%',
        marginLeft:20,
        marginTop:height*0.1,
        flexDirection:'row',
        justifyContent:'space-between'
      },
      messageContainer:{
        alignItems: "center",
        justifyContent:'center',
        width:'80%',
        marginLeft:'10%',
        marginTop:50
      },
      messageText:{
        color:Colors.AppColor,
        fontSize:17,
        alignItems:'center',
        textAlign:'center',
        lineHeight:28
     },
      EmailContainer: {
        marginTop: 74
      },
      errorMessage:{
         color:Colors.AppColor,
      }
})
export {styles}