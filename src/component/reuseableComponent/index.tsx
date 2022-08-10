import {Text, View, Image,TouchableOpacity } from 'react-native';
import React from 'react';
import {styles} from './style';

import { useNavigation } from '@react-navigation/native';

export default function PamLogoAndTxt() {
  const navigation=useNavigation<any>()
  return (
    <View>
      <TouchableOpacity onPress={()=> navigation.goBack()} >
         <Image
        style={styles.BackArrStyl}
        source={require('../../assets/images/back.png')}
        />
        </TouchableOpacity>
      <View style={styles.mainConStyl}>
        <Image
          style={styles.PamImgStyl}
          source={require('../../assets/images/pam.png')}
        />
      </View>
      <View style={styles.txtViewStyl}>
        <Text style={styles.txtStyl} numberOfLines={2}>
          {'Work where you want'}
        </Text>
      </View>
    </View>
  );
}
