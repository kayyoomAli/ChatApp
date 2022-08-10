import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {normalize} from '../utiles/dimensions';
import { useNavigation } from '@react-navigation/native';



const Splash = () => {
    const navigation=useNavigation<any>()
    //console.log( "jdjfrgh",typeof navigation);
    
    setTimeout(() => {
        navigation.replace('OnboardingScreen');
      }, 1500);

  return (
    <View style={styles.MainContainer}>
      <Image 
      style={styles.PamImgStyl}
      source={require('../assets/images/pam.png')} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  PamImgStyl:{
      width: normalize(287),
      height:normalize(122)
  }
  
});
