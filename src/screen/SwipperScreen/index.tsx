import React from 'react';
import {Image, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import Swiper from 'react-native-swiper';

import SignInComponent from '../../component/SocialLogin';
import TutorialComponent from '../../component/Tutorialcomponet';

import {styles} from './style';

export default function Swipper() {
  return (
    <SafeAreaView>
      <View style={styles.MainViewSwiper}>
        <Swiper autoplay={true} activeDotColor={'green'}>
          <TutorialComponent />
          <TutorialComponent />
          <TutorialComponent />
        </Swiper>
      </View>
      <SignInComponent />
    </SafeAreaView>
  );
}
