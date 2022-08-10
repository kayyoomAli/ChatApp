import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import HomeChatScren from './src/screen/ChatApp/chatlist/chatScreen';
import CallScreen from './src/screen/ChatApp/calls/callScreen';
import StatusScreen from './src/screen/ChatApp/status/statusScreen';
import { Images } from './src/screen/ChatApp/locale/images';
import CameraScreen from './src/screen/ChatApp/camera/cameraScreen';
const TopTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();


function MyTopTab() {
  return (
    <View style={{flex: 1}}>
      <TopTab.Navigator
        initialRouteName="ChatScreen"
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarLabelStyle: {fontSize: 14, fontWeight: '800'},
          tabBarStyle: {backgroundColor: '#075E54'},
          tabBarShowIcon: true,
          tabBarIndicatorStyle: {
            backgroundColor: 'white',
            height: 3,
          },
        }}>
        <TopTab.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: () => (
              <Image
                source={Images.CAMERA_ICON}
                style={{width: 25, height: 25, resizeMode: 'cover'}}
              />
            ),
          }}
        />

        {/* <TopTab.Screen
          name="ChatScreen"
          component={HomeChatScren}
          options={{tabBarLabel: 'CHATS'}}
        /> */}
        <TopTab.Screen
          name="StatusScreen"
          component={StatusScreen}
          options={{tabBarLabel: 'STATUS'}}
        />
        <TopTab.Screen
          name="CallScreen"
          component={CallScreen}
          options={{tabBarLabel: 'CALLS'}}
        />
      </TopTab.Navigator>
    </View>
  );
}

const NavigationX = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="MyTopTab" component={MyTopTab} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  export default NavigationX;
  
