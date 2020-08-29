import React from 'react';
import { View, Text } from 'react-native';

import Styles from './Styles';

const Login = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        flex: 1,
      }}>
      <Text style={Styles.skip_now}>Skip Now</Text>
      <Text style={Styles.welcome_back}>Welcome Back</Text>
    </View>
  );
};

export default Login;
