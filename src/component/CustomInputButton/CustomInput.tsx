import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {normalize} from '../../utiles/dimensions';

export default function CustomInputTextButton(props: any) {
  return <TextInput {...props} style={styles.TextInputStyle} />;
}

const styles = StyleSheet.create({
  TextInputStyle: {
    backgroundColor: '#DCDCDC',
    marginHorizontal: normalize(40),
    height: normalize(48),
    paddingLeft: normalize(20),
    borderRadius: normalize(40),
     marginBottom:20
  },
});
