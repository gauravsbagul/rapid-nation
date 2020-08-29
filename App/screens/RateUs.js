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

const RateUs = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.lightWhite }}>
      <Header title="Rate Us" noMic />
      <View style={{ flex: 1 }}></View>
      <Button title="Done" />
      <Button title="Not Now" secondary />
    </View>
  );
};

export default RateUs;

const styles = StyleSheet.create({});
