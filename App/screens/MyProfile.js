import React, { Fragment, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Header from '../components/Header';
import { colors } from '../Asset/colors/colors';
import { images } from '../Asset/images/images';
import { Icon } from 'native-base';
import { AppStyles } from '../AppStyles/Styles';
import Button from '../components/Button';
import Modal from 'react-native-modal';
const MyProfile = () => {
  let [isModalVisible, setModalVisibility] = useState(false);
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
          <Image source={images.profile_02} style={styles.image} />
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
          <Text style={AppStyles.regularText}>Jared Rice</Text>
        </View>
        <View style={styles.inputLike}>
          <Icon name="email" type="MaterialIcons" style={styles.icon} />
          <Text style={AppStyles.regularText}>Jaredrice@gmail.com</Text>
        </View>
        <View style={styles.inputLike}>
          <Icon name="mobile-phone" type="FontAwesome" style={styles.icon} />
          <Text style={AppStyles.regularText}>9988776655</Text>
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
            D506 ozone every green, Harlur Main Road, PWD Quarters, 1st Sector,
            Off Sarjapura HSR Layout, Bengaluru, Karnataka 560102, Karnataka -
            India
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

export default MyProfile;

const styles = StyleSheet.create({
  modalBg: {
    backgroundColor: colors.lightWhite,
    marginVertical: 60,
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
  icon: { fontSize: 20, marginHorizontal: 5, marginRight: 10, color: 'grey' },
  lockIcon: { height: 16, width: 16, marginHorizontal: 5, marginRight: 10 },
  rightText: { marginLeft: 'auto', marginRight: 15, marginVertical: 5 },
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
