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

const Subscription = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
      <Header title="Subscription" noMic />
      <View style={{ flex: 1 }}>{/* <Text>Subscription</Text> */}</View>
    </ScrollView>
  );
};

export default Subscription;

const styles = StyleSheet.create({});
