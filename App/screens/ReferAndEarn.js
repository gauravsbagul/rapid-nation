import React, { Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import { colors } from '../Asset/colors/colors';
import Button from '../components/Button';
import { images } from '../Asset/images/images';
import { AppStyles } from '../AppStyles/Styles';
const ReferAndEarn = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.lightWhite }}>
      <Header noMic />
      <View style={{ flex: 1 }}>
        <Image
          style={{ height: 170, width: '100%', marginVertical: 15 }}
          resizeMode="contain"
          source={images.refer_big}
        />
        <Text
          style={[
            AppStyles.mediumBold,
            { paddingHorizontal: 35, textAlign: 'center', marginBottom: 10 },
          ]}>
          Invite your friends by sharing your Referral Link
        </Text>
        <View
          style={{
            backgroundColor: colors.white,
            marginHorizontal: 18,
            paddingVertical: 15,
            marginVertical: 20,
          }}>
          <Text
            style={[
              AppStyles.mediumBold,
              { color: colors.primaryBlue, textAlign: 'center' },
            ]}>
            INP0468
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 18,
            paddingVertical: 15,
            marginVertical: 10,
            marginBottom: 15,
          }}>
          <Text
            style={[
              AppStyles.medium,
              { color: colors.primaryBlue, textAlign: 'center' },
            ]}>
            Share with
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image
            style={{ width: 50, height: 50 }}
            resizeMode="contain"
            source={images.twitter_big}
          />
          <Image
            style={{ width: 50, height: 50 }}
            resizeMode="contain"
            source={images.linkedin_big}
          />
          <Image
            style={{ width: 50, height: 50 }}
            resizeMode="contain"
            source={images.facebook_big}
          />
          <Image
            style={{ width: 50, height: 50 }}
            resizeMode="contain"
            source={images.insta_big}
          />
        </View>
      </View>
      <Button title="Next" />
    </View>
  );
};

export default ReferAndEarn;

const styles = StyleSheet.create({});
