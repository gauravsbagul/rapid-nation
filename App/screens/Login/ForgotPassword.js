import { Button, Container, Icon } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Text,
  TextInput,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import {
  clearForgetPasswordProps,
  forgetPassword,
  getOTP,
} from '../../Redux/actions/Auth/userAuth';
import ForgetPasswordOtp from './ForgotPasswordOtp';
import Styles from './Styles';
const { width, height } = Dimensions.get('window');

const ForgotPassword = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    console.log('ForgotPassword -> props', props);
    if (props.navigation.isFocused()) {
      if (props.user?.forgotPassword) {
        if (
          !props.user?.forgotPassword?.error &&
          props.user?.forgotPassword?.response?.response
        ) {
          setIsLoading(false);
          if (!props.user?.forgotPassword?.response?.status) {
            Alert.alert(
              ``,
              props.user?.forgotPassword?.response?.response,
              [
                {
                  text: 'OK',
                  onPress: () => props.clearLoginDetailsProps(),
                },
              ],
              {
                cancelable: false,
              },
            );
          } else {
            setIsLoading(false);
            isModalVisible(true);
          }
        } else {
          setIsLoading(false);
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

  const onVerifyOtp = (otp) => {
    props.verifyOTPFunc({
      phone,
      otp,
    });
  };

  const onForgetPassword = () => {
    if (!email || !phone) {
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
      } else if (email) {
        setIsLoading(true);
        getOTP(email);
      }
    } else if (!isNaN(email) && phone.length != 10) {
      Alert.alert('', 'Please enter valid Phone Number', [{ text: 'OK' }], {
        cancelable: false,
      });
      return false;
    } else {
      if (phone) {
        setIsLoading(true);
        getOTP(phone);
      }
    }
  };

  return (
    <Container
      style={{
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 60,
        flex: 1,
        backgroundColor: '#F9F9F9',
      }}>
      <Modal
        isVisible={isModalVisible}
        swipeDirection={['down']}
        onSwipeMove={(val) => {}}
        onSwipeComplete={() => setIsModalVisible(false)}>
        <ForgetPasswordOtp phone={phone} onVerifyOtp={onVerifyOtp} />
      </Modal>
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
            onChangeText={(text) => {
              setPhone(text);
              setEmail(text);
            }}
            value={phone}
            placeholder={'Mobile Number'}
          />
        </View>
      </View>

      <Button
        rounded
        disabled={isLoading}
        style={{
          width: '100%',
          marginTop: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0D83EE',
        }}
        onPress={() => onForgetPassword()}>
        {isLoading ? (
          <ActivityIndicator color={'#fff'} />
        ) : (
          <Text style={{ color: '#fff' }}>Next</Text>
        )}
      </Button>
    </Container>
  );
};

const mapDispatchToProps = {
  forgetPassword,
  clearForgetPasswordProps,
  getOTP,
};
const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
