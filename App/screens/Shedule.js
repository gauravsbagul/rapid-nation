import React, { Fragment, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  TextInput,
  Picker,
} from 'react-native';
import { colors } from '../Asset/colors/colors';
import { AppStyles } from '../AppStyles/Styles';
import { images } from '../Asset/images/images';
import Button from '../components/Button';
import { Icon, CheckBox } from 'native-base';

const dateArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const Schedule = ({ navigation }) => {
  const dates = new Array(5).fill(0);
  const times = [
    '10:00 Am',
    '10:30 Am',
    '11:00 Am',
    '11:30 Am',
    '12:00 Pm',
    '12:30 Pm',
    '01:00 Pm',
    '01:30 Pm',
    '02:00 Pm',
    '02:30 Pm',
    '03:00 Pm',
    '03:30 Pm',
  ];
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <View style={{ flex: 1, backgroundColor: colors.lightWhite }}>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: colors.lightWhite,
            paddingHorizontal: 15,
          }}>
          {/* Horizontal Icons */}
          <View
            style={{
              marginVertical: 40,
              alignSelf: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: colors.primaryBlue,
                padding: 3,
                borderRadius: 20,
              }}>
              <Icon
                name="shoppingcart"
                type="AntDesign"
                style={{ fontSize: 20, color: 'white' }}
              />
            </View>
            <View
              style={{
                width: 40,
                height: 0.5,
                backgroundColor: colors.primaryBlue,
              }}
            />
            <View
              style={{
                backgroundColor: colors.primaryBlue,
                padding: 3,
                borderRadius: 20,
              }}>
              <Icon
                name="location-pin"
                type="Entypo"
                style={{ fontSize: 20, color: colors.white }}
              />
            </View>
            <View
              style={{
                width: 40,
                height: 0.5,
                backgroundColor: colors.primaryBlue,
              }}
            />
            <View
              style={{
                backgroundColor: colors.primaryBlue,
                padding: 6,
                borderRadius: 20,
              }}>
              <Icon
                name="calendar"
                type="FontAwesome"
                style={{ fontSize: 17, color: colors.white }}
              />
            </View>
            <View style={{ width: 40, height: 0.5, backgroundColor: '#ccc' }} />
            <View
              style={{
                backgroundColor: colors.white,
                padding: 5,
                borderRadius: 20,
              }}>
              <Image
                source={images.checkoutBlue}
                resizeMode="contain"
                style={{ height: 20, width: 20 }}
              />
            </View>
          </View>

          <Text
            style={[
              AppStyles.boldText,
              { textAlign: 'center', paddingHorizontal: 20, marginBottom: 50 },
            ]}>
            Schedule your Booking
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Text style={AppStyles.semiBold}>Select Date</Text>
            <Icon name="calendar" type="AntDesign" style={styles.icon} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 15,
            }}>
            {dates.map((_, i) => {
              let date = new Date();
              date = date.addDays(i);
              let day = dateArr[date.getDay()];
              let backgroundColor = i == 0 ? colors.lightBlue : 'white';
              let color = i == 0 ? colors.primaryBlue : 'grey';
              return (
                <TouchableOpacity
                  style={{
                    width: '15%',
                    backgroundColor,
                    alignItems: 'center',
                    margin: 3,
                    borderRadius: 10,
                    paddingVertical: 11,
                    marginHorizontal: 5,
                    borderColor: color,
                  }}>
                  <Text
                    style={[AppStyles.mediumBold, { color, marginBottom: 10 }]}>
                    {day}
                  </Text>
                  <Text style={{ ...AppStyles.medium, color }}>
                    {date.getDate()}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Text style={AppStyles.semiBold}>Select Time</Text>
            <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
              <View style={styles.smallBtn}>
                <Text
                  style={[
                    AppStyles.smallestText,
                    { color: colors.primaryBlue, fontSize: 10 },
                  ]}>
                  00:00
                </Text>
              </View>
              <View
                style={[
                  styles.smallBtn,
                  { backgroundColor: colors.primaryBlue },
                ]}>
                <Text
                  style={[
                    AppStyles.smallestText,
                    { color: colors.white, fontSize: 10 },
                  ]}>
                  00:30
                </Text>
              </View>
            </View>
          </View>

          <FlatList
            style={{ marginBottom: 50 }}
            data={times}
            numColumns={4}
            keyExtractor={(_, key) => key}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={
                  (index + 1) % 3
                    ? styles.timeItem
                    : [styles.timeItem, { backgroundColor: colors.white }]
                }>
                <Text
                  style={
                    (index + 1) % 3
                      ? [
                          AppStyles.smallestText,
                          { color: colors.primaryBlue, fontSize: 10 },
                        ]
                      : [
                          AppStyles.smallestText,
                          { color: '#de4d43', fontSize: 10 },
                        ]
                  }>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </ScrollView>

        <Button
          title="Next"
          onPress={() => navigation.navigate('SelectCheckout')}
        />
      </View>
    </Fragment>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  icon: {
    marginLeft: 'auto',
    backgroundColor: '#ccc',
    padding: 5,
    borderRadius: 50,
    fontSize: 20,
    color: colors.white,
  },
  smallBtn: {
    width: 40,
    backgroundColor: colors.white,
    margin: 4,
    marginVertical: 5,
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 10,
  },
  timeItem: {
    width: '23%',
    backgroundColor: colors.lightBlue,
    margin: 4,
    marginVertical: 5,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
