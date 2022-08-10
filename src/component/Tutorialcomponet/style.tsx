import { StyleSheet} from 'react-native'
import { normalize } from '../../utiles/dimensions'
export const styles=StyleSheet.create({
    wifitxetStyle:{
        fontSize:normalize(16),
        marginVertical:normalize(10),
        textAlign:'center'
    },
    MainViewStyle:{
       marginHorizontal:normalize(11),
       marginTop:normalize(36),
    },
    loremStyl:{
        marginHorizontal:normalize(40),
        textAlign:'center',
        
    },
    tutorialImageStyle:{
        height:normalize(242),
        width:normalize(340),
        resizeMode:'contain',
        alignItems:'center'
    }
})