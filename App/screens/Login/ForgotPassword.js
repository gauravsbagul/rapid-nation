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

const ForgotPassword = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 60,
        flex: 1,
        backgroundColor: '#F9F9F9',
      }}>
      <Text style={Styles.welcome_back}>Forgot password</Text>
      <Text style={[Styles.login_to_continue, { paddingHorizontal: 30 }]}>
        Enter your registered phone number or email id
      </Text>

      <View style={{ paddingTop: 60 }}>
        <View style={Styles.input}>
          <Icon
            name="mobile-phone"
            type="FontAwesome"
            style={{ color: '#8B8B8B', fontSize: 24, marginLeft: -5 }}
          />
          <TextInput
            style={{ marginLeft: 10, width: '90%' }}
            // onChangeText={text => onChangeText(text)}
            // value={null}
            placeholder={'Mobile Number'}
          />
        </View>
      </View>

      <View>
        <Button
          rounded
          style={{
            width: width - 80,
            marginTop: height - 370,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0D83EE',
          }}
          onPress={() => {
            navigation.navigate('ForgotPasswordOtp');
          }}>
          <Text style={{ color: '#fff' }}>Next</Text>
        </Button>
      </View>
    </View>
  );
};

export default ForgotPassword;
