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
import { Icon, CheckBox, Textarea } from 'native-base';
import CartItem from '../components/CartItem';
import Modal from 'react-native-modal';

const cartIem = [
  {
    title: 'Sara Fruit Cleanup',
    image: images.cart_male,
    price: '1000',
    prevPrice: '900',
    type: 'Male',
  },
  {
    title: 'Stress Relief-Swedish Massage',
    image: images.cart_female,
    price: '2000',
    prevPrice: '800',
    type: 'Female',
  },
];

const Checkout = ({ navigation }) => {
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nove',
    'Dec',
  ];

  let date = new Date();
  let day = date.getUTCDate();
  var month = months[date.getMonth()];
  let year = date.getUTCFullYear();
  var weekDay = days[date.getUTCDay()];
  let dateStr = `${weekDay}, ${month} ${day} ${year} - 12:00 PM`;
  const paymentDetails = [
    { text: 'Service Total', amount: 1800 },
    { text: 'Tax', amount: 19 },
    { text: 'Amount Payable', amount: 518 },
    { text: 'Promo Code', amount: -999 },
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
            <View
              style={{
                width: 40,
                height: 0.5,
                backgroundColor: colors.primaryBlue,
              }}
            />
            <View
              style={{ backgroundColor: colors.primaryBlue, borderRadius: 20 }}>
              <Image
                source={images.checkoutWhite}
                resizeMode="contain"
                style={{ height: 29, width: 29 }}
              />
            </View>
          </View>

          <Text
            style={[
              AppStyles.boldText,
              { textAlign: 'center', paddingHorizontal: 20, marginBottom: 30 },
            ]}>
            Check Out
          </Text>
          <Text style={AppStyles.mediumBold}>Service</Text>

          {/* Cart Items */}

          {cartIem.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
          <View style={{ marginVertical: 10 }}>
            <Text style={AppStyles.semiBold}>Date & Time</Text>
            <View style={styles.input}>
              <Text style={AppStyles.regularText}>{dateStr}</Text>
            </View>
          </View>
          {/* Details */}
          <View style={{ marginVertical: 10 }}>
            <Text style={AppStyles.semiBold}>Address</Text>
            <View style={styles.input}>
              <Text style={[AppStyles.regularText, { marginRight: 15 }]}>
                93/1, Near Tulisi Theatre, Main Road,HAL Old Airport, Bangalore
                - India.
              </Text>
            </View>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Textarea
              style={{
                backgroundColor: colors.white,
                height: 120,
                width: '100%',
                borderRadius: 7,
              }}
              placeholder="Any Special Instead For Vendor"
            />
          </View>

          {/* Payment */}

          <View style={{ marginVertical: 10 }}>
            <Text style={AppStyles.semiBold}>Payment Summary</Text>
          </View>

          {paymentDetails.map((item, i) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomColor: '#ddd',
                borderBottomWidth: 1,
                paddingVertical: 10,
                paddingHorizontal: 5,
              }}>
              <Text style={[AppStyles.regularText, { width: '77%' }]}>
                {item.text}
              </Text>
              <Text style={[AppStyles.mediumBold, { color: 'black' }]}>
                Rs.
              </Text>
              <Text
                style={[
                  AppStyles.mediumBold,
                  { marginLeft: 'auto', marginRight: 5, color: 'black' },
                ]}>
                {item.amount}.00
              </Text>
            </View>
          ))}

          <View style={{ height: 50 }} />
        </ScrollView>

        <Button
          title="Confirm Payment"
          onPress={() => navigation.navigate('SelectCheckout')}
        />
      </View>
    </Fragment>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    paddingVertical: 15,
    paddingHorizontal: 5,
    marginTop: 8,
    justifyContent: 'center',
    borderRadius: 10,
  },
});
