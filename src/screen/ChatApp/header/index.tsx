import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {STRINGS} from '../locale/string';
import {Images} from '../locale/images';
import {normalize, vh, vw} from '../../../utiles/dimensions';
import {COLORS} from '../locale/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MyTopTab from '../../../routes/topTabNavigation';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
 const navigation= useNavigation()
  return (
    <View style={{flex:1}}>
    <View style={styles.MainContainerStyle}>
      <Text onPress={()=>navigation.goBack()} style={styles.whatsLogoStyle}>{STRINGS.WHATSAPP}</Text>
      <View style={styles.InnerViewStyle}>
        <TouchableOpacity>
          <Image style={styles.searchIconImage} source={Images.SEARCH_ICON} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.searchIconImage} source={Images.MENU_ICON} />
        </TouchableOpacity>
      </View>
    </View>
    <MyTopTab/>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  MainContainerStyle: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHATSAPP_COLOR,
    justifyContent: 'space-between',
    paddingHorizontal: normalize(15),
    paddingTop: normalize(60),
  },
  InnerViewStyle: {
    flexDirection: 'row',
  },
  whatsLogoStyle: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
  searchIconImage: {
    height: vh(25),
    width: vw(25),
    resizeMode: 'contain',
    marginLeft: normalize(10),
  },
});
