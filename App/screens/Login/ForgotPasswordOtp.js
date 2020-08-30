import React, { useRef, useState } from 'react';
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

const { width, height } = Dimensions.get('window');

const ForgotPasswordOtp = (props) => {
  const { navigation } = props;
  const [otp, setOtp] = useState([]);
  const { onVerifyOtp, phone } = props;
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  const verifyOTP = (props) => {
    if (otp.length != 4) {
      Alert.alert(``, 'Please 4 digit OTP', [{ text: 'OK' }], {
        cancelable: false,
      });
    } else {
      //  onVerifyOtp(otp.join(''));
      console.log("verifyOTP -> otp.join('')", otp.join(''));
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
    <View
      style={{
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 60,
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <Text style={Styles.welcome_back}>Forgot password</Text>
      <Text style={[Styles.login_to_continue, { paddingHorizontal: 30 }]}>
        Enter 4 digit OTP sent to your registered phone number or email id
      </Text>

      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 40,
          flexDirection: 'row',
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

      <View>
        <Button
          rounded
          style={{
            width: width - 80,
            marginTop: height - 430,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0D83EE',
          }}
          onPress={() => {
            navigation.navigate('SetNewPassword');
          }}>
          <Text style={{ color: '#fff' }}>Next</Text>
        </Button>
      </View>
    </View>
  );
};

export default ForgotPasswordOtp;
