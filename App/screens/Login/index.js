import { Button, Icon } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import {
  clearLoginDetailsProps,
  isAuthenticatedFunc,
  loginWithEmailPassword,
} from '../../Redux/actions/Auth/userAuth';
import Styles from './Styles';

const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const { width, height } = Dimensions.get('window');

const Login = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('Login -> props', props);
    if (props.navigation.isFocused()) {
      if (props.user?.loginResponse) {
        if (
          !props.user?.loginResponse?.error &&
          props.user?.loginResponse?.response?.response
        ) {
          setIsLoading(false);
          if (!props.user?.loginResponse?.response?.status) {
            props.clearLoginDetailsProps();
            Alert.alert(
              ``,
              props.user?.loginResponse?.response?.response,
              [
                {
                  text: 'OK',
                },
              ],
              {
                cancelable: false,
              },
            );
          } else {
            props.isAuthenticatedFunc(true);
          }
        } else {
          props.clearLoginDetailsProps();
          Alert.alert(
            ``,
            'Something went wrong, please try again!',
            [{ text: 'OK' }],
            {
              cancelable: false,
            },
          );
        }
      }
    }
  }, [props]);

  const onLogin = () => {
    if (!email || !password || !phone) {
      Alert.alert('', 'Empty field is not allowed', [{ text: 'OK' }], {
        cancelable: false,
      });
      return false;
    } else if (isNaN(email)) {
      if (!emailReg.test(email.trim())) {
        Alert.alert('', 'Please enter valid EmailID', [{ text: 'OK' }], {
          cancelable: false,
        });
        return false;
      } else if (email && password && phone) {
        setIsLoading(true);
        props.loginWithEmailPassword({ email, password });
      }
    } else if (!isNaN(email) && phone.length != 10) {
      Alert.alert('', 'Please enter valid Phone Number', [{ text: 'OK' }], {
        cancelable: false,
      });
      return false;
    } else {
      if (email && password && phone) {
        setIsLoading(true);
        props.loginWithEmailPassword({ password, phone });
      }
    }
  };

  return (
    <View
      style={{
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        flex: 1,
        backgroundColor: '#F9F9F9',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={Styles.skip_now}>Skip Now</Text>
      <View style={{ paddingTop: 15 }}>
        <Text style={Styles.welcome_back}>Welcome Back</Text>
        <Text style={Styles.login_to_continue}>Login to continue</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 20,
          paddingHorizontal: 20,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            borderBottomColor: '#000',
            borderBottomWidth: 3,
            paddingBottom: 20,
            marginTop: 11.5,
            paddingHorizontal: 35,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'rgba(16, 16, 16, 255)',
              //
            }}>
            Login
          </Text>
        </View>

        <View
          style={{
            // marginStart: 60.5,
            marginHorizontal: 30,
            backgroundColor: '#ccc',
            height: 42,
            width: 1,
          }}
        />

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Signup');
          }}
          style={{
            // borderBottomColor: "#000",
            // borderBottomWidth: 3,
            paddingBottom: 20,
            marginTop: 11.5,
            paddingHorizontal: 30,
          }}>
          <Text
            style={{
              // fontWeight: "bold",
              fontSize: 16,
              color: 'rgba(0, 0, 0, 255)',
            }}>
            Signup
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={{ paddingVertical: 10 }}>
          <View style={Styles.input}>
            <Icon
              name="mobile-phone"
              type="FontAwesome"
              style={{ color: '#8B8B8B', fontSize: 24, marginLeft: -5 }}
            />
            <TextInput
              style={{ marginLeft: 10, width: '90%' }}
              onChangeText={(text) => {
                setEmail(text);
                setPhone(text);
              }}
              value={email || phone}
              placeholder={'Email / Phone Number'}
            />
          </View>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <View style={Styles.input}>
            <Icon
              name="lock"
              type="Entypo"
              style={{ color: '#8B8B8B', fontSize: 18, marginLeft: -10 }}
            />
            <TextInput
              style={{ marginLeft: 10, width: '90%' }}
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder={'Password'}
              secureTextEntry={true}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('ForgotPassword');
          }}>
          <Text
            style={{
              textAlign: 'center',
              paddingTop: 15,
              color: '#0D83EE',
              fontSize: 12,
            }}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Button
          rounded
          style={{
            width: width - 80,
            marginTop: 30,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0D83EE',
          }}
          onPress={() => onLogin()}>
          <Text style={{ color: '#fff' }}>Login</Text>
        </Button>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
          }}>
          <Text style={{ fontSize: 13 }}>A new user ?</Text>
          <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
            {' '}
            New Register
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: height - 640,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#A7A5A5',
            fontSize: 15,
            textAlign: 'center',
            paddingBottom: 10,
          }}>
          Login with
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 25,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 7,
            }}>
            <Image
              source={require('@Ass/fb.png')}
              style={{ height: 53, width: 53 }}
            />
            <Text style={{ color: '#141313', paddingLeft: 10, fontSize: 15 }}>
              Facebook
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 7,
            }}>
            <Image
              source={require('@Ass/google.png')}
              style={{ height: 53, width: 53 }}
            />
            <Text style={{ color: '#141313', paddingLeft: 10, fontSize: 15 }}>
              Google
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = {
  loginWithEmailPassword,
  clearLoginDetailsProps,
  isAuthenticatedFunc,
};
const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
