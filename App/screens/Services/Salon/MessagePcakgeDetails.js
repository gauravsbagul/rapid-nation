import { CheckBox, Icon } from 'native-base';
import React, { Fragment, useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import { AppStyles } from '../../../AppStyles/Styles';
import { colors } from '../../../Asset/colors/colors';
import { images } from '../../../Asset/images/images';

const MessagePcakgeDetails = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const smallTextArry = [
    {
      title: 'Package Includes',
      points: ['30 mins Head Massage', '30 mins Neck and Shoulder '],
    },
    {
      title: 'Recommended When',
      points: ['Every 10 days for a calming effect on the mind'],
    },
    {
      title: 'Pressure Intensity',
      points: ['Hight to high'],
    },
    {
      title: 'Benefits',
      points: ['Reduces Stress', 'Reduces shoulder pain'],
    },
    {
      title: 'Please Note',
      points: [
        'If you suffer from any medical condition, please consult your doctor before booking this therapy.',
      ],
    },
  ];

  const goToCart = () => {
    setModalVisible(false);
    navigation.navigate('Cart');
  };
  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.header_linear_1}
      />
      <Modal
        isVisible={isModalVisible}
        swipeDirection={['down', 'left', 'right']}
        onSwipeComplete={() => {
          setModalVisible(false);
        }}>
        <View
          style={{
            backgroundColor: colors.white,
            paddingVertical: 40,
            paddingHorizontal: 20,
            alignSelf: 'center',
            width: '90%',
            borderRadius: 5,
          }}>
          <Text
            style={[
              AppStyles.mediumBold,
              { textAlign: 'center', color: 'black' },
            ]}>
            Are You Ok With Male Beautician Also ?
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox
                checked={true}
                onPress={() => goToCart()}
                style={{ marginRight: 15 }}
              />
              <Text style={AppStyles.mediumBold}>Yes</Text>
            </View>
            <Text style={[AppStyles.medium, { color: 'grey' }]}>OR</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox
                checked={false}
                onPress={() => goToCart()}
                style={{ marginRight: 15 }}
              />
              <Text style={AppStyles.mediumBold}>No</Text>
            </View>
          </View>
        </View>
      </Modal>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <View style={styles.container}>
          <Image
            source={images.head_shoulder}
            style={{ width: '100%', height: 150 }}
          />
          {/* Heading */}
          <View style={{ marginTop: 15, position: 'relative' }}>
            <Text style={[AppStyles.boldText, { width: '90%' }]}>
              Head + Shoulder and Foot Massage
            </Text>
            <View
              style={{
                position: 'absolute',
                top: 0,
                right: 2,
                alignItems: 'center',
              }}>
              <Image
                source={images.clock_blue}
                style={{ width: 15, height: 15 }}
              />
              <Text
                style={{ ...AppStyles.smallText, color: colors.primaryBlue }}>
                40 Mins
              </Text>
            </View>
          </View>
          {/* Points */}
          <View style={{ marginHorizontal: 10 }}>
            {smallTextArry.map((item, index) => (
              <View style={{ marginTop: 20, marginBottom: 7 }} key={index}>
                <Text style={AppStyles.mediumBold}>{item.title}</Text>
                {item.points.map((text, i) => (
                  <View
                    key={i}
                    style={{
                      flexDirection: 'row',
                      marginTop: 2,
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 10,
                        backgroundColor: colors.grey,
                        marginHorizontal: 6,
                      }}
                    />
                    <Text style={[AppStyles.smallText, { marginRight: 20 }]}>
                      {text}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={{ marginHorizontal: 15, marginLeft: 20 }}>
          <View style={styles.row}>
            <Icon
              name="rupee"
              type="FontAwesome"
              style={{ color: 'grey', fontSize: 15 }}
            />
            <Text
              style={[
                AppStyles.regularText,
                {
                  color: 'grey',
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                  marginRight: 10,
                },
              ]}>
              {' 1200'}
            </Text>
            <Image
              style={{ height: 25, width: 50 }}
              resizeMode="contain"
              source={images.off_20}
            />
          </View>
          <View style={styles.row}>
            <Icon
              name="rupee"
              type="FontAwesome"
              style={{ color: 'black', fontSize: 18 }}
            />
            <Text style={[AppStyles.mediumBold, { color: 'black' }]}>
              {' 800'}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          activeOpacity={0.8}
          style={styles.proceedButton}>
          <Text style={[AppStyles.medium, { color: 'white' }]}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default MessagePcakgeDetails;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.lightWhite,
    paddingHorizontal: 10,
  },
  container: {
    marginTop: 20,
    backgroundColor: colors.white,
    paddingBottom: 10,
    marginBottom: 5,
  },
  footer: {
    height: 70,
    width: '100%',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: 'row',
    elevation: 10,
    alignItems: 'center',
  },
  proceedButton: {
    backgroundColor: colors.primaryBlue,
    height: 30,
    marginLeft: 'auto',
    marginRight: 20,
    paddingHorizontal: 20,
    borderRadius: 3,
    justifyContent: 'center',
  },
  row: { flexDirection: 'row', marginBottom: 3, alignItems: 'center' },
});
