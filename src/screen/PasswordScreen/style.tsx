import {StyleSheet} from 'react-native';
import {normalize} from '../../utiles/dimensions';

export const styles = StyleSheet.create({
  UpperConStyl: {
    marginLeft: normalize(40),
    marginTop: normalize(60),
  },
  EmailtxtStyl: {
    fontSize: 16,
  },
  EmailInputField: {
    height: normalize(48),
    backgroundColor: '#DCDCDC',
    marginTop: normalize(20),
    borderRadius: 40,
    justifyContent: 'space-between',
    marginRight: normalize(30),
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:normalize(23)
  },
  UsePhNotxtStyl: {
    color: 'grey',
    marginLeft: normalize(186),
    marginTop: normalize(10),
  },
  ContinueBtnStyl: {
    marginHorizontal: normalize(8),
    backgroundColor: '#028c6a',
    width: normalize(296),
    height: normalize(48),
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(30),
  },
  ContTxtStyl: {
    color: 'white',
  },
});
