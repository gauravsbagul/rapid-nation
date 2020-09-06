import { Icon } from 'native-base';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppStyles } from '../AppStyles/Styles';
import { colors } from '../Asset/colors/colors';
import { images } from '../Asset/images/images';

const CartItem = (props) => {
  const { item, index, AddOrRemoveItemFromCart } = props;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: `https://portal.rapidnation.in/category/${item.productInfo[0]?.image[0]}`,
        }}
        style={{ width: 88, height: 88 }}>
        <View style={{ width: '100%', backgroundColor: colors.lightBlue }}>
          <Text
            style={[
              AppStyles.smallestText,
              { color: colors.white },
            ]}>{`Service For ${item.productInfo[0]?.gender}`}</Text>
        </View>
      </ImageBackground>
      <View style={{ marginHorizontal: 10, flexGrow: 1 }}>
        <Text style={[AppStyles.mediumBold, { marginRight: 125 }]}>
          {item.productInfo[0]?.title}
        </Text>
        <Text style={[AppStyles.smallText, { color: 'grey' }]}>Service</Text>
        {/* Prices */}
        <View style={styles.row}>
          <Icon
            name="rupee"
            type="FontAwesome"
            style={{ color: 'grey', fontSize: 15 }}
          />
          <Text
            style={[
              AppStyles.regularText,
              {
                color: 'grey',
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
                marginRight: 4,
              },
            ]}>
            {item.servicedata[0]?.grossPrice}
          </Text>
          <Image
            style={{ height: 25, width: 50 }}
            resizeMode="contain"
            source={images.off_20}
          />
        </View>
        <View style={styles.row}>
          <Icon
            name="rupee"
            type="FontAwesome"
            style={{ color: 'black', fontSize: 18 }}
          />
          <Text style={[AppStyles.mediumBold, { color: 'black' }]}>
            {item.servicedata[0]?.netPrice}
          </Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 4,
          right: 4,
          alignItems: 'center',
        }}>
        <Image source={images.clock_blue} style={{ width: 15, height: 15 }} />
        <Text style={{ ...AppStyles.smallestText, color: colors.primaryBlue }}>
          {item.productInfo[0]?.duration} Mins
        </Text>
      </View>
      <View
        onPress={() => removeItemFromCart(item)}
        style={{
          position: 'absolute',
          bottom: 4,
          right: 4,
          alignItems: 'center',
          height: 25,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          borderRadius: 3,
          borderColor: '#ccc',
          borderWidth: 1.5,
        }}>
        <TouchableOpacity onPress={() => AddOrRemoveItemFromCart(item, '-')}>
          <Text
            style={{
              paddingHorizontal: 7,
              borderRightColor: '#ccc',
              borderRightWidth: 1.5,
            }}>
            -
          </Text>
        </TouchableOpacity>

        <Text style={{ paddingHorizontal: 7 }}>{item.quantity}</Text>

        <TouchableOpacity onPress={() => AddOrRemoveItemFromCart(item, '+')}>
          <Text
            style={{
              paddingHorizontal: 7,
              borderLeftColor: '#ccc',
              borderLeftWidth: 1.5,
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    width: '98%',
    marginVertical: 10,
    padding: 7,
    backgroundColor: colors.white,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    alignSelf: 'center',
    elevation: 2,
    flexDirection: 'row',
  },
  row: { flexDirection: 'row', marginBottom: 3, alignItems: 'center' },
});
