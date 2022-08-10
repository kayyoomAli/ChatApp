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
import database from '@react-native-firebase/database';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { styles } from './style';

export default function SignUpScreen() {
  const [email, setEmail] = useState<any>('');
  const [pass, setPass] = useState<any>('');
  const [name, setName] = useState<any>('');
  const [phone, setPhone] = useState<any>('');
  const [confirmPass, setConfirmPass] = useState<any>('');

  const navigation = useNavigation<any>();

  const userSignUp = async () => {
    if (!email || !pass || !name || !phone || !confirmPass) {
      Alert.alert('please fill all the fields');
      return;
    }
    try {
      const result = await auth().createUserWithEmailAndPassword(email, pass);
      let dataAtSignUp = {
        id: result.user.uid,
        name: name,
        phone: phone,
        emailId: email,
        roomId:returnRoomId('',result.user.uid)
      };
      database()
        .ref('/users/' + dataAtSignUp.id)
        .set({
          dataAtSignUp,
        })
        .then(() =>
          navigation.navigate('SignIn'),
        );
    } catch (error:any) {
      Alert.alert(error);
    }
  };

  const returnRoomId=(senderId:any,receiverId:any)=>{
    if(senderId.le>receiverId)
    return senderId+receiverId;
    else
    return receiverId+senderId;
  }
  

  return (
    <View>
      <PamLogoAndTxt />
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.TextInputBoxStyle}
          placeholder="Enter your Name"
          value={name}
          onChangeText={(text: string) => {
            setName(text);
          }}
        />

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
        <TextInput
          style={styles.TextInputBoxStyle}
          onChangeText={(text: any) => {
            setConfirmPass(text);
          }}
          value={confirmPass}
          placeholder="Confirm password"
        />

        <TextInput
          style={styles.TextInputBoxStyle}
          placeholder="Phone Number"
          value={phone}
          onChangeText={(text: string) => {
            setPhone(text);
          }}
        />
        <TouchableOpacity onPress={userSignUp} style={styles.SignInButtonStyle}>
          <Text>{'SignUp'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
            {'Already Register ? Login'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


