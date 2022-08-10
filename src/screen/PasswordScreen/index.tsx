import {View, Text, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import PamLogoAndTxt from '../../component/reuseableComponent';
import {styles} from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
import CommonFunction from '../../utiles/CommonFunction';
import Auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export default function PasswordScreen() {
  const navigation = useNavigation<any>();
  const [pass, setPass] = useState<any>();
  const [userId, setUserId] = useState('');
  const {
    params: {email},
  } = useRoute<any>();
  // console.log(email);

  const logIn = () => {
    CommonFunction.logInWithEmailAndPassword(email, pass, (value: any) => {
       navigation.navigate('CrudHomeScreen', {userId:value});
       console.log("i am call",userId)
    });
  };

  return (
    <View>
      <PamLogoAndTxt />
      <View style={styles.UpperConStyl}>
        <Text style={styles.EmailtxtStyl}>
          {'Enter your password of your account'}
        </Text>
        <View style={styles.EmailInputField}>
          <TextInput
            placeholder="Enter your PassWord"
            autoCapitalize="none"
            onChangeText={txt => {
              setPass(txt);
            }}
          />
          <Text style={{color: 'green'}}>{'Show'}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.UsePhNotxtStyl}>{'Forgot Password?'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ContinueBtnStyl}
          onPress={() => {
            logIn()
          }}>
          <Text style={styles.ContTxtStyl}>{'Sign In'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
