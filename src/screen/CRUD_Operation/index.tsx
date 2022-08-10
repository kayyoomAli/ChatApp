import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    StyleSheet,
    Button,
    TouchableOpacity,
    Alert,
    Image,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {normalize} from '../../utiles/dimensions';
  import CommonFunction from '../../utiles/CommonFunction';
  import database from '@react-native-firebase/database';
  
  export default function Index() {
    const [Name, setName] = useState('');
    const [Position, setPosition] = useState<any>();
    const [Id, setId] = useState<any>(0);
    const [users, setUsers] = useState<any>([]);
     const [showView,setshowView]=useState<boolean>(true)
    //Save User
    const SaveUsers = () => {
      CommonFunction.SubmitUser(Id, Name, Position)
        .then(result => {
            setId(null);
            setName('');
            setPosition('');
            if (users.length > 0) {
                setUsers([...users, {name: Name, position: Position}]);
              } else {
                setUsers([{name: Name, position: Position}]);
              }
    
        })
        .catch(err => {
          console.log(err);
        });
    };
  
   
  
  
    //Update Users
    const EditUser = () => {
      // Alert.alert('qwerty');
    };
  
    //DeleteAll User
    const DeleteAllUser = () => {
      database()
        .ref('users')
        .remove()
        .then(() => {
          setUsers([]);
        });
    };
  
    //Delete One User
    const DeleteParticularUser = (item: any) => {
      
      // Alert.alert('deleted');
    //   database()
    //     .ref('users/' + Id)
    //     .remove()
    //     .then(() => {
    //       // setshowView(false)
    //     })
    //     .catch(error => {
    //       console.log('Delete Particuler User error ', error);
    //     });

    database()
      .ref('users/' + item.Id)
      .remove()
      .then(() => {
        // setshowView(false)
      })
      .catch(error => {
        console.log('Delete Particuler User error ', error);
      });
    };
  
  
  
  
  
  
    return (
      <SafeAreaView>
        <View style={{marginTop: normalize(40)}}>
          <Text style={styles.TextCrudStyle}>CrudHomeScreen</Text>
          <View style={styles.MainContainer}>
            <TextInput
              placeholder="Name"
              value={Name}
              style={styles.InputBoxStyle}
              onChangeText={text => {
                setName(text);
              }}
            />
            <TextInput
              placeholder="Position"
              value={Position}
              onChangeText={text => setPosition(text)}
              style={styles.InputBoxStyle}
            />
          </View>
        </View>
        <View style={styles.InsertDeleteButtonViewStyle}>
          <TouchableOpacity
          onPress={SaveUsers} style={styles.TouchButtonStyle}>
            <Text>{'Insert'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={DeleteAllUser}
            style={styles.TouchButtonStyle}>
            <Text>{'Delete'}</Text>
          </TouchableOpacity>
        </View>
  
        <View>
          {users?.map((item: any) => {
            // console.log('myItem'+item.name);
            return (
              <View style={styles.ListViewStyle}>
                <View>
                  <Text style={{fontSize: 20}}>
                    {'Name:  '}
                    {item.name}
                  </Text>
                  <Text style={{fontSize: 20}}>
                    {'Position:  '}
                    {item.position}
                  </Text>
                </View>
                <View style={styles.InnerListViewStyle}>
                  <TouchableOpacity onPress={() => EditUser()}>
                    <Image
                      style={{height: 25, width: 25}}
                      source={require('../../assets/images/EditBtn.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => DeleteParticularUser(item)}>
                    <Image
                      style={{height: 25, width: 25}}
                      source={require('../../assets/images/deleteBtn.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    MainContainer: {
      marginHorizontal: normalize(30),
      marginTop: normalize(30),
    },
    InputBoxStyle: {
      marginVertical: normalize(8),
      backgroundColor: 'yellow',
      marginHorizontal: normalize(10),
      paddingVertical: normalize(10),
      paddingLeft: normalize(10),
      borderWidth: 1,
      borderRadius: 7,
    },
    TextCrudStyle: {
      textAlign: 'center',
    },
    TouchButtonStyle: {
      backgroundColor: '#2ecc71',
      paddingVertical: normalize(10),
      alignItems: 'center',
      marginVertical: normalize(10),
      borderRadius: 10,
      paddingHorizontal: 30,
    },
    InsertDeleteButtonViewStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 80,
    },
    ListViewStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#BDF2D5',
      marginVertical: 10,
      paddingHorizontal: 15,
      marginHorizontal: 10,
      borderRadius: 5,
    },
    InnerListViewStyle: {
      flexDirection: 'row',
      width: 80,
      justifyContent: 'space-between',
    },
  });
  
  
  
  
  