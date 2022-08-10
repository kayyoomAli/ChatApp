import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export default function SignInComponent() {
  const navigation = useNavigation<any>();
  return (
    <ScrollView bounces={true}>
    <View >
      <TouchableOpacity
        style={styles.SingInTouchStyle}
        onPress={() => navigation.navigate('EmailAndPhoneScreen')}>
        <Image
          style={styles.EmailImageStyle}
          source={require('../../assets/images/email.png')}
        />
        <Text style={styles.EmailTxetStyle}>{'Sign in with Email'}</Text>
      </TouchableOpacity>

      <View style={styles.OneClickViewStyl}>
        <Text style={styles.OneClickTxtStyl}>{'One click to Sign in'}</Text>
        <View style={styles.SocialLoginViewStyl}>
          <TouchableOpacity style={styles.SocialBtnStyl}>
            <Image source={require('../../assets/images/apple.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.SocialBtnStyl}>
            <Image source={require('../../assets/images/linkdin.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.SocialBtnStyl}>
            <Image source={require('../../assets/images/fb.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.OrtxtViewStyl}>
        <View style={styles.LineViewStyl}></View>
        <Text style={styles.OrtxtStyl}>{'Or'}</Text>
        <View style={styles.LineViewStyl}></View>
      </View>
      <View style={styles.SignInViewStyl}>
        <Text style={styles.SignTxtStyl}>{'Sign in as a guest?'}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterViaEmail')}>
          <Text style={styles.SkipBtnStyl}>{'Skip'}</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}

