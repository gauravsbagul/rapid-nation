import React, { Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../Asset/colors/colors';
import { AppStyles } from '../AppStyles/Styles';
import { images } from '../Asset/images/images';

const { width, height } = Dimensions.get('screen');

const Account = ({ navigation }) => {
  const menuItems = [
    { title: 'My Profile', imag: images.menu_profile },
    { title: 'My Wallet', imag: images.menu_my_wallet },
    { title: 'My Order', imag: images.menu_my_orders },
    { title: 'Subscription', imag: images.menu_subscription },
    { title: 'Notification', imag: images.menu_notify },
    { title: 'Refer and Earn', imag: images.menu_reffer },
    { title: 'Blog', imag: images.menu_blog },
    { title: 'Support', imag: images.menu_support },
    { title: 'Offers', imag: images.menu_offers },
    { title: "FAQ's", imag: images.menu_faqs },
    { title: 'Privacy Policy', imag: images.menu_privacy },
    { title: 'Rate Us', imag: images.menu_rate_us },
    { title: 'Service Area', imag: images.menu_service },
    { title: 'Join Us', imag: images.menu_join_us },
  ];
  return (
    <Fragment>
      <StatusBar backgroundColor={'#585DFF'} barStyle="light-content" />
      <LinearGradient
        colors={['#585DFF', '#6BF5FB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ width: '100%', height: '100%' }}>
        <ScrollView>
          <View style={styles.bigCircle} />
          <View style={styles.smallCircle} />

          <Text
            style={[
              AppStyles.semiBold,
              {
                textAlign: 'center',
                marginVertical: 30,
                color: colors.white,
              },
            ]}>
            Account info
          </Text>

          <View
            style={{
              height: 10,
              justifyContent: 'center',
              alignItems: 'center',
              width: 60,
              backgroundColor: colors.white,
              borderTopRightRadius: 8,
            }}
          />
          {menuItems.map((item, key) => (
            <View style={{ flexDirection: 'row' }} key={key}>
              <View
                style={{
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 60,
                  backgroundColor: colors.white,
                }}>
                <Image
                  source={item.imag}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  height: 50,
                  justifyContent: 'center',
                  width: 200,
                }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate(item.title)}>
                  <Text
                    style={[
                      AppStyles.semiBold,
                      { color: 'white', marginLeft: 25, fontSize: 15 },
                    ]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
          {/* Play Store Logo */}
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                width: 60,
                backgroundColor: colors.white,
              }}
            />
            <View style={{ height: 50, justifyContent: 'center', width: 200 }}>
              <Image
                source={images.playstore_logo}
                style={{ width: 100, height: 50, marginLeft: 25 }}
                resizeMode="contain"
              />
            </View>
          </View>
          {/* Gap */}
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 5,
                justifyContent: 'center',
                alignItems: 'center',
                width: 60,
                backgroundColor: colors.white,
              }}
            />
            <View style={{ height: 5, justifyContent: 'center', width: 200 }} />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                width: 60,
                backgroundColor: colors.white,
              }}>
              <Image
                source={images.menu_log_out}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
            </View>
            <View style={{ height: 50, justifyContent: 'center', width: 200 }}>
              <Text
                style={[
                  AppStyles.semiBold,
                  { color: 'white', marginLeft: 25, fontSize: 15 },
                ]}>
                Log Out
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 10,
              justifyContent: 'center',
              alignItems: 'center',
              width: 60,
              backgroundColor: colors.white,
              borderBottomRightRadius: 8,
            }}
          />
          {/* Menu */}

          {/* <View style={{ position: 'absolute', height: height * 6 / 5, width: height * 6 / 5, borderColor: 'rgba(255,255,255,.1)', borderWidth: 25, borderRadius: 1000, translateX: width - 250, translateY: -130 }} />
                <View style={{ position: 'absolute', height: height * 6 / 5, width: height * 6 / 5, borderColor: 'rgba(255,255,255,.1)', borderWidth: 25, borderRadius: 1000, translateX: width - 200, translateY: -125 }} /> */}
        </ScrollView>
      </LinearGradient>
    </Fragment>
  );
};

export default Account;

const styles = StyleSheet.create({
  bigCircle: {
    position: 'absolute',
    height: 800,
    width: 800,
    borderRadius: 1000,
    borderColor: 'rgba(255,255,255,.07)',
    borderWidth: 25,
    top: height / 2 - 435,
    left: width / 2 - 105,
  },
  smallCircle: {
    position: 'absolute',
    height: 700,
    width: 700,
    borderRadius: 1000,
    borderColor: 'rgba(255,255,255,.07)',
    borderWidth: 25,
    top: height / 2 - 390,
    left: width / 2 - 50,
  },
});
