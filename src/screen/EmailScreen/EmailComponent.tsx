import {View, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';

import {styles} from './style';
import CommonFunction from '../../utiles/CommonFunction';

export default function EmailInputComponent(props:any) {
 

  return (
    <View style={styles.UpperConStyl}>
      <View style={styles.EmailInputField}>
        <TextInput
          onChangeText={(txt)=>props.EmailSent({...props.credSent, email: txt})}
          placeholder="Enter your email"
        />
      </View>
    </View>
  );
}
