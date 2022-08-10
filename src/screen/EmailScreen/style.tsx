import { StyleSheet, } from 'react-native'
import { normalize } from '../../utiles/dimensions'


export const styles = StyleSheet.create({
    
    UpperConStyl:{
        marginHorizontal:normalize(30),
    },
    EmailtxtStyl:{
        fontSize:16,
    },
    EmailViewStyl:{
        marginTop:20
    },
    EmailInputField:{ 
        height:normalize(48),
        backgroundColor:'#DCDCDC',
        borderRadius:40,
        justifyContent:'center',
        paddingLeft:normalize(20),
      
        
    },
    UsePhNotxtStyl:{
        color:'#028c6a',
        marginLeft:normalize(212),
        marginTop:normalize(10),
       
    },
    ContinueBtnStyl:{
        marginHorizontal:normalize(40),
        backgroundColor:'#028c6a',
        width:normalize(296),
        height:normalize(48),
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        marginTop:normalize(200),
        position:'absolute'
    },
    ContTxtStyl:{
        color:'white'
    },
    ErrorHandleStyl:{
        color:'red',
        marginTop:normalize(16),
        marginLeft:normalize(40)
    },
    StaicTxtStyl:{
        marginHorizontal:normalize(40),
        marginTop:normalize(60),
    }

})