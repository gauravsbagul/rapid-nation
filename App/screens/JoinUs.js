import React, { Fragment, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
// Adding API
import { apiBaseURL } from '../globals';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import Header from '../components/Header';
import { colors } from '../Asset/colors/colors';
import Button from '../components/Button';
import { Icon } from 'native-base';
import { AppStyles } from '../AppStyles/Styles';
import { images } from '../Asset/images/images';

const { width } = Dimensions.get('window');
const carouselSliderWidth = width;
const carouselSliderHeight = carouselSliderWidth * (330 / 350);
const carouselItemWidth = carouselSliderWidth * 0.8;
const carouselItemHeight = carouselSliderWidth * (2 / 3);

const JoinUs = () => {
  const carouselRef = useRef(null);

  const [jName, setJName] = useState('');
  const [jEmail, setJEmail] = useState('');
  const [jService, setJService] = useState('');
  const [jContact, setJContact] = useState(null);
  const [jAddress, setJAddress] = useState('');

  const data = [
    {
      id: 1,
      img: require('../Asset/profile_ananya.png'),
      name: 'Michael Dam',
      role: 'Beauty',
      description:
        'Since I joined Infinity Port I have received more jobs regularly than i did before.',
    },
    {
      id: 2,
      img: require('../Asset/profile_ananya.png'),
      name: 'Rachel Dam',
      role: 'sdada',
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text ',
    },
    {
      id: 3,
      img: require('../Asset/profile_ananya.png'),
      name: 'None Dam',
      role: 'sdada',
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text',
    },
  ];
  let service = [
    { name: 'Explore Services' },
    { name: 'Contact Us' },
    { name: 'Reviews' },
  ];
  let serviceArea = [
    { name: 'Silkboard' },
    { name: 'NSR Layout' },
    { name: 'Sarjapur' },
    { name: 'Marathahalli' },
  ];
  let reasons1 = [
    { name: 'Become a tech friendly professional', icon: 'cellphone-iphone' },
    {
      name: 'Confirmed bookings and business growth',
      icon: 'lightbulb-on-outline',
    },
  ];
  let reasons2 = [
    { name: 'Incentives & conv -eyance', icon: 'hand-holding-usd' },
    { name: 'Partner support to solve queries', icon: 'people-arrows' },
  ];
  let works = [
    { name: 'View earnings & incentives of each service provided.' },
    { name: 'Be it getting a plumbing job done.' },
    { name: "We're a mobile marketplace for local services." },
    { name: 'Auto allocation of customer service orders.' },
    { name: 'Easy Navigation to the customers location.' },
    { name: 'Track details and info of every booking.' },
  ];
  const ques = [
    {
      title: 'How do I know when my onboarding request is approved?',
      subTitle:
        'The HJ team will contact you when they find your profile suitable for partnership.',
    },
    {
      title: 'How do I know when my onboarding request is approved?',
      subTitle:
        'The HJ team will contact you when they find your profile suitable for partnership.',
    },
  ];
  let card = [
    { title: '123+ Views', subTitle: 'Reviews' },
    { title: '999+ Views', subTitle: 'Happy Customers' },
    { title: '1000+ Views', subTitle: 'Service Centres' },
  ];

  const renderItem = (entry) => {
    return (
      <View
        style={{
          width: carouselItemWidth,
          height: carouselItemHeight,
          alignItems: 'center',
        }}>
        <ImageBackground
          source={entry.item.img}
          style={{
            width: '100%',
            height: '90%',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                left: -15,
                backgroundColor: '#fff',
                borderRadius: 60,
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                carouselRef.current.snapToPrev();
              }}>
              <Icon
                name="left"
                type="AntDesign"
                style={{ fontSize: 16, color: 'grey' }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: -15,
                backgroundColor: '#fff',
                borderRadius: 60,
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                carouselRef.current.snapToNext();
              }}>
              <Icon
                name="right"
                type="AntDesign"
                style={{ fontSize: 16, color: 'grey' }}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View
          style={{
            backgroundColor: '#fff',
            width: '75%',
            paddingTop: 15,
            paddingHorizontal: 20,
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            paddingBottom: 25,
            borderRadius: 2,
          }}>
          <Text style={[AppStyles.mediumBold, { color: '#000' }]}>
            {entry.item.name}
          </Text>
          <Text style={[AppStyles.smallText, { color: colors.grey }]}>
            {entry.item.role}
          </Text>
          <Text
            style={[AppStyles.smallText, { color: '#363636', marginTop: 5 }]}>
            {entry.item.description}
          </Text>
        </View>
      </View>
    );
  };

  const formSubmit = () => {
    if (
      jName !== '' &&
      jEmail !== '' &&
      jService !== '' &&
      jContact !== null &&
      jAddress !== ''
    ) {
      axios
        .post(`${apiBaseURL}/joinus/addjoinus`, {
          name: jName,
          email: jEmail,
          service: jService,
          contact: jContact,
          address: jAddress,
        })
        .then((res) => {
          console.log(res);
          Toast.show('Submitted Successfully');
          setJName('');
          setJEmail('');
          setJService('');
          setJContact(null);
          setJAddress('');
        })
        .catch((err) => {
          console.log('Error', err.response);
          Toast.show('Please, Try Again');
        });
    } else {
      Toast.show('All fields are compulsory');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.lightWhite }}>
      <ScrollView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
        <Header title="Join Us" noMic />
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: 40 }}>
            <View style={styles.input}>
              <Icon name="user" type="FontAwesome" style={styles.icon} />
              <TextInput
                style={[AppStyles.regularText, { flexGrow: 1 }]}
                placeholderTextColor="grey"
                placeholder="Name"
                value={FormData.jName}
                onChangeText={(text) => {
                  setJName(text);
                }}
              />
            </View>
            <View style={styles.input}>
              <Icon name="email" type="MaterialIcons" style={styles.icon} />
              <TextInput
                style={[AppStyles.regularText, { flexGrow: 1, paddingLeft: 0 }]}
                placeholderTextColor="grey"
                placeholder="Email ID"
                value={jEmail}
                onChangeText={(text) => {
                  setJEmail(text);
                }}
              />
            </View>
            <View style={styles.input}>
              <Image
                source={images.service}
                style={styles.lockIcon}
                resizeMode="contain"
              />
              <TextInput
                style={[
                  AppStyles.regularText,
                  { flexGrow: 1, paddingLeft: 10 },
                ]}
                placeholderTextColor="grey"
                placeholder="Service"
                value={jService}
                onChangeText={(text) => {
                  setJService(text);
                }}
              />
            </View>
            <View style={styles.input}>
              <Icon
                name="mobile-phone"
                type="FontAwesome"
                style={styles.icon}
              />
              <TextInput
                style={[AppStyles.regularText, { flexGrow: 1 }]}
                placeholderTextColor="grey"
                placeholder="Contact"
                keyboardType="numeric"
                maxLength={10}
                value={jContact}
                onChangeText={(text) => {
                  setJContact(text);
                }}
              />
            </View>
            <View style={styles.input}>
              <Image
                source={images.address}
                style={styles.lockIcon}
                resizeMode="contain"
              />
              <TextInput
                style={[AppStyles.regularText, { flexGrow: 1 }]}
                placeholderTextColor="grey"
                placeholder="Address"
                value={jAddress}
                onChangeText={(text) => {
                  setJAddress(text);
                }}
              />
            </View>

            <Button
              title="Done"
              style={{ marginTop: 40 }}
              onPress={formSubmit}
            />
            <Text
              style={[
                AppStyles.boldText,
                { textAlign: 'center', marginTop: 40 },
              ]}>
              Download this App
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: -20,
              }}>
              <Image
                style={{ width: 110, height: 110 }}
                resizeMode="contain"
                source={images.playstore_logo}
              />
            </View>
          </View>
          <View style={{ height: 150, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {card.map((item) => (
                <View style={styles.card}>
                  <Text
                    style={[
                      AppStyles.mediumBold,
                      { color: colors.primaryBlue, textAlign: 'center' },
                    ]}>
                    {item.title}
                  </Text>
                  <Text
                    style={[
                      AppStyles.regularText,
                      { textAlign: 'center', paddingTop: 2 },
                    ]}>
                    {item.subTitle}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
          <Text
            style={[
              AppStyles.boldText,
              { paddingLeft: 20, paddingBottom: 10 },
            ]}>
            How it works
          </Text>

          <View style={{ flexDirection: 'column' }}>
            {works.map((item) => (
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Image
                    source={images.bullet}
                    style={{ height: 80, width: 80 }}
                    resizeMode="contain"
                  />
                </View>
                <View style={{ flex: 9 }}>
                  <Text
                    style={{
                      ...AppStyles.regularText,
                      paddingHorizontal: 25,
                      paddingTop: 25,
                    }}>
                    {item.name}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <Text
            style={[
              AppStyles.boldText,
              { marginTop: 20, paddingLeft: 20, paddingBottom: 30 },
            ]}>
            Onboarding process
          </Text>
          <View
            style={{
              flexDirection: 'column',
              backgroundColor: colors.lightBlue,
              paddingVertical: 5,
            }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Image
                  source={images.bullet}
                  style={{ height: 80, width: 80 }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 9 }}>
                <Text
                  style={{
                    ...AppStyles.smallText,
                    paddingTop: 27,
                    paddingHorizontal: 25,
                  }}>
                  Vendor fills out request form.
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Image
                  source={images.bullet}
                  style={{ height: 80, width: 80, marginTop: -15 }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 9 }}>
                <Text
                  style={{
                    ...AppStyles.smallText,
                    paddingTop: 12,
                    paddingHorizontal: 25,
                  }}>
                  Supply management team named.
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Image
                  source={images.bullet}
                  style={{ height: 80, width: 80, marginTop: -15 }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 9 }}>
                <Text
                  style={{
                    ...AppStyles.smallText,
                    paddingTop: 12,
                    paddingHorizontal: 25,
                  }}>
                  Supply executive analyzes & categories the request.
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={[
              AppStyles.boldText,
              { marginTop: 10, paddingLeft: 20, paddingTop: 40 },
            ]}>
            Why choose Infinity Port?
          </Text>
          <View
            style={{
              width: '100%',
              paddingHorizontal: 10,
              marginVertical: 20,
            }}>
            <View style={{ paddingVertical: 40, flexDirection: 'row' }}>
              {reasons1.map((item) => (
                <View style={styles.stepWork1}>
                  <View style={styles.numberTop}>
                    <Icon
                      name={item.icon}
                      type="MaterialCommunityIcons"
                      style={{ color: colors.white, fontSize: 35 }}
                    />
                  </View>
                  <Text
                    style={{
                      ...AppStyles.smallText,
                      color: 'black',
                      textAlign: 'center',
                      paddingHorizontal: 15,
                      marginBottom: 5,
                    }}>
                    {item.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View style={{ width: '100%', paddingHorizontal: 10 }}>
            <View style={{ paddingVertical: 2, flexDirection: 'row' }}>
              {reasons2.map((item) => (
                <View style={styles.stepWork1}>
                  <View style={styles.numberTop}>
                    <Icon
                      name={item.icon}
                      type="FontAwesome5"
                      style={{ color: colors.white, fontSize: 30 }}
                    />
                  </View>
                  <Text
                    style={{
                      ...AppStyles.smallText,
                      color: 'black',
                      textAlign: 'center',
                      paddingHorizontal: 30,
                      marginBottom: 5,
                    }}>
                    {item.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <Text
            style={[
              AppStyles.boldText,
              {
                marginTop: 10,
                paddingLeft: 20,
                paddingTop: 40,
                paddingBottom: 40,
              },
            ]}>
            Have any questions?
          </Text>
          <View style={{ flexDirection: 'column', paddingBottom: 20 }}>
            {ques.map((ques, index) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  paddingBottom: 40,
                  paddingRight: 20,
                  marginTop: -25,
                }}>
                <View style={{ flex: 1 }}>
                  <Image
                    source={images.bullet}
                    style={{ height: 80, width: 80 }}
                    resizeMode="contain"
                  />
                </View>
                <View style={{ flex: 9 }}>
                  <Text
                    style={{
                      ...AppStyles.mediumBold,
                      paddingHorizontal: 25,
                      paddingTop: 25,
                    }}>
                    {ques.title}
                  </Text>
                  <Text
                    style={[
                      AppStyles.regularText,
                      { color: 'grey', paddingTop: 20, paddingHorizontal: 25 },
                    ]}>
                    {ques.subTitle}
                  </Text>
                </View>
              </View>
            ))}
            <TouchableOpacity>
              <Text
                style={[
                  AppStyles.mediumBold,
                  {
                    color: colors.primaryBlue,
                    textAlign: 'right',
                    paddingRight: 30,
                  },
                ]}>
                View all
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={[
              AppStyles.boldText,
              { marginTop: 10, paddingLeft: 20, paddingBottom: 40 },
            ]}>
            Testimonials
          </Text>
          {/* Carousel  */}
          <View
            style={{ backgroundColor: colors.lightBlue, paddingVertical: 80 }}>
            <Carousel
              ref={carouselRef}
              data={data}
              renderItem={renderItem}
              sliderWidth={carouselSliderWidth}
              sliderHeight={carouselSliderHeight}
              itemWidth={carouselItemWidth}
              itemHeight={carouselItemHeight}
              layout="default"
              enableSnap
              decelerationRate="fast"
              activeSlideAlignment="center"
              inactiveSlideOpacity={0}
              inactiveSlideScale={0.95}
            />
          </View>
          <Text
            style={[
              AppStyles.boldText,
              { marginTop: 10, paddingLeft: 20, paddingTop: 40 },
            ]}>
            Service
          </Text>
          <View
            style={[
              styles.inputLike,
              {
                backgroundColor: colors.white,
                marginHorizontal: 18,
                paddingVertical: 10,
                marginVertical: 20,
              },
            ]}>
            {service.map((item) => (
              <View>
                <Text
                  style={[
                    AppStyles.regularText,
                    { color: 'black', padding: 9, paddingLeft: 25 },
                  ]}>
                  {item.name}
                </Text>
              </View>
            ))}
          </View>
          <Text
            style={[AppStyles.boldText, { marginTop: 10, paddingLeft: 20 }]}>
            Service Area
          </Text>
          <View
            style={[
              styles.inputLike,
              {
                backgroundColor: colors.white,
                marginHorizontal: 18,
                paddingVertical: 10,
                marginVertical: 20,
              },
            ]}>
            {serviceArea.map((item) => (
              <View>
                <Text
                  style={[
                    AppStyles.regularText,
                    { color: 'black', padding: 9, paddingLeft: 25 },
                  ]}>
                  {item.name}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default JoinUs;

const styles = StyleSheet.create({
  input: {
    marginVertical: 8,
    width: '92%',
    alignSelf: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  icon: { fontSize: 20, marginHorizontal: 5, marginRight: 10, color: 'grey' },
  numberTop: {
    position: 'absolute',
    top: -25,
    width: 56,
    height: 56,
    borderRadius: 30,
    backgroundColor: colors.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepWork1: {
    width: '46%',
    height: 90,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingTop: 25,
  },
  card: {
    height: 80,
    width: 180,
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingVertical: 20,
    marginTop: 2,
    marginBottom: 20,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  lockIcon: {
    height: 20,
    width: 20,
    marginLeft: 5,
  },
});
