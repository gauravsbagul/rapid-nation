import React, { Fragment, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
import { Icon } from 'native-base';
import Modal from 'react-native-modal';
import Header from '../components/Header';
import { colors } from '../Asset/colors/colors';
import { images } from '../Asset/images/images';
import { AppStyles } from '../AppStyles/Styles';

const CartItem = ({ item, completed, navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={item.image}
          style={{ width: null, height: 88, flex: 0.65 }}
          imageStyle={{ resizeMode: 'cover' }}>
          <View
            style={{
              width: '100%',
              backgroundColor: colors.lightBlue,
              padding: 2,
            }}>
            <Text
              style={[
                AppStyles.smallestText,
                { textAlign: 'center' },
              ]}>{`Service For ${item.type}`}</Text>
          </View>
          <Image
            style={{
              height: 25,
              width: 50,
              position: 'absolute',
              bottom: 0,
            }}
            resizeMode="contain"
            source={images.off_20}
          />
        </ImageBackground>
        <View
          style={{
            flex: 0.85,
            marginLeft: 12,
            marginTop: 2,
            borderRightWidth: 1,
            borderRightColor: '#d8d8d8',
          }}>
          <Text style={[AppStyles.mediumBold, { color: '#000' }]}>
            {item.title}
          </Text>
          <Text style={[AppStyles.smallestText, { color: 'grey' }]}>
            Service
          </Text>
          <Text style={[AppStyles.medium, { marginTop: 5, color: '#000' }]}>
            {item.date}
          </Text>
          <Text style={[AppStyles.medium, { color: '#000' }]}>{item.time}</Text>
        </View>

        <View style={{ flex: 1.15, marginLeft: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '75%', marginTop: 5 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={[AppStyles.smallerText, { flex: 3 }]}>
                  Booking Id:
                </Text>
                <Text style={[AppStyles.smallerTextBold, { flex: 3 }]}>
                  {' '}
                  {item.bookingId}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={[AppStyles.smallerText, { flex: 3 }]}>
                  Vendor Id:
                </Text>
                <Text style={[AppStyles.smallerTextBold, { flex: 3 }]}>
                  {' '}
                  {item.vendorId}
                </Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Icon
                  name="md-alarm-outline"
                  style={{ color: '#007aff', fontSize: 21 }}
                />

                <Text
                  style={{
                    ...AppStyles.smallestText,
                    color: colors.primaryBlue,
                  }}>
                  40 Mins
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 25,
            }}>
            <View style={{ flex: 0.8, alignItems: 'flex-end' }}>
              {!completed ? (
                <Text
                  style={{
                    ...AppStyles.mediumBold,
                    color: colors.primaryBlue,
                  }}>
                  New
                </Text>
              ) : null}
            </View>
            <View style={{ flex: 1.2, alignItems: 'flex-end' }}>
              <Text
                style={[
                  AppStyles.mediumBold,
                  {
                    color: 'grey',
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                  },
                ]}>
                {`\u20B9 ${item.price}`}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={[AppStyles.mediumBold, { color: '#000' }]}>
                {`\u20B9 ${item.prevPrice}`}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 5,
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#E6E6E6',
          paddingVertical: 7,
          paddingHorizontal: 12,
          alignItems: 'center',
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          marginBottom: 15,
        }}>
        <View style={{ flex: 1 }}>
          {!completed ? (
            <Text style={[AppStyles.medium, { color: '#000' }]}>
              {item.assignedTo} is Assigned
            </Text>
          ) : null}
        </View>
        <View
          style={{
            flex: completed ? null : 2,
            alignItems: 'flex-end',
            flexDirection: completed ? 'row' : null,
          }}>
          {completed ? (
            <TouchableOpacity
              style={{
                backgroundColor: '#bcf5bc',
                alignItems: 'center',
                paddingVertical: 7,
                paddingHorizontal: 10,
                borderRadius: 10,
                marginRight: 10,
              }}
              onPress={toggleModal}>
              <Text style={[AppStyles.smallBold, { color: colors.green }]}>
                Completed
              </Text>
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity
            style={{
              backgroundColor: colors.primaryBlue,
              alignItems: 'center',
              paddingVertical: 7,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
            onPress={() => {
              if (completed) {
                navigation.navigate('My Order Complete');
              } else {
                navigation.navigate('My Order Detail');
              }
            }}>
            <Text style={[AppStyles.smallBold, { color: colors.white }]}>
              View Details
            </Text>
          </TouchableOpacity>
          <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            onSwipeComplete={() => setModalVisible(false)}
            swipeDirection={['left', 'right', 'up', 'down']}>
            <View
              style={{
                flex: 1,
                backgroundColor: colors.lightWhite,
                borderRadius: 10,
                paddingVertical: 20,
                paddingHorizontal: 15,
                marginTop: '35%',
              }}>
              <ScrollView>
                <Text style={[AppStyles.semiBold, { marginTop: 5 }]}>
                  Rating
                </Text>
                <View
                  style={{
                    backgroundColor: colors.white,
                    borderRadius: 10,
                    marginTop: 10,
                    padding: 10,
                  }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon
                      type="FontAwesome"
                      name="star"
                      style={{ color: '#e9cf51' }}
                    />
                    <Icon
                      type="FontAwesome"
                      name="star"
                      style={{ marginLeft: 5, color: '#e9cf51' }}
                    />
                    <Icon
                      type="FontAwesome"
                      name="star"
                      style={{ marginLeft: 5, color: '#e9cf51' }}
                    />
                    <Icon
                      type="FontAwesome"
                      name="star"
                      style={{ marginLeft: 5, color: colors.grey }}
                    />
                    <Icon
                      type="FontAwesome"
                      name="star"
                      style={{ marginLeft: 5, color: colors.grey }}
                    />
                  </View>
                  <Text
                    style={[
                      AppStyles.regularText,
                      { color: colors.primaryBlue, marginTop: 15 },
                    ]}>
                    It's time to step up.
                  </Text>
                </View>
                <Text style={[AppStyles.semiBold, { marginTop: 25 }]}>
                  Review
                </Text>
                <TextInput
                  placeholder="Enter Reviews"
                  placeholderTextColor={colors.primaryBlue}
                  style={[
                    AppStyles.regularText,
                    {
                      marginTop: 10,
                      borderRadius: 10,
                      padding: 10,
                      textAlignVertical: 'top',
                    },
                  ]}
                  multiline
                  numberOfLines={10}
                  backgroundColor={colors.white}
                />
              </ScrollView>
            </View>
          </Modal>
        </View>
      </View>
    </>
  );
};

const MyOrder = ({ navigation }) => {
  const [completed, setCompleted] = useState(false);
  const cartIem = [
    {
      title: 'Sara Fruit Cleanup',
      image: images.cart_male,
      price: '1000',
      prevPrice: '900',
      type: 'Male',
      date: '30/12/2019',
      time: '2:00 Pm',
      assignedTo: 'Cihan Soyasakal',
      bookingId: 114084,
      vendorId: 110484,
    },
    {
      title: 'Stress Relief Swedish Massage',
      image: images.cart_female,
      price: '2000',
      prevPrice: '800',
      type: 'Female',
      date: '30/12/2019',
      time: '2:00 Pm',
      assignedTo: 'Cihan Soyasakal',
      bookingId: 114084,
      vendorId: 110484,
    },
  ];
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
      <Header title={completed ? 'Completed' : 'My Orders'} noMic />
      {!completed ? (
        <View style={styles.btnContainer}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 30,
              marginBottom: 20,
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: colors.lightBlue,
                alignItems: 'center',
                padding: 10,
                marginHorizontal: 7,
                borderRadius: 10,
              }}>
              <Text
                style={[AppStyles.mediumBold, { color: colors.primaryBlue }]}>
                Booked
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: '#bcf5bc',
                alignItems: 'center',
                padding: 10,
                marginHorizontal: 7,
                borderRadius: 10,
              }}
              onPress={() => {
                setCompleted(true);
              }}>
              <Text style={[AppStyles.mediumBold, { color: colors.green }]}>
                Completed
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: colors.white,
                alignItems: 'center',
                padding: 10,
                marginHorizontal: 7,
                borderRadius: 10,
              }}>
              <Text style={[AppStyles.mediumBold, { color: '#e60000' }]}>
                Cancelled
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {cartIem.map((item, index) => (
        <CartItem
          item={item}
          key={index}
          completed={completed}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
};

export default MyOrder;

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    margin: 10,
    marginBottom: 15,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 5,
    padding: 10,
    paddingBottom: 15,
    backgroundColor: colors.white,
    borderRadius: 5,
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
