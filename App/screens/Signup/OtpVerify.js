import { Button, Container } from 'native-base';
import React, { useRef, useState } from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Styles from './Styles';

const { width, height } = Dimensions.get('window');

export const OtpVerify = (props) => {
  const [otp, setOtp] = useState([]);
  const { onVerifyOtp, phone } = props;
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  const verifyOTP = () => {
    if (otp.length != 4) {
      Alert.alert(``, 'Please 4 digit OTP', [{ text: 'OK' }], {
        cancelable: false,
      });
    } else {
      if (otp.join('').toString() != props.receivedOTP.toString()) {
        Alert.alert(``, 'Wrong OTP', [{ text: 'OK' }], {
          cancelable: false,
        });
      } else {
        onVerifyOtp(otp.join(''));
      }
    }
  };

  const onChangeText = (value, index) => {
    if (value.length) {
      let tempOtp = [...otp];
      tempOtp[index] = value;
      setOtp(tempOtp);
      if (index == 0) {
        inputRef1.current.focus();
      } else if (index == 1) {
        inputRef2.current.focus();
      } else if (index == 2) {
        inputRef3.current.focus();
      }
    }
  };

  return (
    <Container style={styles.container}>
      <View style={styles.whiteWrapper}>
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
            justifyContent: 'space-around',
            paddingVertical: 10,
          }}>
          <TextInput
            style={Styles.otp}
            onChangeText={(text) => onChangeText(text, 0)}
            maxLength={1}
            autoFocus={true}
          />
          <TextInput
            style={Styles.otp}
            onChangeText={(text) => onChangeText(text, 1)}
            maxLength={1}
            ref={inputRef1}
          />
          <TextInput
            style={Styles.otp}
            onChangeText={(text) => onChangeText(text, 2)}
            maxLength={1}
            ref={inputRef2}
          />
          <TextInput
            style={Styles.otp}
            onChangeText={(text) => onChangeText(text, 3)}
            maxLength={1}
            ref={inputRef3}
          />
        </View>
        <View style={styles.resendOption}>
          <Text style={{ color: '#B9B9B9', fontSize: 12 }}>
            If you didn't receive a code !
          </Text>
          <Text style={{ color: '#FF0000', fontSize: 12 }}>RESEND</Text>
        </View>
        <View>
          <Button rounded style={styles.button} onPress={() => verifyOTP()}>
            <Text style={{ color: '#fff' }}>Verify</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000',
  },
  whiteWrapper: {
    backgroundColor: '#fff',
    paddingVertical: 40,
    borderRadius: 25,
    paddingHorizontal: 20,
    height: '50%',
  },

  button: {
    width: '100%',
    marginTop: 20,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D83EE',
  },
  resendOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
