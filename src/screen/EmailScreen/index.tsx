import { Text, View, TouchableOpacity, } from 'react-native';
import React, {useState} from 'react';
import PamLogoAndTxt from '../../component/reuseableComponent';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import EmailInputComponent from './EmailComponent';
import PhoneNumScreen from '../PhoneNumScreen';

export default function EmailAndPhoneScreen(props: any) {
  const [show, setShow] = useState(false);
  const navigation = useNavigation<any>();
  const [number, setNumber] = useState<string>('');
  const [creds, setCreds] = React.useState({
    email: '',
    pass: '',
  });

  const NavigationToPhoneAndPass = () => {
    {
      !show
        ? navigation.navigate('PasswordScreen',creds)
        : navigation.navigate('OtpScreen');
    }
  };
 

  // const OtpLogin = async () => {
  //   const confirmation: any = await Auth().signInWithPhoneNumber(
  //     '+919044321038',
  //   );
  //   console.log('dsfghj', confirmation);
  //   if (confirmation) {
  //     setConfirm(confirmation);
  //     props.navigation.navigate('OtpScreen', {confirm: confirm});
  //   }
  // };

  return (
    <View>
      <PamLogoAndTxt />
      <View>
        <View style={styles.StaicTxtStyl}>
          {show ? (
            <Text>{'Enter your Phone Number to Continue'}</Text>
          ) : (
            <Text style={styles.EmailtxtStyl}>
              {'Enter your Email to Continue'}
            </Text>
          )}
        </View>
        <View style={styles.EmailViewStyl}>
          {show ?
           (
            <PhoneNumScreen myFun={setNumber} />
          ) : 
          (
            <EmailInputComponent credSent={creds} EmailSent={setCreds} />
          )}
        </View>
        <TouchableOpacity onPress={() => setShow(!show)}>
          {show ? 
          (
            <Text style={styles.UsePhNotxtStyl}>{'Use Email Address'}</Text>
          ) : 
          (
            <Text style={styles.UsePhNotxtStyl}>{'Use Phone Number'}</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={NavigationToPhoneAndPass}
          style={styles.ContinueBtnStyl}>
          <Text style={styles.ContTxtStyl}>{'Continue'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
