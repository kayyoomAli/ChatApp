import React, {useRef, useImperativeHandle} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {styles} from './style';

function BottomSheet(props: any) {
  const modalizeRef = useRef<Modalize>(null);

  // const buttonRef = useRef();

  useImperativeHandle(props.inputRef, () => ({
    onOpen: () => {
      modalizeRef.current?.open();
    },
    close: () => {
      modalizeRef.current?.close();
    },
  }));

  const RenderItem = () => {
    return (
      <ScrollView>
      <View style={styles.TopViewstyl}>
        <TouchableOpacity style={styles.LangViewStyl}>
          <Image
            style={styles.langFlagStyl}
            source={require('../../assets/images/united-states.png')}
          />
          <Text style={styles.langtxtStyl}>{'English'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LangViewStyl}>
          <Image
            style={styles.langFlagStyl}
            source={require('../../assets/images/india.png')}
          />
          <Text style={styles.langtxtStyl}>{'Hindi'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LangViewStyl}>
          <Image
            style={styles.langFlagStyl}
            source={require('../../assets/images/germany.png')}
          />
          <Text style={styles.langtxtStyl}>{'Germany'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LangViewStyl}>
          <Image
            style={styles.langFlagStyl}
            source={require('../../assets/images/france.png')}
          />
          <Text style={styles.langtxtStyl}>{'French'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LangViewStyl}>
          <Image
            style={styles.langFlagStyl}
            source={require('../../assets/images/united-arab-emirates.png')}
          />
          <Text style={styles.langtxtStyl}>{'UAE'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LangViewStyl}>
          <Image
            style={styles.langFlagStyl}
            source={require('../../assets/images/japan.png')}
          />
          <Text style={styles.langtxtStyl}>{'Japaneese'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LangViewStyl}>
          <Image
            style={styles.langFlagStyl}
            source={require('../../assets/images/china.png')}
          />
          <Text style={styles.langtxtStyl}>{'Chineese'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LangViewStyl}>
          <Image
            style={styles.langFlagStyl}
            source={require('../../assets/images/united-states.png')}
          />
          <Text style={styles.langtxtStyl}>{'Urdu'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LangViewStyl}>
          <Image
            style={styles.langFlagStyl}
            source={require('../../assets/images/united-states.png')}
          />
          <Text style={styles.langtxtStyl}>{'More'}</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.ModalizeViewStyl}>
      <Modalize
        adjustToContentHeight={true}
        modalStyle={{
          marginTop: 360,
          zIndex: 1,
          position: 'absolute',
          width: '100%',
        }}
        ref={modalizeRef}>
        <RenderItem />
      </Modalize>
    </View>
  );
}
export default React.forwardRef(BottomSheet);
