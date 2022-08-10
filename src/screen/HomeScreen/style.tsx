import {StyleSheet} from 'react-native';
import {normalize} from '../../utiles/dimensions';

export const styles = StyleSheet.create({
  UpperContainer: {
    marginHorizontal: normalize(5),
    marginTop: normalize(46),
  },
  DeskNowImgStyl: {
    height: normalize(68),
    width: normalize(158.2),
    resizeMode: 'contain',
  },
  TxtStyl: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: normalize(13),
  },
  InnerViewStyl: {
    marginHorizontal: normalize(16),
  },
  MeetingTxtStyl: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: normalize(10),
    color: '#028c6a',
  },
  SearchStyl: {
    fontWeight: '500',
    marginTop: normalize(26),
  },
  LocationViewStyl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 40,
    height: normalize(48),

    backgroundColor: '#DCDCDC',
    paddingHorizontal: normalize(12),
    marginTop: normalize(7),
  },
  LocationImgStyl: {
    height: normalize(13.5),
    width: normalize(9.5),
   // backgroundColor:'#DCDCDC'
  },
  CalenderViewStyl: {
    marginTop: normalize(18),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  CalendarImgStyl: {
    height: normalize(14),
    width: normalize(14),
  },
  CalenderTouchViewStyl: {
    flexDirection: 'row',
    backgroundColor: '#DCDCDC',
    borderRadius: 40,
    marginTop: normalize(7),
    width: normalize(165),
    justifyContent: 'space-around',
    paddingVertical: normalize(13),
  },
  TxtxStyl: {
    fontWeight: '500',
  },
  CategoryTouchStyl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 40,
    paddingVertical: normalize(15),
    backgroundColor: '#DCDCDC',
    paddingHorizontal: normalize(12),
    marginTop: normalize(7),
  },
  CategoryTxtStyl: {
    marginTop: normalize(18),
    fontWeight: '500',
  },
  SearchTouchStyl: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    paddingVertical: normalize(15),
    backgroundColor: '#028c6a',
    paddingHorizontal: normalize(12),
    marginTop: normalize(26),
  },
  SearchTxtStyl:{
    color:'white'
  }
});
