import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import {styles} from './style';
export default function HomeChatScren({route}: {route: any}) {
  const navigation = useNavigation<any>();
  const [allUsers, setAllUsers] = useState([]);
  const {user} = route.params;
  const {
    _user: {uid},
  } = user;

  useEffect(() => {
    GetAllUser();
  }, []);
  const GetAllUser = () => {
    database()
      .ref('users/')
      .once('value')
      .then(snapshot => {
        setAllUsers(Object.values(snapshot.val()));
      });
  };

  const renderItem = ({item}: {item: any}) => {
    const {
      dataAtSignUp: {id},
    } = item;
    console.log('item', item);
    return (
      id !== uid && (
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MessageScreen', {
                name: item.dataAtSignUp.name,
                img: item.dataAtSignUp.profilePic,
                user: user, // login user
                myId: item?.dataAtSignUp?.id,
              })
            }>
            <View style={styles.itemCon}>
              <View style={styles.imgCon}>
                <TouchableOpacity>
                  <Image
                    resizeMode="contain"
                    source={{uri: item.profilePic}}
                    style={styles.imgStyle}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.rightCon}>
                <View style={styles.NameMsgstyl}>
                  <Text style={styles.textStyle}>{item.dataAtSignUp.name}</Text>
                </View>
                <Text style={styles.textStyle2}>{item.dataAtSignUp.phone}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )
    );
  };

  return (
      <SafeAreaView>
        <Text onPress={() => navigation.goBack()}>{'goback'}</Text>
        <Text
          onPress={() => navigation.navigate('Header')}
          style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>
          {'Chat App'}
        </Text>
        <FlatList
          data={allUsers}
          //@ts-ignore
          renderItem={renderItem}
        />
      </SafeAreaView>
  );
}
