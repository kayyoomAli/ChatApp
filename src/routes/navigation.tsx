import {Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Splash from '../screen/splash';
import OnboardingScreen from '../screen/OnboardingScreen/onboarding';
import Swipper from '../screen/SwipperScreen';
import PamLogoAndTxt from '../component/reuseableComponent';
import PasswordScreen from '../screen/PasswordScreen';
import PhoneNumScreen from '../screen/PhoneNumScreen';
import EmailAndPhoneScreen from '../screen/EmailScreen';
import OtpScreen from '../screen/OtpScreen';
import RegisterViaEmail from '../screen/RegisterViaEmail';
import HomeScreen from '../screen/HomeScreen';
import BookingScreen from '../screen/BookingScreen';
import Message from '../screen/MessageScreen';
import Notifiaction from '../screen/NotificationScreen';
import Account from '../screen/Account';
import CrudHomeScreen from '../screen/CRUD_Operation/CrudHomeScreen';
import CustomInputButton from '../component/CustomInputButton/CustomInput';
import HomeChatScren from '../screen/ChatApp/chatlist/chatScreen';
import MessageScreen from '../screen/ChatApp/messages/messageScreen';
import SignUpScreen from '../screen/ChatApp/auth/signup/signUpScreen';
import SigninScreen from '../screen/ChatApp/auth/signin/SignInScreen';
import Header from '../screen/ChatApp/header';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/homeActive.png')
                  : require('../assets/images/homeInactive.png')
              }
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/bookingActive.png')
                  : require('../assets/images/bookingInactive.png')
              }
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/commentActive.png')
                  : require('../assets/images/CommentInactive.png')
              }
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notifiaction}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/notificationActive.png')
                  : require('../assets/images/notificationInactive.png')
              }
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/AccountActive.png')
                  : require('../assets/images/AccountInactive.png')
              }
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="Tutorial" component={Swipper} />
        <Stack.Screen name="PamLogoAndTxt" component={PamLogoAndTxt} />
        <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
        <Stack.Screen name="PhoneNumScreen" component={PhoneNumScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="RegisterViaEmail" component={RegisterViaEmail} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="CrudHomeScreen" component={CrudHomeScreen} />
        <Stack.Screen name="ChatScreen" component={HomeChatScren} />
        <Stack.Screen name="SignIn" component={SigninScreen} />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="CustomInputButton" component={CustomInputButton} />
        <Stack.Screen
          name="EmailAndPhoneScreen"
          component={EmailAndPhoneScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
