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
import { AppStyles } from '../AppStyles/Styles';
import { colors } from '../Asset/colors/colors';

const PrivacyPolicy = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.lightWhite }}>
      <ScrollView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
        <Header title="Privacy Policy" noMic />

        <View
          style={[
            styles.inputLike,
            {
              backgroundColor: colors.white,
              marginHorizontal: 18,
              paddingVertical: 10,
              marginVertical: 20,
              marginTop: 90,
            },
          ]}>
          <Text style={[AppStyles.regularText, { color: 'grey', padding: 7 }]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  inputLike: {
    marginVertical: 8,
    width: '92%',
    alignSelf: 'center',
    backgroundColor: colors.white,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 30,
    paddingTop: 17,
    paddingBottom: 250,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
