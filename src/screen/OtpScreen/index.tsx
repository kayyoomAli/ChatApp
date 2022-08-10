import {View, Text,TextInput} from 'react-native';
import React, {useRef} from 'react';
import PamLogoAndTxt from '../../component/reuseableComponent';
import {normalize} from '../../utiles/dimensions';
import { styles } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackgroundTimer from 'react-native-background-timer';


let startTimer = () => {
  BackgroundTimer.runBackgroundTimer(() => {
    setSeconds((seconds: any) => seconds - 1);
  }, 1000);
};
let stopInterval = () => {
  BackgroundTimer.stopBackgroundTimer();
};

export default function OtpScreen() {
  const FirstInput=useRef<any>()
  const SecondInput=useRef<any>()
  const ThirdInput=useRef<any>()
  const FourthInput=useRef<any>()
  return (
    <View>
      <PamLogoAndTxt />
      <View style={{marginHorizontal: normalize(40), marginTop: normalize(35)}}>
        <Text>{'Enter the OTP received on your Phone Number'}</Text>
        <View style={styles.NumberTxtStyl}>
          <Text>{'9876543XXX'}</Text>
          <Text style={styles.EditTxtStyl}>
            {'Edit'}
          </Text>
        </View>
        <View style={styles.OtpViewStyl}>
          <TextInput ref={FirstInput}
            maxLength={1}
            keyboardType='numeric' 
            onChangeText={(text)=>{text && SecondInput.current.focus()}}
             style={styles.OtpBoxStyl} />
          <TextInput ref={SecondInput} maxLength={1} keyboardType='numeric'onChangeText={(text)=>{text && ThirdInput.current.focus()}} style={styles.OtpBoxStyl}/>
          <TextInput ref={ThirdInput} maxLength={1} keyboardType='numeric' onChangeText={(text)=>{text && FourthInput.current.focus()}} style={styles.OtpBoxStyl}/>
          <TextInput ref={FourthInput} maxLength={1} keyboardType='numeric'  style={styles.OtpBoxStyl} />
        </View>
        <View style={styles.TimeStyl} >
          {startTimer}
        </View>
        <TouchableOpacity style={styles.ContinueBtnStyl}>
          <Text>{'Continue'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function setSeconds(arg0: (seconds: any) => number) {
  throw new Error('Function not implemented.');
}

