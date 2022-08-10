import { StyleSheet } from "react-native";
import { normalize } from "../../utiles/dimensions";


export const styles=StyleSheet.create({
    OtpViewStyl:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:normalize(28)
    },
    OtpBoxStyl:
    {
        backgroundColor:'#DCDCDC',
        height:normalize(48),
        width:normalize(58),
        borderRadius:normalize(7),
        paddingHorizontal:normalize(25)
   
    },
    NumberTxtStyl:{
        marginTop: normalize(20),
        marginHorizontal: normalize(85),
        flexDirection: 'row',
      },
      EditTxtStyl:{
        marginLeft: normalize(10), 
        color: '#028c6a'
      },
      TimeStyl:{
          textAlign:'center',
          marginTop:17
        },
        ContinueBtnStyl:{
            marginTop:normalize(21),
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#028c6a',
            height:normalize(48),
            borderRadius:normalize(40)
        }
})