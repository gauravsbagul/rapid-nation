import React from 'react';
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

const ForgotPasswordOtp = ({ navigation }) => {
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
          // onChangeText={text => onChangeText(text)}
          // value={null}
          // maxLength={1}
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
