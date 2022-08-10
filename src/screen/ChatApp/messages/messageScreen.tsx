import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import database from '@react-native-firebase/database';
import { styles } from './style';

export default function MessageScreen({route}: {route: any}) {
  const navigation = useNavigation();
  const [message, setMessage] = useState<any>('');
  const [chatData, setChatData] = useState<any>([]);
  const {user, myId} = route.params;
  const flatListRef = React.useRef<any>();

  const { _user: {uid}} = user;
  const onSendMsg = () => {
    if (message == '') {
      Alert.alert('enter someting');
    }
    let msgData = {
      msg: message,
      sendTime: moment().format(),
      msgType: 'text',
      roomId: returnRoomId(uid, myId),
      myId: myId,
    };
    database().ref('/room').child(returnRoomId(uid, myId)).push(msgData);
  };

  const GetAllUser = () => {
    database()
      .ref('room/')
      .child(returnRoomId(uid, myId))
      .on('value', snapshot => {
        if (snapshot.val()) {
          setChatData(Object.values(snapshot.val()));
        }
      });
  };

  const returnRoomId = (senderId: string, receiverId: string) => {
    if (senderId > receiverId) return senderId.concat(receiverId);
    else return receiverId.concat(senderId);
  };
  useEffect(() => {
    GetAllUser();
  }, []);

  const renderItem = ({item}: {item: any}) => {
    return (
      <View>
        {
          <Text
            style={
              item.myId == myId
                ? {
                    alignSelf: 'flex-end',
                    backgroundColor: 'green',
                    padding: 5,
                    margin: 5,
                  }
                : {alignSelf: 'flex-start', backgroundColor: 'red', padding: 5}
            }>
            {item.msg}
            {item.sendTime}
          </Text>
        }
      </View>
    );
  };
  const newarr = chatData.sort((a: any, b: any) => {
    return moment(a.sendTime).diff(b.sendTime);
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.MainContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.backImageStyle}
            source={require('../../../assets/images/back.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.ProfilePicstyl}
            source={{uri: route.params.img}}
          />
        </TouchableOpacity>
        <Text style={styles.Txtstyl}>{route.params.name}</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        ref={flatListRef}
        data={newarr}
        renderItem={renderItem}
        onLayout={() => flatListRef.current.scrollToEnd()}
        onContentSizeChange={() =>
          flatListRef.current.scrollToEnd({animated: true})
        }
      />

      <View style={{flexDirection: 'column-reverse'}}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter To start Chat"
          onChangeText={text => setMessage(text)}
        />
      </View>
      <TouchableOpacity onPress={onSendMsg}>
        <Image
          style={styles.SentImageStyle}
          source={require('../../../assets/images/sent.png')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

