import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';
import PamLogoAndTxt from '../../component/reuseableComponent';
import {normalize} from '../../utiles/dimensions';
import {useNavigation, useRoute} from '@react-navigation/native';

import database from '@react-native-firebase/database';

// interface Props{
//   Email:any
// }

export default function RegisterViaEmail() {
  const route = useRoute();
  const [cliclVisible, setClickVisisble] = useState<boolean>(true);
  const [checkInVisble, setCheckVisble] = useState<boolean>(true);
  const navigation = useNavigation<any>();
  // const [id, setId] = useState<any>([]);
  const [Name, setName] = useState('');
  const [phonenum, setPhoneNum] = useState('');
  const [emailId, setEmailId] = useState('');
  const [pass, setPass] = useState('');

  // const {userId}: any = route.params;
  // const [creds, setCreds] = useState<any>({
  //   email: '',
  //   pass: '',
  // });

  // const SingUp = () => {
  //   CommonFunction.SiginUpWithEmailIDandPassword(creds.email, creds.pass);
  //   Alert.alert('SingUp Sucessfully');
  // };

  const RegisterUser = () => {
    let dataAtSignUp = {
      id: uuid.v4(),
      name: Name,
      phone: phonenum,
      emailId: emailId,
    };
    database()
      .ref('/users/' + dataAtSignUp.id)
      .set({
        dataAtSignUp
      })
      .then(() => navigation.navigate('ChatRoom', {dataAtSignUp: dataAtSignUp}));
  };

  return (
    <View>
      <PamLogoAndTxt />
      <View style={styles.MainViewStyl}>
        <Text>
          {
            'The entered email/phone number is not Registered with us. Please Signup to Proceed'
          }
        </Text>
        <View style={styles.RadiobtnStyl}>
          <TouchableOpacity onPress={() => setClickVisisble(!cliclVisible)}>
            {!cliclVisible ? (
              <Image
                style={{height: 20, width: 20}}
                source={require('../../assets/images/radio-button.png')}
              />
            ) : (
              <Image
                style={{height: 20, width: 20}}
                source={require('../../assets/images/radio-buttonFill.png')}
              />
            )}
          </TouchableOpacity>
          <Text>{'Company'}</Text>

          <TouchableOpacity
            style={styles.SecondRadiobtnStyl}
            onPress={() => setClickVisisble(!cliclVisible)}>
            {cliclVisible ? (
              <Image
                style={{height: 20, width: 20}}
                source={require('../../assets/images/radio-button.png')}
              />
            ) : (
              <Image
                style={{height: 20, width: 20}}
                source={require('../../assets/images/radio-buttonFill.png')}
              />
            )}
          </TouchableOpacity>
          <Text>{'Individual'}</Text>
        </View>
      </View>

      <View style={{marginVertical: normalize(20)}}>
        <Text style={styles.EmailTxtStyl}>{'Email'}</Text>
        <View style={{marginTop: 10}}>
          {/* <EmailInputComponent credSent={creds} EmailSent={setCreds} /> */}
          <TextInput
            style={styles.NameStyl}
            placeholder="Email"
            value={emailId}
            onChangeText={txt => setEmailId(txt)}
          />
        </View>
        <TextInput
          style={styles.NameStyl}
          placeholder="Enter your name"
          onChangeText={txt => setName(txt)}
        />
      </View>
      {/* <PhoneNumScreen /> */}
      <TextInput
        style={styles.NameStyl}
        placeholder="PhoneNum"
        value={phonenum}
        onChangeText={txt => setPhoneNum(txt)}
      />
      <TextInput
        style={styles.NameStyl}
        value={pass}
        onChangeText={txt => setPass(txt)}
        placeholder="Password"
      />

      {/* <View style={styles.EmailInputField}>
        <TextInput
          onChangeText={text => {
            setCreds({...creds, pass: text});
          }}
          placeholder="Enter your PassWord"
        />
        <Text style={{color: 'green'}}>{'Show'}</Text>
      </View> */}

      <View style={styles.TermsNCondViewStytl}>
        <TouchableOpacity onPress={() => setCheckVisble(!checkInVisble)}>
          {checkInVisble ? (
            <Image
              style={styles.CheckBoxImgStyl}
              source={require('../../assets/images/checkboxBlank.png')}
            />
          ) : (
            <Image
              style={styles.CheckBoxImgStyl}
              source={require('../../assets/images/checkbox.png')}
            />
          )}
        </TouchableOpacity>
        <Text style={{marginLeft: normalize(7)}}>
          {'By Continuing in you agree to our T&C And Privacy Policy'}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => RegisterUser()}
        style={styles.ContinueBtnStyl}>
        <Text>{'Continue'}</Text>
      </TouchableOpacity>
    </View>
  );
}
