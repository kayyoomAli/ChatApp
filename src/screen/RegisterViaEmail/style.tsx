import { StyleSheet } from "react-native";
import { normalize } from "../../utiles/dimensions";

export const styles=StyleSheet.create({
    MainViewStyl:{
        marginHorizontal:normalize(28),
        marginTop:normalize(35)
    },
   RadiobtnStyl: {
        flexDirection: 'row',
        marginTop:normalize(43),
        alignItems:'center',

    },
    SecondRadiobtnStyl:{
        marginLeft:normalize(43)
    },
    EmailTxtStyl:{
        marginLeft:normalize(40)
    },
    NameStyl:{
        marginLeft:31,
        borderRadius: 40,
        padding: 17,
        backgroundColor: '#DCDCDC',
        marginTop: 20,
        marginRight:31
      },
      EmailInputField: {
        height: normalize(48),
        backgroundColor: '#DCDCDC',
        marginTop: normalize(20),
        borderRadius: 40,
        justifyContent: 'space-between',
        marginHorizontal: normalize(30),
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:normalize(23)
      },
      TermsNCondViewStytl:{
          flexDirection:'row',
          marginTop:normalize(18),
          marginHorizontal:normalize(30)
        },

        CheckBoxImgStyl:  {
            height:normalize(20),
            width:normalize(20)
        },


        ContinueBtnStyl:{
            marginHorizontal:30,
            justifyContent:'center',
            alignItems:'center',
            height:normalize(48),
            backgroundColor:'#028c6a',
            borderRadius:40,
            marginTop:normalize(20)

        }

})