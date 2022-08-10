import {Image, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './style';
import {normalize} from '../../utiles/dimensions';

export default function TutorialComponent() {
  return (
    <SafeAreaView>
      <View style={{marginTop: 16}}>
        <Image
          style={styles.tutorialImageStyle}
          source={require('../../assets/images/tutorial.png')}
        />
        <Text style={styles.wifitxetStyle}>{'Free Wifi Zone'}</Text>
        <Text numberOfLines={2} style={styles.loremStyl}>
          {'Lorem Ipsum is simply dummy text of the printing and typesetting'}
        </Text>
      </View>
    </SafeAreaView>
  );
}
