import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {FC} from 'react';
import {styles} from './style';
import BottomSheet from '../../component/LanguageSelect';
import {useNavigation} from '@react-navigation/native';
import {normalize} from '../../utiles/dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';

function OnboardingScreen() {
  const navigation = useNavigation<any>();
  const myRef = React.useRef<any>(null);

  const handleClick = () => {
    myRef.current.onOpen();
  };

  return (
    <SafeAreaView>
      <View>
        <View style={{marginLeft: 21, marginTop: normalize(24)}}>
          <Image
            style={styles.PamLogoImageStyle}
            source={require('../../assets/images/pam.png')}
          />
          <Text style={styles.workTextStyle} numberOfLines={2}>
            {'Work where you want'}
          </Text>
          <Image
            style={styles.OnboardingImageStyle}
            source={require('../../assets/images/Onboarding.png')}
          />
          <View style={styles.BottomViewStyle}>
            <Text style={styles.ChooseYourLanguageTextStyle}>
              {'Choose your Language'}
            </Text>
            <TouchableOpacity
              style={styles.ChooseYourLanguageTouchStyle}
              onPress={handleClick}>
              <Image
                style={styles.languageFlagStyle}
                source={require('../../assets/images/united-states.png')}
              />
              <Text>{'English'}</Text>
              <Image
                style={styles.downArrowStyle}
                source={require('../../assets/images/downarrow.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ContinueBttonStyle}
              onPress={() => navigation.navigate('SignIn')}>
              <Text>{'Continue'}</Text>
            </TouchableOpacity>
          </View>
          <BottomSheet inputRef={myRef} />
        </View>
    
      </View>
     
    </SafeAreaView>
  );
}
export default OnboardingScreen;


