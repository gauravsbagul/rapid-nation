import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Icon, Button, Container } from 'native-base';
import Styles from './Styles';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window');

export const OtpVerify = (props) => {
  const [otp, setOtp] = useState('');
  const { onVerifyOtp, phone } = props;

  const verifyOTP = () => {
    console.log('verifyOTP -> otp', otp);
    console.log('verifyOTP -> otp.length', otp.length);
    if (otp.length != 4) {
      Alert.alert(``, 'Please 4 digit OTP', [{ text: 'OK' }], {
        cancelable: false,
      });
    } else {
      console.log('verifyOTP -> else');
      onVerifyOtp(otp);
    }
  };

  return (
    <Container
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000',
      }}>
      <View
        style={{
          backgroundColor: '#fff',
          paddingVertical: 40,
          borderRadius: 25,
          paddingHorizontal: 20,
          height: '50%',
        }}>
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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 1,
          }}>
          <TextInput
            style={{ textAlign: 'center' }}
            onChangeText={(text) => setOtp(text)}
            value={null}
            autoFocus={true}
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
            marginTop: 20,
          }}>
          <Text style={{ color: '#B9B9B9', fontSize: 12 }}>
            If you didn't receive a code !
          </Text>
          <Text style={{ color: '#FF0000', fontSize: 12 }}>RESEND</Text>
        </View>
        <View>
          <Button
            rounded
            style={{
              width: '100%',
              marginTop: 20,
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              backgroundColor: '#0D83EE',
            }}
            onPress={() => verifyOTP()}>
            <Text
              style={{
                color: '#fff',
              }}>
              Verify
            </Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};
