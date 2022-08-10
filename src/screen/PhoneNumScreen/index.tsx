import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function PhoneNumScreen(props:any) {
  const navigation=useNavigation<any>()



  return (
    <View>
      <View style={styles.SecondInnrViewStyl}>
        <View style={styles.InputViewStyl}>
          <TouchableOpacity style={styles.CountryCodePicker}>
            <Image
              style={styles.FlagImgStyl}
              source={require('../../assets/images/india.png')}
            />
            <Text>{'India'}</Text>
            <Image source={require('../../assets/images/downarrow.png')} />
          </TouchableOpacity>
          <View style={styles.NumberInputStyl}>
            <TextInput
              maxLength={10}
              keyboardType="numeric"
              placeholder="Mobile Number"
              onChangeText={txt => props.myFun(txt)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
