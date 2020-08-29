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
} from 'react-native';
import Header from '../components/Header';
import { colors } from '../Asset/colors/colors';
import { AppStyles } from '../AppStyles/Styles';
import { images } from '../Asset/images/images';
import Button from '../components/Button';
import { Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const ReadMoreReview = () => {
  const activeTabTexts = [
    {
      title: 'Choose a Massage Service ',
      subtitle: 'Select from various massages packages and service',
    },
    { title: 'Choose your time-slot ', subtitle: 'We service from 8am to 8pm' },
    {
      title: 'Relax and de-stress with our massages service',
      subtitle:
        'Our professionals will get in touch with you an hour before the service',
    },
  ];
  const faqs = [
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
  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.header_linear_1}
      />
      <ScrollView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
        <Header onMicPress={() => {}} mic />
        {/* Three Tabs */}
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{ ...AppStyles.smallText }}>About Massages</Text>
            <Text
              style={{
                ...AppStyles.medium,
                color: colors.primaryBlue,
                borderBottomColor: colors.primaryBlue,
                borderBottomWidth: 2.5,
                paddingBottom: 3,
              }}>
              How It Works!
            </Text>
            <Text style={{ ...AppStyles.smallText }}>Customer Reviews</Text>
          </View>
        </View>
        {/* Selected Tab */}
        <View style={{ paddingHorizontal: 10, marginBottom: 10 }}>
          {activeTabTexts.map((item, index) => (
            <View style={styles.activeTabItem}>
              <LinearGradient
                style={styles.index}
                colors={[colors.primaryBlue, '#fff']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <Text
                  style={{
                    ...AppStyles.smallBold,
                    color: colors.white,
                    textAlign: 'center',
                  }}>
                  {`${index + 1}`}
                </Text>
                <Text
                  style={{
                    ...AppStyles.smallBold,
                    color: colors.white,
                    textAlign: 'center',
                    paddingBottom: 3,
                  }}>
                  Step
                </Text>
              </LinearGradient>

              <View style={{ width: '90%' }}>
                <Text style={{ ...AppStyles.mediumBold }}>{item.title}</Text>
                <Text style={{ ...AppStyles.medium, marginTop: 7 }}>
                  {item.subtitle}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Review Text */}
        <View
          style={{
            paddingHorizontal: 15,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Text style={AppStyles.semiBold}>Customer Review</Text>
          <Text style={AppStyles.smallText}>{'  ( Latest Reviews )'}</Text>
        </View>

        {/* Review Image */}
        <View style={styles.reviewContainer}>
          <Image
            style={{ width: '80%', height: 200, borderRadius: 5 }}
            source={images.profile_ananya}
          />
          <View style={styles.reviewText}>
            <Text style={{ ...AppStyles.mediumBold, marginBottom: 10 }}>
              Ananya
            </Text>
            <Text style={{ ...AppStyles.smallText, textAlign: 'center' }}>
              {`"  Soothing experience, Loved it,
    Thank you Rapid Nation  its Awesome
    service .  "`}
            </Text>
          </View>
        </View>
        {/* Comment Section */}
        <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
          <Text style={[AppStyles.semiBold, { marginBottom: 10 }]}>
            All About Massages
          </Text>
          <Text
            style={[
              AppStyles.medium,
              { paddingHorizontal: 5, marginBottom: 10 },
            ]}>
            Female To Male Body to body Massage Parlour in Delhi, Rohini
            Providing Luxurious Full Body To Body Spa By Female To Male in
            Delhi, Pitampura, Full Massage by Female/Women/Girls in Delhi with
            Reasonable Prices and Offers
          </Text>
        </View>
        {/* FAQ */}
        <View style={{ paddingHorizontal: 10, marginBottom: 50 }}>
          <Text style={[AppStyles.semiBold, { marginBottom: 20 }]}>FAQ's</Text>
          <View style={styles.searchBox}>
            <TextInput
              placeholder="Type Your Question"
              style={{ flexGrow: 1 }}
            />
            <Icon
              name="search"
              type="FontAwesome"
              style={{
                fontSize: 20,
                color: colors.grey,
                marginHorizontal: 5,
                marginRight: 10,
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'column' }}>
          {faqs.map((faq, index) => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                paddingBottom: 40,
                paddingRight: 20,
                marginTop: -40,
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
                  {faq.title}
                </Text>
                <Text
                  style={[
                    AppStyles.regularText,
                    { color: 'grey', paddingTop: 20, paddingHorizontal: 25 },
                  ]}>
                  {faq.subTitle}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default ReadMoreReview;

const styles = StyleSheet.create({
  selectBtn: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderColor: 'rgba(13, 131, 238,.8)',
    marginLeft: 10,
    borderRadius: 20,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    backgroundColor: 'rgba(255,255,255,1)',
    height: 40,
    borderRadius: 30,
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  activeTabItem: {
    width: '100%',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    paddingTop: 10,
  },
  index: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginRight: 10,
  },
  reviewContainer: {
    width: '100%',
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    marginBottom: 10,
  },
  reviewText: {
    backgroundColor: colors.white,
    width: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    borderRadius: 5,
    paddingHorizontal: 10,
    translateY: -35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
