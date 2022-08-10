import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './style';
import {TextInput} from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <View style={styles.UpperContainer}>
      <View style={styles.InnerViewStyl}>
        <Image
          style={styles.DeskNowImgStyl}
          source={require('../../assets/images/deskNow.png')}
        />
      </View>
      <ScrollView>
        <View style={styles.InnerViewStyl}>
          <Text style={styles.TxtStyl}>{'Find Your'}</Text>
          <Text style={styles.MeetingTxtStyl}>{'Meeting Room'}</Text>
          <Text style={styles.SearchStyl}>{'Search'}</Text>
          <View style={styles.LocationViewStyl}>
            <TextInput placeholder="Enter Location" />
            <Image
              style={styles.LocationImgStyl}
              source={require('../../assets/images/location.png')}
            />
          </View>

          <View style={styles.CalenderViewStyl}>
            <View>
              <Text style={styles.TxtxStyl}>{'From'}</Text>
              <TouchableOpacity style={styles.CalenderTouchViewStyl}>
                <Text style={{}}>{'dd/mm/yyyy'}</Text>
                <Image
                  style={styles.CalendarImgStyl}
                  source={require('../../assets/images/calendar.png')}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.TxtxStyl}>{'To'}</Text>
              <TouchableOpacity style={styles.CalenderTouchViewStyl}>
                <Text>{'dd/mm/yyyy'}</Text>
                <Image
                  style={styles.CalendarImgStyl}
                  source={require('../../assets/images/calendar.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.CategoryTxtStyl}>{'Category'}</Text>
          <TouchableOpacity style={styles.CategoryTouchStyl}>
            <Text>{'select Category'}</Text>
            <Image source={require('../../assets/images/downarrow.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.SearchTouchStyl}>
            <Text  style={styles.SearchTxtStyl}>{'Search'}</Text>
          </TouchableOpacity>
          <Text>{'Featured Properties'}</Text>

        </View>
      </ScrollView>
    </View> 
  );
}
