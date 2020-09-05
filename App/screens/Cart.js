import { CheckBox, Icon } from 'native-base';
import React, { Fragment, useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { AppStyles } from '../AppStyles/Styles';
import { colors } from '../Asset/colors/colors';
import { images } from '../Asset/images/images';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
import {
  clearGetCartProps,
  getCartById,
} from '../Redux/actions/Category/userCategory';

const Cart = (props) => {
  const { navigation } = props;
  const [isModalVisible, setModalVisible] = useState(false);
  const [isMale, setIsMale] = useState(props.route?.params?.isMale);
  const [cartList, setCartList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const [pickerValue, setPickerValue] = useState([
    { text: 'Back and Shoulder Massage', selected: false },
    { text: 'Full Body Massage', selected: false },
    { text: 'Foot Massage', selected: false },
    { text: 'Upto Shoulder', selected: false },
    { text: 'Seasoul Choco Mint Manicure', selected: false },
    { text: 'Basic cut, File and Polish', selected: false },
  ]);

  const AddOrRemoveItemFromCart = (item, operator) => {
    let updatedList = cartList;
    let index = updatedList.findIndex((x) => x._id == item._id);
    if (operator == '-') {
      updatedList[index].quantity = updatedList[index].quantity - 1;
      setCartList([...updatedList]);
      if (updatedList[index].quantity == 0) {
        let listAfterItemRemoved = [];
        listAfterItemRemoved = updatedList.filter(
          (product) => product != updatedList[index],
        );
        setCartList([...listAfterItemRemoved]);
      }
    } else if (operator == '+') {
      updatedList[index].quantity = updatedList[index].quantity + 1;
      setCartList([...updatedList]);
    }
  };

  useEffect(() => {
    if (props.navigation.isFocused()) {
      if (
        props.category?.getCartResponse?.response?.response &&
        props.category?.getCartResponse?.response?.status
      ) {
        if (props.category?.getCartResponse?.response?.response.length) {
          let totalAmountVar = 0;
          props.category?.getCartResponse?.response?.response.map((product) => {
            totalAmountVar += product.servicedata[0].netPrice;
          });
          setTotalAmount(totalAmountVar);
          props.clearGetCartProps();
          setCartList(props.category?.getCartResponse?.response?.response);
        }
      } else if (
        props.category?.getCartResponse?.response &&
        !props.category?.getCartResponse?.response?.status
      ) {
        props.clearGetCartProps();
        Alert.alert(
          ``,
          props.category?.getCartResponse?.response?.response ||
            'Something went wrong, please try again!',
          [{ text: 'OK' }],
          {
            cancelable: false,
          },
        );
      }
    }
  }, [props.category]);

  useEffect(() => {
    props.getCartById();
  }, []);

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <View style={{ flex: 1, backgroundColor: colors.lightWhite }}>
        {/* Modal */}
        <Modal
          isVisible={isModalVisible}
          swipeDirection={['down', 'left', 'right']}
          onSwipeComplete={() => {
            setModalVisible(false);
          }}>
          <View style={{ borderRadius: 5, overflow: 'hidden' }}>
            {pickerValue.map((item, index) => (
              <View key={index} style={styles.pickerItem}>
                <CheckBox
                  checked={pickerValue[index].selected}
                  onPress={() => {
                    let _pickerValue = pickerValue;
                    _pickerValue[index].selected = !_pickerValue[index]
                      .selected;
                    setPickerValue(_pickerValue);
                    setModalVisible(false);
                  }}
                  style={{ marginRight: 20 }}
                />
                <Text style={AppStyles.medium}>{item.text}</Text>
              </View>
            ))}
          </View>
        </Modal>

        <ScrollView
          style={{
            flex: 1,
            backgroundColor: colors.lightWhite,
            paddingHorizontal: 15,
          }}>
          {/* Horizontal Icons */}
          <View
            style={{
              marginVertical: 40,
              alignSelf: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: colors.primaryBlue,
                padding: 3,
                borderRadius: 20,
              }}>
              <Icon
                name="shoppingcart"
                type="AntDesign"
                style={{ fontSize: 20, color: 'white' }}
              />
            </View>
            <View style={{ width: 40, height: 0.5, backgroundColor: '#ccc' }} />
            <View
              style={{
                backgroundColor: colors.white,
                padding: 3,
                borderRadius: 20,
              }}>
              <Icon
                name="location-pin"
                type="Entypo"
                style={{ fontSize: 20, color: colors.primaryBlue }}
              />
            </View>
            <View style={{ width: 40, height: 0.5, backgroundColor: '#ccc' }} />
            <View
              style={{
                backgroundColor: colors.white,
                padding: 6,
                borderRadius: 20,
              }}>
              <Icon
                name="calendar"
                type="FontAwesome"
                style={{ fontSize: 17, color: colors.primaryBlue }}
              />
            </View>
            <View style={{ width: 40, height: 0.5, backgroundColor: '#ccc' }} />
            <View
              style={{
                backgroundColor: colors.white,
                padding: 5,
                borderRadius: 20,
              }}>
              <Image
                source={images.checkoutBlue}
                resizeMode="contain"
                style={{ height: 20, width: 20 }}
              />
            </View>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={AppStyles.boldText}>Your Cart</Text>
            <Text style={AppStyles.medium}>Items in your cart</Text>
          </View>

          <FlatList
            data={cartList}
            keyExtractor={(_, key) => key.toString()}
            renderItem={({ item, index }) => (
              <CartItem
                item={item}
                index={index}
                AddOrRemoveItemFromCart={AddOrRemoveItemFromCart}
              />
            )}
          />

          {/* Price */}

          {/* Picker */}
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            activeOpacity={0.7}
            style={styles.pickerModal}>
            <Text style={AppStyles.mediumBold}>Add Ons</Text>
            <Icon
              name="caret-down"
              type="FontAwesome"
              style={{ marginLeft: 'auto', color: colors.primaryBlue }}
            />
          </TouchableOpacity>

          {pickerValue.map((item, index) => {
            if (!item.selected) return;
            return (
              <View
                style={{
                  width: '100%',
                  backgroundColor: colors.white,
                  marginVertical: 2,
                  paddingVertical: 12,
                  paddingHorizontal: 7,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: colors.grey,
                    marginRight: 10,
                  }}
                />
                <Text style={AppStyles.medium}>{item.text}</Text>
                <Icon
                  name="delete"
                  onPress={() => {
                    let _pickerValue = pickerValue;
                    _pickerValue[index].selected = false;
                    setPickerValue(_pickerValue);
                  }}
                  style={{
                    color: colors.grey,
                    marginLeft: 'auto',
                    fontSize: 20,
                  }}
                  type="MaterialIcons"
                />
              </View>
            );
          })}

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 5,
              marginVertical: 10,
            }}>
            <View>
              <Text style={AppStyles.mediumBold}>Total Amount</Text>
              <Text
                style={[AppStyles.regularText, { color: colors.primaryBlue }]}>
                {cartList.length} Items
              </Text>
            </View>
            <View
              style={{
                marginLeft: 'auto',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="rupee"
                type="FontAwesome"
                style={{ color: 'black', fontSize: 20 }}
              />
              <Text
                style={[
                  AppStyles.semiBold,
                  { color: 'black', marginRight: 4 },
                ]}>
                {totalAmount}
              </Text>
            </View>
          </View>
        </ScrollView>
        <Button
          title="Proceed"
          onPress={() => navigation.navigate('Location')}
        />
      </View>
    </Fragment>
  );
};

const mapDispatchToProps = {
  getCartById,
  clearGetCartProps,
};
const mapStateToProps = ({ category }) => ({
  category,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
  pickerModal: {
    width: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  pickerItem: {
    backgroundColor: colors.white,
    padding: 7,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.lightBlue,
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
});
