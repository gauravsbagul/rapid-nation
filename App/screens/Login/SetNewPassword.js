import { Button, Icon } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Keyboard,
  Text,
  TextInput,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import {
  clearForgetPasswordProps,
  clearVerifyOTPProps,
  forgetPassword,
} from '../../Redux/actions/Auth/userAuth';
import Styles from './Styles';

const { width, height } = Dimensions.get('window');

const SetNewPassword = (props) => {
  const { navigation } = props;
  const [navParams, setNavParams] = useState(props.route?.params.data);

  const [newPassword, setNewPassword] = useState('');
  const [newConfirmPassword, setNewConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (props.navigation.isFocused()) {
      if (props.user?.forgotPassword) {
        console.log(
          'SetNewPassword -> rops.user?.forgotPassword',
          props.user?.forgotPassword,
        );
        if (
          !props.user?.forgotPassword?.error &&
          props.user?.forgotPassword?.response?.response
        ) {
          console.log(
            'SetNewPassword -> props.user?.forgotPassword?.response?.response',
            props.user?.forgotPassword?.response?.response,
          );
          setIsLoading(false);
          if (!props.user?.forgotPassword?.response?.status) {
            props.clearForgetPasswordProps();
            Alert.alert(
              ``,
              props.user?.forgotPassword?.response?.response,
              [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('Login'),
                },
              ],
              {
                cancelable: false,
              },
            );
          } else {
            props.clearForgetPasswordProps();
            Alert.alert(
              ``,
              props.user?.forgotPassword?.response?.response,
              [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('Login'),
                },
              ],
              {
                cancelable: false,
              },
            );
          }
        } else {
          setIsLoading(false);
          props.clearForgetPasswordProps();
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

  const onSetNewPassword = () => {
    if (newPassword != newConfirmPassword) {
      Alert.alert(
        ``,
        'New Password and Confirm Password must be same',
        [{ text: 'OK' }],
        {
          cancelable: false,
        },
      );
    } else {
      let data = {
        customerid: navParams.customerid,
        otp: navParams.otp,
        new_password: newPassword,
        confirm_password: newConfirmPassword,
      };
      setIsLoading(true);
      props.forgetPassword(data);
    }
  };

  return (
    <View
      style={{
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 60,
        flex: 1,
        backgroundColor: '#F9F9F9',
      }}>
      <Text style={Styles.welcome_back}>Set new password</Text>
      <Text
        style={[Styles.login_to_continue, { paddingHorizontal: 30 }]}></Text>

      <View style={{ paddingHorizontal: 20, marginVertical: 60 }}>
        <View style={{ paddingVertical: 10 }}>
          <View style={Styles.input}>
            <Icon
              name="lock"
              type="Entypo"
              style={{ color: '#8B8B8B', fontSize: 18, marginLeft: -10 }}
            />
            <TextInput
              style={{ marginLeft: 10, width: '90%' }}
              onChangeText={(text) => setNewPassword(text)}
              value={newPassword}
              placeholder={'Enter New Password'}
              secureTextEntry={true}
              blurOnSubmit={false}
              onSubmitEditing={() => Keyboard.dismiss()}
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
              onChangeText={(text) => setNewConfirmPassword(text)}
              value={newConfirmPassword}
              placeholder={'Repeat New Password'}
              secureTextEntry={true}
              blurOnSubmit={false}
              onSubmitEditing={() => Keyboard.dismiss()}
            />
          </View>
        </View>
      </View>

      <View>
        <Button
          rounded
          style={{
            width: width - 80,
            marginTop: height - 490,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0D83EE',
          }}
          onPress={() => onSetNewPassword()}>
          {isLoading ? (
            <ActivityIndicator color={'#fff'} />
          ) : (
            <Text style={{ color: '#fff' }}>Next</Text>
          )}
        </Button>
      </View>
    </View>
  );
};

const mapDispatchToProps = {
  clearVerifyOTPProps,
  forgetPassword,
  clearForgetPasswordProps,
};
const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, mapDispatchToProps)(SetNewPassword);
