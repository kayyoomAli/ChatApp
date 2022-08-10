import { StyleSheet } from "react-native"
import { normalize } from "../../utiles/dimensions"

export const styles = StyleSheet.create({

    SecondInnrViewStyl:{
      marginLeft:normalize(30),
    },
    StaticTxtStyl:{
        fontSize:16
    },
    InputViewStyl:{
      // marginTop:normalize(10),
      flexDirection:'row'
    },
    CountryCodePicker:{
      width:normalize(110),
      height:normalize(48),
      alignItems:'center',
      justifyContent:'space-evenly',
      borderRadius:40,
      flexDirection:'row',
      backgroundColor:'#DCDCDC'

    },
    NumberInputStyl:{
      marginHorizontal:normalize(14),
      width:normalize(191),
      height:normalize(48),
      justifyContent:'center',
      borderRadius:40,
    paddingLeft:20,
    backgroundColor:'#DCDCDC'
  },
    UsePhNotxtStyl:{
      color:'#028c6a',
      marginLeft:normalize(186),
      marginTop:normalize(10),
     
  },
  ContinueBtnStyl:{
    marginHorizontal:normalize(8),
    backgroundColor:'#028c6a',
    width:normalize(296),
    height:normalize(48),
    borderRadius:40,
    justifyContent:'center',
    alignItems:'center',
    marginTop:normalize(30)
},
ContTxtStyl:{
  color:'white',
  fontSize:16
},
FlagImgStyl:
{
  width: normalize(19.3), 
  height: normalize(19.7)
}
})