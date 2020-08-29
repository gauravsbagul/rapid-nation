import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Icon, Button } from 'native-base';
import Styles from './Styles';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window');

export const OtpVerify = (props) => {
  console.log('OtpVerify -> props', props);
  const { Verified, phone } = props;
  console.log('OtpVerify -> Verified', Verified);
  return (
    <View
      style={{
        flex: 1,
        // width,
        // height,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#fff',
          paddingVertical: 40,
          borderRadius: 25,
        }}>
        <View style={{ paddingTop: 0 }}>
          <Text
            style={[
              Styles.welcome_back,
              { textAlign: 'center', alignItems: 'center' },
            ]}>
            OTP
          </Text>
          <Text
            style={[
              Styles.login_to_continue,
              {
                paddingHorizontal: 50,
                fontSize: 12,
                paddingTop: 20,
              },
            ]}>
            We have send the top on {phone} will apply auto to the fields
          </Text>

          <View
            style={{
              marginLeft: -10,
              paddingTop: 80,
              paddingBottom: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TextInput
              style={Styles.otp}
              onChangeText={(text) => onChangeText(text)}
              value={null}
              maxLength={1}
            />
            <TextInput
              style={Styles.otp}
              // onChangeText={text => onChangeText(text)}
              // value={null}
              // placeholder={"Mobile Number"}
            />
            <TextInput
              style={Styles.otp}
              // onChangeText={text => onChangeText(text)}
              // value={null}
              // placeholder={"Mobile Number"}
            />
            <TextInput
              style={Styles.otp}
              // onChangeText={text => onChangeText(text)}
              // value={null}
              // placeholder={"Mobile Number"}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 80,
            }}>
            <Text style={{ color: '#B9B9B9', fontSize: 12 }}>
              If you didn't receive a code !
            </Text>
            <Text style={{ color: '#FF0000', fontSize: 12 }}>RESEND</Text>
          </View>

          <Button
            rounded
            style={{
              width: width - 80,
              // marginTop: height - 430,
              height: 50,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              backgroundColor: '#0D83EE',
            }}
            onPress={() => {
              Verified();
            }}>
            <Text style={{ color: '#fff' }}>Verify</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};
