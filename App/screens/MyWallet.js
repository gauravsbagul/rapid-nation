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
import { AppStyles } from '../AppStyles/Styles';
import { Icon } from 'native-base';
import { images } from '../Asset/images/images';

const MyWallet = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
      <Header title="My Wallet" noMic />
      <View style={{ flex: 1 }}>
        <View style={styles.walletContainer}>
          <View style={styles.imageCon}>
            <Image
              source={images.wallet}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={AppStyles.smallBold}>Total wallet Balance</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon
                name="rupee"
                type="FontAwesome"
                style={{ color: 'grey', fontSize: 16, marginRight: 3 }}
              />
              <Text style={AppStyles.mediumBold}>100</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyWallet;

const styles = StyleSheet.create({
  walletContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: colors.white,
    marginVertical: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageCon: {
    backgroundColor: colors.lightWhite,
    width: 45,
    height: 45,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
