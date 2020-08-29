import { Icon } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { AppStyles } from '../AppStyles/Styles';
import { colors } from '../Asset/colors/colors';
import { images } from '../Asset/images/images';
import Button from '../components/Button';
import Header from '../components/Header';
import {
  clearGetUserProfileProps,
  getUserProfileFunc,
} from '../Redux/actions/Profile/userProfile';

const MyProfile = (props) => {
  let [isModalVisible, setModalVisibility] = useState(false);
  const [myProfileData, setMyProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    props.getUserProfileFunc();
    if (props.navigation.isFocused()) {
      if (props.profile?.userProfileResponse) {
        if (
          !props.profile?.userProfileResponse?.error &&
          props.profile?.userProfileResponse?.response?.response
        ) {
          setIsLoading(false);
          if (!props.profile?.userProfileResponse?.response?.status) {
            Alert.alert(
              ``,
              props.profile?.userProfileResponse?.response?.response,
              [
                {
                  text: 'OK',
                  onPress: () => props.clearGetUserProfileProps(),
                },
              ],
              {
                cancelable: false,
              },
            );
          } else {
            setMyProfileData(
              props.profile?.userProfileResponse?.response?.response,
            );
          }
        } else {
          props.clearGetUserProfileProps();
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
    return () => {};
  }, []);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
      <Header title="My Profile" noMic />
      <Modal
        isVisible={isModalVisible}
        swipeDirection={['down', 'left', 'right']}
        onSwipeComplete={() => {
          setModalVisibility(false);
        }}>
        <View style={styles.modalBg}>
          <Text
            style={[
              AppStyles.semiBold,
              { textAlign: 'center', marginTop: 20, marginBottom: 30 },
            ]}>
            Change Password
          </Text>
          <View style={styles.input}>
            <Image
              source={images.lock}
              style={styles.lockIcon}
              resizeMode="contain"
            />
            <TextInput
              style={[AppStyles.regularText, { flexGrow: 1 }]}
              placeholderTextColor="black"
              placeholder="Old Password"
            />
          </View>
          <View style={styles.input}>
            <Image
              source={images.lock}
              style={styles.lockIcon}
              resizeMode="contain"
            />
            <TextInput
              style={[AppStyles.regularText, { flexGrow: 1 }]}
              placeholderTextColor="black"
              placeholder="New Password"
            />
          </View>
          <View style={styles.input}>
            <Image
              source={images.lock}
              style={styles.lockIcon}
              resizeMode="contain"
            />
            <TextInput
              style={[AppStyles.regularText, { flexGrow: 1 }]}
              placeholderTextColor="black"
              placeholder="Confirm Password"
            />
          </View>

          <Button title="Done" />
          <View style={{ position: 'absolute', top: 10, right: 10 }}>
            <Icon
              onPress={() => setModalVisibility(false)}
              style={{ color: colors.grey }}
              name="cross"
              type="Entypo"
            />
          </View>
        </View>
      </Modal>
      <View style={{ flex: 1, paddingVertical: 15, paddingHorizontal: 7 }}>
        {/*  */}
        <View style={styles.imageContainer}>
          <Image
            source={
              myProfileData.avatar
                ? { uri: myProfileData.avatar }
                : images.profile_02
            }
            style={styles.image}
          />
          <View style={styles.iconContainer}>
            <Icon
              name="camera"
              type="Entypo"
              style={{ color: 'white', fontSize: 11 }}
            />
          </View>
        </View>

        {/* Details */}
        <View style={styles.inputLike}>
          <Icon name="user" type="FontAwesome" style={styles.icon} />
          <Text style={AppStyles.regularText}>{myProfileData.name}</Text>
        </View>
        <View style={styles.inputLike}>
          <Icon name="email" type="MaterialIcons" style={styles.icon} />
          <Text style={AppStyles.regularText}>{myProfileData.email}</Text>
        </View>
        <View style={styles.inputLike}>
          <Icon name="mobile-phone" type="FontAwesome" style={styles.icon} />
          <Text style={AppStyles.regularText}>{myProfileData.phone}</Text>
          <Text
            style={[
              AppStyles.smallText,
              { marginLeft: 'auto', marginRight: 7, color: colors.green },
            ]}>
            Verified
          </Text>
        </View>
        <View style={styles.inputLike}>
          <Image
            source={images.lock}
            style={styles.lockIcon}
            resizeMode="contain"
          />
          <Text style={AppStyles.regularText}>********</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setModalVisibility(true)}
          style={styles.rightText}>
          <Text style={[AppStyles.smallText, { color: colors.primaryBlue }]}>
            Change Password
          </Text>
        </TouchableOpacity>

        {/* Description */}
        <View style={styles.inputLike}>
          <Text style={[AppStyles.medium, { color: 'black', padding: 7 }]}>
            {myProfileData.location}
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.rightText}>
          <Text
            style={[
              AppStyles.semiBold,
              { color: colors.primaryBlue, fontSize: 15 },
            ]}>
            {' '}
            + Add your New Address
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 50 }} />
    </ScrollView>
  );
};
const mapDispatchToProps = {
  getUserProfileFunc,
  clearGetUserProfileProps,
};
const mapStateToProps = ({ profile }) => {
  return {
    profile,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);

const styles = StyleSheet.create({
  modalBg: {
    backgroundColor: colors.lightWhite,
    height: '45%',
    borderRadius: 20,
    paddingBottom: 13,
    paddingHorizontal: 5,
  },
  imageContainer: {
    alignSelf: 'center',
    marginVertical: 18,
    position: 'relative',
    marginBottom: 25,
  },
  iconContainer: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 100,
    position: 'absolute',
    bottom: 1,
    right: 1,
    padding: 4,
    borderWidth: 5,
    borderColor: '#dce9f5',
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 50,
    borderWidth: 7,
    borderColor: '#dce9f5',
  },
  inputLike: {
    marginVertical: 8,
    width: '92%',
    alignSelf: 'center',
    backgroundColor: colors.white,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  icon: {
    fontSize: 20,
    marginHorizontal: 5,
    marginRight: 10,
    color: 'grey',
  },
  lockIcon: {
    height: 16,
    width: 16,
    marginHorizontal: 5,
    marginRight: 10,
  },
  rightText: {
    marginLeft: 'auto',
    marginRight: 15,
    marginVertical: 5,
  },
  input: {
    marginVertical: 8,
    width: '92%',
    alignSelf: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
