import { StyleSheet, } from 'react-native'
import { normalize } from '../../utiles/dimensions'


export const styles=StyleSheet.create({
    PamImgStyl: {
        width: normalize(165),
        height: normalize(70.1),
      },
      mainConStyl: {
        width: normalize(165),
        height: normalize(70.1),
        marginTop: normalize(68),
        marginLeft: normalize(21),
      },
      txtViewStyl: {
        marginTop: normalize(2.9),
        marginLeft: normalize(30),
        width: normalize(144),
        height: normalize(60),
      },
      txtStyl: {
        fontSize: normalize(25),
        fontWeight: '700',
      },
      BackArrStyl:{
        height:normalize(18),
        width:normalize(18),
        position:'absolute',
        marginTop:normalize(57.6),
        marginLeft:normalize(26)
    
    },

})