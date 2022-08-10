import {StyleSheet} from 'react-native';
import {DESIGN_WIDTH, normalize,vh} from '../../utiles/dimensions';

export const styles = StyleSheet.create({
  PamLogoImageStyle: {
    width: normalize(165),
    height: normalize(70.1),
  },
  workTextStyle: {
    fontSize: normalize(25),

    width: normalize(144),
    fontWeight: 'bold',
  },
  OnboardingImageStyle: {
    marginLeft: normalize(120.4),
    height:vh(388),
    resizeMode: 'contain',
    bottom:20

  },
  BottomViewStyle: {
     width: normalize(336),
     bottom:70,
  
  },
  ChooseYourLanguageTextStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
  ChooseYourLanguageTouchStyle: {
    backgroundColor: '#DCDCDC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: normalize(20),
    height:normalize(48),
    borderRadius: normalize(40),
  },
  languageFlagStyle: {
    height: normalize(30),
    width: normalize(30),
    position:'absolute',
    left:25
  },
  downArrowStyle: {
    height: normalize(6),
    width: normalize(10.2),
    right:-40
  },
  ContinueBttonStyle:
  {
    backgroundColor:'#028c6a',
  marginHorizontal:normalize(0),
  paddingVertical:normalize(16),
  borderRadius:normalize(40),
  alignItems:'center',
  marginTop:normalize(27)
}
});

//     txtViewStyl: {
//       marginTop: normalize(2.9),
//       marginLeft: normalize(30),
//       width: normalize(144),
//       height: normalize(60),
//     },
//     txtStyl: {
//       fontSize: normalize(25),
//       fontWeight: '700',
//     },
//     OnboardingImgStyl: {
//       resizeMode: 'contain',
//     },
//     OnBoardingViewStyl: {
//       marginLeft: normalize(135.4),
//       height: normalize(388.1),
//       width: normalize(239.6),
//       position: 'absolute',
//       top: normalize(168.7),
//     },
//     StaticTxtViewStyl: {
//       width: normalize(170),
//       height: normalize(19),
//       marginLeft: normalize(40),
//       position: 'absolute',
//       marginTop: normalize(511),
//     },
//     LangTxtStyl: {
//       fontSize: 16,
//     },
//     BottomViewStyl: {

//       position: 'absolute',
//       marginTop: normalize(550),
//       borderRadius: 40,
//       backgroundColor: '#f1f1f1',

//     },
//     ContinueStyl: {
//       width: normalize(296),
//       height: normalize(48),
//       position: 'absolute',
//       marginTop: normalize(625),
//       marginLeft: normalize(40),
//       borderRadius: 40,
//       backgroundColor: '#028c6a',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     downarrowStyl: {
//       width: normalize(10.2),
//       height: normalize(6),

//     },
//     flagImgstyl:{
//       width:normalize(18),
//       height:normalize(18),
//       marginRight:10
//     },
//     OpenModalStyl:{
//       flexDirection:'row',
//       width:normalize(227),
//       alignItems:'center',
//   },
//   langFlagStyl:{
//     height:30,
//     width:30,
//     marginRight:normalize(10.2)
// },
// downArrowStyl:{
//   height:normalize(6),
//   width:normalize(10.2)
// },
// ModalizeViewStyl:
// {

//   position: 'absolute',
//   marginTop: normalize(550),
//   borderRadius: 40,
//   backgroundColor: '#f1f1f1',

//     },
//     ChooseLangStyl:{
//       width: normalize(296),
//       height: normalize(48),
//      position: 'absolute',
//      marginTop: normalize(550),
//       marginHorizontal: normalize(40),
//       borderRadius: 40,
//       backgroundColor: '#DCDCDC',
//       alignItems: 'center',
//       justifyContent: 'center',
//       flexDirection:'row'
// }
