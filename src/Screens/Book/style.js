import { StyleSheet } from 'react-native'
import { Colors } from '../../Global/colors'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerSection: {
        backgroundColor: '#BFC6CC',
        height: '33%'
    },
    headerStyle: {
        backgroundColor: '#BFC6CC'
    },
    headerText: {
      fontSize:18,
      color:'#53697B',
      fontWeight:'600',
      lineHeight:25
      
    },
    headerText2:{
        fontSize:18,
        color:'#53697B', 
        lineHeight:25,
        width:'85%'
    },
    input:{
       borderWidth:0.5,
       borderRadius:4,
        width:'100%',
        height:50,
        paddingHorizontal:10,
        borderColor: '#AEB6BC',
        color: '#AEB6BC',
        backgroundColor: Colors.WhiteColor,
        fontSize: 16,
      },
      optionsContainer:{
          marginTop:'5%',
          width:'95%',
          alignSelf:'center'
      }
})
export { style }