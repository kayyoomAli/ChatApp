import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {FlatListRawData} from '../../utiles/FlatListRawData';

export default function FlatListComponenet() {
  const renderItem: any = ({item}: {item: any}) => {
    return (
      <View style={{flex: 1, justifyContent: 'center', marginTop: 300}}>
        <TouchableOpacity>
          <Image
            resizeMode="contain"
            resizeMethod="resize"
            source={{uri: item.img}}
            style={{height: 50, width: 50}}
          />
          <Text style={{fontSize: 30}}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        horizontal
        data={FlatListRawData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
