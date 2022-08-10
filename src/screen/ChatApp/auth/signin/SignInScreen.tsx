import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import PamLogoAndTxt from '../../../../component/reuseableComponent';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { styles } from './style';

export default function SigninScreen() {
  const [email, setEmail] = useState<any>('');
  const [pass, setPass] = useState<any>('');
  const navigation = useNavigation<any>();
  const userLogin = async () => {
    if (!email || !pass) {
      Alert.alert('please fill all the fields');
      return;
    }
    try {
      const result = await auth()
        .signInWithEmailAndPassword(email, pass)
        .then(data => {
          // console.log('userData=====>', data.user);
          navigation.navigate('ChatScreen', {user: data.user});
        });
    } catch (error:any) {
      Alert.alert(error);
    }
  };

  return (
    <View>
      <PamLogoAndTxt />
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.TextInputBoxStyle}
          placeholder="Email"
          value={email}
          onChangeText={(text: string) => {
            setEmail(text);
          }}
        />
        <TextInput
          style={styles.TextInputBoxStyle}
          onChangeText={(text: any) => {
            setPass(text);
          }}
          value={pass}
          placeholder="password"
        />
        <TouchableOpacity onPress={userLogin} style={styles.SignInButtonStyle}>
          <Text style={{color:'white',textAlign:'center'}}>{'SignIn'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
            {'Create New Account?SignUp'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

