import React from 'react';
import {View, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeChatScren from '../screen/ChatApp/chatlist/chatScreen';
import CameraScreen from '../screen/ChatApp/camera/cameraScreen';
import CallScreen from '../screen/ChatApp/calls/callScreen';
import StatusScreen from '../screen/ChatApp/status/statusScreen';
import { Images } from '../screen/ChatApp/locale/images';
const TopTab = createMaterialTopTabNavigator();

export default function MyTopTab() {
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
