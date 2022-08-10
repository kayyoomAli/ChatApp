import { StyleSheet } from "react-native";
import { normalize } from "../../utiles/dimensions";
 
export const styles=StyleSheet.create({
    TopViewstyl:
    {
        marginHorizontal:normalize(50),
        zIndex:1,
        elevation:20,
        
    },

   LangViewStyl: {
       flexDirection:'row',
       alignItems:'center'
    },
    langFlagStyl:{
        height:30,
        width:30,
        marginRight:normalize(10.2)
    },
    ModalizeViewStyl:
    {
        justifyContent: 'center',
         alignItems: 'center',
 
        },
    langtxtStyl:
    {
        marginLeft:normalize(40)
    },
    OpenModalStyl:{
       
        flexDirection:'row',
        width:normalize(227),
        alignItems:'center',
        

    },
    downArrowStyl:{
        height:normalize(6),
        width:normalize(10.2)

    },
   WholeTouchstyl: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:normalize(39),
        borderRadius:40,
        backgroundColor:'#DCDCDC',
        width:normalize(296),
        height:normalize(48)
      }
    
})