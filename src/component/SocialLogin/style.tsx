import { StyleSheet } from 'react-native'
import { normalize } from '../../utiles/dimensions'

 const styles = StyleSheet.create({
    SingInTouchStyle:{
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#028c6a',
    marginHorizontal:normalize(38),
    padding:normalize(15.5),
    borderRadius:40,

},
EmailImageStyle:{
    height:normalize(18.7),
    width:normalize(18.7)
},
EmailTxetStyle:{
    color:'white',
    marginLeft:10,
    fontSize:16

},
OneClickViewStyl:{
    marginTop:normalize(42.5),
    marginHorizontal:normalize(86)
},
OneClickTxtStyl:{
textAlign:'center'
},
SocialLoginViewStyl:{
    flexDirection:'row',
    marginTop:normalize(15),
    justifyContent:'space-between'

  },
  SocialBtnStyl:{
    width: normalize(44),
    height: normalize(44),

  },
  OrtxtViewStyl:{
      flexDirection:'row',
      marginHorizontal:normalize(13),
      marginTop:normalize(30),
      alignItems:'center'
    },
    LineViewStyl:{
        borderBottomWidth:1,
        width:normalize(158),
        borderBottomColor:'grey'
    },
    OrtxtStyl:{
        textAlign:'center',
        marginHorizontal: normalize(8)
    },
    SignInViewStyl:{
        flexDirection:'row',
        marginHorizontal:normalize(118),
        marginTop:normalize(34)
    },
    SkipBtnStyl:{
        fontWeight:'bold',
        fontSize:16

    },
    SignTxtStyl:{
        fontSize:16
    }
})



export default styles