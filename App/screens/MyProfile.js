import { Container, Content, Icon } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { AppStyles } from '../AppStyles/Styles';
import { colors } from '../Asset/colors/colors';
import { images } from '../Asset/images/images';
import Button from '../components/Button';
import Header from '../components/Header';
import {
  clearGetUserProfileProps,
  clearUpdateAddressProps,
  clearUploadProfilePicProps,
  getUserProfileFunc,
  updateAddress,
  uploadProfilePic,
} from '../Redux/actions/Profile/userProfile';

const MyProfile = (props) => {
  let [isModalVisible, setModalVisibility] = useState(false);
  const [myProfileData, setMyProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAvtarLoading, setIsAvtarLoading] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [newAddress, setNewAddress] = useState('');
  const [showAddressInput, setShowAddressInput] = useState(false);

  useEffect(() => {
    props.getUserProfileFunc();
    return () => {};
  }, []);
  useEffect(() => {
    if (props.navigation.isFocused()) {
      console.log(
        'MyProfile -> props.profile?.userProfileResponse',
        props.profile?.userProfileResponse,
      );
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

      if (
        props.profile?.changeProfilePic?.response &&
        props.profile?.changeProfilePic?.response?.status
      ) {
        props.clearUploadProfilePicProps();
        props.getUserProfileFunc();
      } else if (props.profile?.changeProfilePic) {
        props.clearUploadProfilePicProps();
        Alert.alert(
          ``,
          'Something went wrong, please try again!',
          [{ text: 'OK' }],
          {
            cancelable: false,
          },
        );
      }
      if (
        props.profile?.updateAddressResponse?.response &&
        props.profile?.updateAddressResponse?.response?.status
      ) {
        props.clearUpdateAddressProps();
        props.getUserProfileFunc();
        setShowAddressInput(false);
        Alert.alert(
          ``,
          props.profile?.updateAddressResponse?.response?.message,
          [{ text: 'OK' }],
          {
            cancelable: false,
          },
        );
      } else if (props.profile?.updateAddressResponse) {
        props.clearUpdateAddressProps();
        setShowAddressInput(false);
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
    return () => {};
  }, [props]);

  const onPickImage = async () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    setIsAvtarLoading(true);
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        const source = { uri: response.uri };
        setSelectedAvatar(source);

        const data = {
          uri: response.uri,
          name: new Date().getTime().toString(),
          type: `image/${
            response.type
              ? response.type.split('/')[1]
              : response.fileName.split('.')[1]
          }`,
        };
        setIsAvtarLoading(false);
        props.uploadProfilePic(data);
      }
    });
  };
  let a = JSON.stringify(myProfileData?.address);
  console.log('MyProfile -> a', a);

  return (
    <Container>
      <Header title="My Profile" noMic />
      <Content style={{ flex: 1, backgroundColor: colors.lightWhite }}>
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
            {isAvtarLoading ? (
              <ActivityIndicator style={styles.image} />
            ) : (
              <Image
                source={
                  (myProfileData?.avatar && { uri: myProfileData?.avatar }) ||
                  selectedAvatar ||
                  images.profile_02
                }
                style={styles.image}
              />
            )}
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => onPickImage()}>
              <Icon
                name="camera"
                type="Entypo"
                style={{ color: 'white', fontSize: 11 }}
              />
            </TouchableOpacity>
          </View>

          {/* Details */}
          <View style={styles.inputLike}>
            <Icon name="user" type="FontAwesome" style={styles.icon} />
            <Text style={AppStyles.regularText}>{myProfileData?.name}</Text>
          </View>
          <View style={styles.inputLike}>
            <Icon name="email" type="MaterialIcons" style={styles.icon} />
            <Text style={AppStyles.regularText}>{myProfileData?.email}</Text>
          </View>
          <View style={styles.inputLike}>
            <Icon name="mobile-phone" type="FontAwesome" style={styles.icon} />
            <Text style={AppStyles.regularText}>{myProfileData?.phone}</Text>
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
              {myProfileData?.address?.hasOwnProperty('home')
                ? ''
                : myProfileData?.address}
            </Text>
          </View>

          {showAddressInput ? (
            <>
              <TextInput
                style={styles.addressInput}
                placeholderTextColor="black"
                placeholder="Type you new Address here"
                value={newAddress}
                onChangeText={(text) => setNewAddress(text)}
              />
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.rightText}
                onPress={() => props.updateAddress(newAddress)}>
                <Text
                  style={[
                    AppStyles.semiBold,
                    { color: colors.primaryBlue, fontSize: 15 },
                  ]}>
                  {' '}
                  Add
                </Text>
              </TouchableOpacity>
            </>
          ) : null}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.rightText}
            disabled={showAddressInput}
            onPress={() => setShowAddressInput(true)}>
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
      </Content>
    </Container>
  );
};
const mapDispatchToProps = {
  getUserProfileFunc,
  clearGetUserProfileProps,
  uploadProfilePic,
  clearUploadProfilePicProps,
  updateAddress,
  clearUpdateAddressProps,
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
  addressInput: {
    marginVertical: 8,
    width: '92%',
    height: 100,
    alignSelf: 'center',
    backgroundColor: colors.white,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
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
