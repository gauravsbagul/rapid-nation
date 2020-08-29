import React, { Fragment, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  TextInput,
} from 'react-native';
import Header from '../components/Header';
import { colors } from '../Asset/colors/colors';
import { AppStyles } from '../AppStyles/Styles';
import { images } from '../Asset/images/images';
import Button from '../components/Button';
import { Icon, CheckBox } from 'native-base';
import MessagesCard from '../components/MessagesCard';
import Modal from 'react-native-modal';

const MessagesAndCheckup = ({ navigation }) => {
  const [gender, setGender] = useState('male');
  const [type, setType] = useState('message');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const messagesArray = [
    { name: 'Makeup', image: images.cleanup_small },
    { name: 'Massage', image: images.message_small },
    { name: 'Threading', image: images.threading_small },
    { name: 'Cleanup', image: images.cleanup_small },
    { name: 'Manicure', image: images.manicure_small },
  ];
  const packagesArray = [
    { name: 'Threading', image: images.threading_blue },
    { name: 'Massage', image: images.message_blue },
    { name: 'Cleanup', image: images.cleanup_blue },
    { name: 'Manicure', image: images.manicure_blue },
    { name: 'Eyelashes', image: images.eyelash_blue },
  ];
  const checkbox1 = [
    { title: "I don't want any massages" },
    { title: 'I want only Head massage' },
    { title: 'I want only Shoulder massage' },
  ];
  const checkbox2 = [
    { title: 'I don’t want any facial' },
    { title: 'Fruit Cleanup - Sara (Sara)' },
    { title: 'Shine & Glow Facial with peel-off mask' },
  ];

  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.header_linear_1}
      />
      <ScrollView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
        <Header onMicPress={() => {}} />
        {/* Modal */}
        <Modal
          isVisible={isModalVisible}
          swipeDirection={['down']}
          onSwipeComplete={() => {
            setIsModalVisible(false);
          }}>
          <View style={styles.modalBg}>
            <View style={{ position: 'absolute', top: 5, right: 5 }}>
              <Icon
                onPress={() => setIsModalVisible(false)}
                style={{ color: colors.grey }}
                name="circle-with-cross"
                type="Entypo"
              />
            </View>

            <Text
              style={{
                ...AppStyles.semiBold,
                textAlign: 'center',
                marginVertical: 10,
              }}>
              Massage
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginBottom: 10,
              }}>
              <Image
                style={{ width: '26%', height: 120 }}
                source={images.modal_hair}
              />
              <Image
                style={{ width: '26%', height: 120 }}
                source={images.modal_male}
              />
              <Image
                style={{ width: '26%', height: 120 }}
                source={images.modal_female}
              />
            </View>
            {/* checkbox 1 */}
            <Text style={styles.modalHeading}>
              Stress Relief-Swedish Massage
            </Text>
            {checkbox1.map((item, index) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 6,
                }}>
                <CheckBox
                  checked={index == 1 || index == 2}
                  color={colors.primaryBlue}
                  style={{ marginRight: 25 }}
                />
                <Text style={AppStyles.medium}>{item.title}</Text>
              </View>
            ))}

            {/* checkbox 2 */}

            <Text style={styles.modalHeading}>Facial</Text>

            {checkbox2.map((item, index) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 6,
                }}>
                <CheckBox
                  checked={index == 0 || index == 2}
                  color={colors.primaryBlue}
                  style={{ marginRight: 25 }}
                />
                <Text style={AppStyles.medium}>{item.title}</Text>
              </View>
            ))}

            {/* Price Box */}
            <View
              style={[
                styles.priceBox,
                { marginTop: 'auto', marginBottom: 0, translateY: 35 },
              ]}>
              <View style={styles.priceBoxRow}>
                <Text style={{ ...AppStyles.regularText, color: colors.white }}>
                  Items
                </Text>
                <Text style={styles.priceBoxCount}>1</Text>
              </View>
              <View style={styles.priceBoxRow}>
                <Icon
                  name="rupee-sign"
                  style={{ color: colors.white, fontSize: 17 }}
                  type="FontAwesome5"
                />
                <Text
                  style={{
                    ...AppStyles.regularText,
                    color: colors.white,
                    marginHorizontal: 4,
                  }}>
                  999
                </Text>
                <Icon
                  name="caretright"
                  style={{ color: colors.white, fontSize: 17 }}
                  type="AntDesign"
                />
              </View>
            </View>
          </View>
        </Modal>

        {/* Select Gender and Services */}
        <View style={styles.selectBoxContainer}>
          <View>
            <Text style={styles.selectBoxHeading}>Service For</Text>
            <View style={{ ...styles.selectBox, paddingLeft: 10 }}>
              <Text style={styles.selectBoxText}>Male</Text>
              <View style={styles.selectIcon} />
            </View>
          </View>
          <View>
            <Text style={styles.selectBoxHeading}>Service</Text>
            <View style={{ ...styles.selectBox, justifyContent: 'center' }}>
              <Text style={styles.selectBoxText}>Massage</Text>
            </View>
          </View>
        </View>

        {/* Item Scroll */}

        {type == 'message' ? (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.messageFlatList}
            data={messagesArray}
            keyExtractor={(_, key) => key}
            renderItem={({ item, index }) => (
              <View
                style={
                  index == 1
                    ? {
                        ...styles.normalItem,
                        backgroundColor: colors.primaryBlue,
                        borderRadius: 20,
                      }
                    : styles.normalItem
                }>
                <Image
                  source={item.image}
                  style={{ width: 10, marginRight: 5 }}
                  resizeMode="contain"
                />
                <Text
                  style={
                    index != 1
                      ? { ...AppStyles.medium, color: 'black' }
                      : { ...AppStyles.medium, color: colors.white }
                  }>
                  {item.name}
                </Text>
              </View>
            )}
          />
        ) : (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={packagesArray}
            keyExtractor={(_, key) => key}
            renderItem={({ item, index }) => (
              <View
                style={
                  index == 1
                    ? {
                        ...styles.packageFlatListItem,
                        borderWidth: 1.5,
                        borderColor: colors.primaryBlue,
                      }
                    : styles.packageFlatListItem
                }>
                <Image
                  source={item.image}
                  style={{ width: 25, marginBottom: 10, height: 25 }}
                  resizeMode="contain"
                />
                <Text
                  style={
                    index == 1
                      ? {
                          ...AppStyles.regularText,
                          color: colors.primaryBlue,
                          textAlign: 'center',
                        }
                      : {
                          ...AppStyles.medium,
                          color: colors.primaryBlue,
                          textAlign: 'center',
                        }
                  }>
                  {item.name}
                </Text>
              </View>
            )}
          />
        )}

        {/* Select Item */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <TouchableOpacity
            style={
              type == 'message'
                ? styles.activeBox
                : { marginHorizontal: 20, paddingBottom: 5 }
            }
            onPress={() => setType('message')}>
            <Text
              style={
                type == 'message'
                  ? { ...AppStyles.regularText, textAlign: 'center' }
                  : { ...AppStyles.medium, textAlign: 'center', color: 'black' }
              }>
              Massage
            </Text>
          </TouchableOpacity>
          <View
            style={{ width: 0.5, height: '80%', backgroundColor: colors.grey }}
          />
          <TouchableOpacity
            style={
              type == 'package'
                ? styles.activeBox
                : { marginHorizontal: 20, paddingBottom: 5 }
            }
            onPress={() => setType('package')}>
            <Text
              style={
                type == 'package'
                  ? { ...AppStyles.regularText, textAlign: 'center' }
                  : { ...AppStyles.medium, textAlign: 'center', color: 'black' }
              }>
              Package
            </Text>
          </TouchableOpacity>
        </View>

        {/* Items */}

        <View style={{ marginVertical: 15, paddingHorizontal: 10 }}>
          {type == 'message' ? (
            <MessagesCard item={{ image: images.head_shoulder }} />
          ) : (
            <MessagesCard
              item={{ image: images.color_care }}
              isPackage
              onPress={() => setIsModalVisible(true)}
            />
          )}
        </View>
        {/* Price */}
        <View style={styles.priceBox}>
          <View style={styles.priceBoxRow}>
            <Text style={{ ...AppStyles.regularText, color: colors.white }}>
              Items
            </Text>
            <Text style={styles.priceBoxCount}>1</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('MessagePackageDetails')}
            style={styles.priceBoxRow}>
            <Icon
              name="rupee-sign"
              style={{ color: colors.white, fontSize: 17 }}
              type="FontAwesome5"
            />
            <Text
              style={{
                ...AppStyles.regularText,
                color: colors.white,
                marginHorizontal: 4,
              }}>
              999
            </Text>
            <Icon
              name="caretright"
              style={{ color: colors.white, fontSize: 17 }}
              type="AntDesign"
            />
          </TouchableOpacity>
        </View>

        {/* Read More */}
        <TouchableOpacity
          onPress={() => navigation.navigate('ReadMoreReview')}
          activeOpacity={0.8}
          style={styles.bottomReadMore}>
          <Icon
            name="caretup"
            type="AntDesign"
            style={{ marginTop: 3, color: colors.white }}
          />
          <Text style={{ ...AppStyles.regularText, color: colors.white }}>
            Read more
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Fragment>
  );
};

export default MessagesAndCheckup;

const styles = StyleSheet.create({
  modalHeading: {
    ...AppStyles.mediumBold,
    textAlign: 'center',
    marginVertical: 10,
  },
  priceBoxRow: { flexDirection: 'row', alignItems: 'center', height: 50 },
  priceBoxCount: {
    marginHorizontal: 5,
    color: colors.white,
    borderColor: colors.white,
    borderWidth: 1,
    paddingHorizontal: 5,
    fontWeight: 'bold',
  },
  modalBg: {
    flex: 1,
    backgroundColor: colors.lightWhite,
    marginVertical: 20,
    position: 'relative',
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  priceBox: {
    height: 50,
    width: '90%',
    backgroundColor: colors.primaryBlue,
    alignSelf: 'center',
    marginBottom: 85,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 25,
    elevation: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  bottomReadMore: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    backgroundColor: colors.primaryBlue,
    position: 'absolute',
    bottom: -60,
    borderRadius: 100,
    alignItems: 'center',
  },
  packageFlatListItem: {
    width: 90,
    height: 90,
    backgroundColor: colors.white,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageFlatList: {
    height: 30,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    marginVertical: 5,
    elevation: 4,
  },
  normalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    marginHorizontal: 5,
  },
  activeBox: {
    marginHorizontal: 20,
    borderBottomWidth: 3,
    borderBottomColor: colors.darkBrown,
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
  selectBox: {
    width: 90,
    height: 30,
    backgroundColor: colors.white,
    marginTop: 3,
    flexDirection: 'row',
    borderRadius: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  selectBoxText: { ...AppStyles.medium, textAlign: 'center', color: 'black' },
  selectBoxHeading: { ...AppStyles.smallText, textAlign: 'center' },
  selectBoxContainer: {
    marginVertical: 20,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectIcon: {
    width: 26,
    height: 26,
    borderRadius: 30,
    borderColor: colors.primaryBlue,
    borderWidth: 2.5,
    position: 'absolute',
    right: 3,
  },
});
