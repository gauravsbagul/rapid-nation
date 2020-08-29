import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/Header';
import { colors } from '../Asset/colors/colors';
import { images } from '../Asset/images/images';
import { AppStyles } from '../AppStyles/Styles';

const Notification = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.lightWhite }}>
      <Header title="My Profile" noMic />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ width: 130, height: 130 }}
          resizeMode="contain"
          source={images.notify_bell}
        />
        <Text
          style={[AppStyles.mediumBold, { textAlign: 'center', marginTop: 3 }]}>
          No Notifications !!
        </Text>
        <Text
          style={[
            AppStyles.smallText,
            {
              textAlign: 'center',
              color: 'grey',
              marginTop: 3,
              fontSize: 10,
              marginBottom: 100,
            },
          ]}>
          You will see notifications related to your orders
        </Text>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
