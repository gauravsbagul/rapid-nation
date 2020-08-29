import React, { Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import { colors } from '../Asset/colors/colors';
import { images } from '../Asset/images/images';
import { AppStyles } from '../AppStyles/Styles';

const Offers = () => {
  const { cart_male, cart_female } = images;
  const latestOffers = [
    {
      id: 1,
      img: cart_female,
      name: 'Detoxifying Therapy',
      promoCode: 229922,
      description:
        'Our professsionals will get in touch with you an hour before the service',
    },
    {
      id: 2,
      img: cart_male,
      name: 'Detoxifying Therapy',
      promoCode: 229922,
      description:
        'Our professsionals will get in touch with you an hour before the service',
    },
  ];
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
      <Header title="Offers" noMic />
      <View style={styles.container}>
        {latestOffers.map((offer) => {
          return (
            <View style={styles.cardView}>
              <Image
                source={offer.img}
                style={{
                  width: '100%',
                  height: 260,
                  resizeMode: 'cover',
                }}
              />
              <Text style={[AppStyles.semiBold, styles.titleText]}>
                {offer.name}
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={[
                    AppStyles.regularText,
                    { color: colors.grey, fontSize: 16 },
                  ]}>
                  Promo code:
                </Text>
                <Text style={[AppStyles.semiBold, { fontSize: 16 }]}>
                  {' '}
                  {offer.promoCode}
                </Text>
              </View>
              <Text
                style={[
                  AppStyles.regularText,
                  {
                    color: colors.grey,
                    marginTop: 15,
                    marginBottom: 30,
                    fontSize: 16,
                  },
                ]}>
                {offer.description}
              </Text>
              <Text style={[AppStyles.regularText, { alignSelf: 'flex-end' }]}>
                T&C Apply
              </Text>
            </View>
          );
        })}
        <View style={styles.btnContainer}>
          <Button title="Done" style={{ marginTop: 80 }} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Offers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 20,
  },
  cardView: {
    marginHorizontal: 10,
    padding: 10,
    paddingBottom: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
    marginTop: 30,
  },
  titleText: {
    marginVertical: 7,
    fontSize: 18,
  },
  btnContainer: {
    marginHorizontal: 20,
  },
});
