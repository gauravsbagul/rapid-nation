import { Button, Icon } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { signUp, getOTP } from '../../actions/Auth/userActions';
import { OtpVerify } from './OtpVerify';
import Styles from './Styles';

const { width, height } = Dimensions.get('window');
const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Signup = (props) => {
  const [verify, setVerify] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (props.navigation.isFocused()) {
      if (props.user?.registerResponse) {
        if (
          !props.user?.registerResponse?.error &&
          props.user?.registerResponse?.response?.response &&
          props.user?.registerResponse?.response?.status
        ) {
          setIsLoading(false);
          Alert.alert(
            ``,
            props.user?.registerResponse?.response?.response,
            [
              {
                text: 'OK',
                onPress: () => props.navigation.navigate('SelectLocation'),
              },
            ],
            {
              cancelable: false,
            },
          );
        } else {
          Alert.alert(``, 'Please Enter valid Phone Number', [{ text: 'OK' }], {
            cancelable: false,
          });
        }
      }
    }
  }, [props]);

  const onVerifyPhone = () => {
    if (phone.length != 10) {
      Alert.alert(
        ``,
        'Something went wrong please try again!',
        [{ text: 'OK' }],
        {
          cancelable: false,
        },
      );
    } else {
      props.getOTP(phone);
      setIsModalVisible(true);
    }
  };

  const onVerifyOtp = () => {
    setIsModalVisible(!isModalVisible);
    setVerify(true);
  };

  const onSignUp = () => {
    if (!email || !password || !phone || !name) {
      Alert.alert('', 'Empty field is not allowed', [{ text: 'OK' }], {
        cancelable: false,
      });
      return false;
    } else if (email) {
      if (!emailReg.test(email.trim())) {
        Alert.alert('', 'Please enter valid Email Id', [{ text: 'OK' }], {
          cancelable: false,
        });
      } else {
        if (email && password && phone && name) {
          setIsLoading(true);
          props.signUp({ email, password, phone, name });
        }
      }
    }
  };

  return (
    <View
      style={{
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        backgroundColor: '#F9F9F9',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{ paddingTop: 15 }}>
        <Text style={Styles.welcome_back}>Hey There</Text>
        <Text style={Styles.login_to_continue}>Sign up to continue</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
          paddingHorizontal: 10,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Login');
          }}
          style={{
            paddingBottom: 20,
            marginTop: 11.5,
            paddingHorizontal: 35,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'rgba(0, 0, 0, 255)',
            }}>
            Login
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginHorizontal: 30,
            backgroundColor: '#ccc',
            height: 42,
            width: 1,
          }}
        />
        <View
          style={{
            borderBottomColor: '#000',
            borderBottomWidth: 3,
            paddingBottom: 20,
            marginTop: 11.5,
            paddingHorizontal: 30,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'rgba(16, 16, 16, 255)',
            }}>
            Signup
          </Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={{ paddingVertical: 6 }}>
          <View style={Styles.input}>
            <Icon
              name="user"
              type="FontAwesome"
              style={{ color: '#8B8B8B', fontSize: 20, marginLeft: -10 }}
            />
            <TextInput
              style={{ marginLeft: 10, width: '90%' }}
              onChangeText={(text) => setName(text)}
              value={name}
              placeholder={'Name'}
            />
          </View>
        </View>

        <View style={{ paddingVertical: 6 }}>
          <View style={Styles.input}>
            <Icon
              name="email"
              type="MaterialCommunityIcons"
              style={{ color: '#8B8B8B', fontSize: 18, marginLeft: -10 }}
            />
            <TextInput
              style={{ marginLeft: 10, width: '90%' }}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder={'Email ID'}
            />
          </View>
        </View>

        <View style={{ paddingVertical: 6 }}>
          <View style={Styles.input}>
            <Icon
              name="mobile-phone"
              type="FontAwesome"
              style={{ color: '#8B8B8B', fontSize: 24, marginLeft: -5 }}
            />
            <TextInput
              style={{ marginLeft: 10, width: '85%' }}
              onChangeText={(text) => setPhone(text)}
              value={phone}
              placeholder={'Phone Number *'}
            />
            <TouchableOpacity
              onPress={() => {
                // onVerifyPhone();
              }}>
              <Text style={{ fontSize: 10, color: '#FF0000' }}>
                {!verify ? 'Verify' : 'Verified'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ paddingVertical: 6 }}>
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
      </View>

      <View style={{ marginTop: 15 }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#000000',
            fontSize: 10,
            fontFamily: 'Montserrat',
            paddingVertical: 3,
          }}>
          By Singing up your Agree to Our TC *
        </Text>
        <Button
          rounded
          disabled={isLoading}
          style={{
            width: width - 80,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0D83EE',
          }}
          onPress={() => {
            onSignUp();
          }}>
          {isLoading ? (
            <ActivityIndicator color={'#fff'} />
          ) : (
            <Text style={{ color: '#fff' }}>Signup</Text>
          )}
        </Button>
        {/* <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingTop: 10 }}>
                    <Text style={{ fontSize: 13 }}>
                        A new user ?
                    </Text>
                    <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                        {" "} {" "}
                        New Register
                    </Text>
                </View> */}
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
          Signup with
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

      {/* model */}
      <Modal
        isVisible={isModalVisible}
        swipeDirection={['down']}
        onSwipeMove={(val) => {}}
        onSwipeComplete={() => {
          setIsModalVisible(false);
        }}>
        <OtpVerify phone={phone} Verified={() => onVerifyOtp()} />
      </Modal>
    </View>
  );
};

const mapDispatchToProps = {
  signUp,
  getOTP,
};
const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
