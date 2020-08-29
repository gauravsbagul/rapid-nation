import React, { Fragment, useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import { colors } from '../Asset/colors/colors';
import { AppStyles } from '../AppStyles/Styles';
import { images } from '../Asset/images/images';
import Button from '../components/Button';
import { Icon, CheckBox } from 'native-base';
import MapView, { Marker } from 'react-native-maps';

const Location = ({ navigation }) => {
  const [isMapVisible, setMapVisible] = useState(false);
  const mapRef = useRef();
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <View style={{ flex: 1, backgroundColor: colors.lightWhite }}>
        <ScrollView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
          {/* Horizontal Icons */}
          <View style={{ paddingHorizontal: 15 }}>
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
              <View
                style={{
                  width: 40,
                  height: 0.5,
                  backgroundColor: colors.primaryBlue,
                }}
              />
              <View
                style={{
                  backgroundColor: colors.primaryBlue,
                  padding: 3,
                  borderRadius: 20,
                }}>
                <Icon
                  name="location-pin"
                  type="Entypo"
                  style={{ fontSize: 20, color: colors.white }}
                />
              </View>
              <View
                style={{ width: 40, height: 0.5, backgroundColor: '#ccc' }}
              />
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
              <View
                style={{ width: 40, height: 0.5, backgroundColor: '#ccc' }}
              />
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

            {/* Main Heading */}
            <Text
              style={[
                AppStyles.boldText,
                { textAlign: 'center', paddingHorizontal: 20 },
              ]}>
              Where do you want the service ?
            </Text>
            <Text
              style={[
                AppStyles.mediumBold,
                {
                  color: 'grey',
                  paddingHorizontal: 20,
                  textAlign: 'center',
                  marginBottom: 15,
                },
              ]}>
              Enter Your Location
            </Text>

            <TouchableOpacity style={styles.btn}>
              <Icon
                name="my-location"
                style={{ fontSize: 20 }}
                type="MaterialIcons"
              />
              <Text style={AppStyles.medium}>Your Current Location</Text>
            </TouchableOpacity>

            <View
              style={{
                marginVertical: 15,
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.outerCircle}>
                <View style={styles.innerCircle}>
                  <Icon
                    name="add-location"
                    type="MaterialIcons"
                    style={{ fontSize: 130, color: colors.primaryBlue }}
                  />
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.8} style={styles.mainBtn}>
                <Icon
                  name="location-pin"
                  type="Entypo"
                  style={{ color: 'white', fontSize: 20, marginRight: 5 }}
                />
                <Text style={[AppStyles.regularText, { color: 'white' }]}>
                  Add Address
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <MapView
            style={{
              width: '100%',
              height: Dimensions.get('screen').height - 300,
              marginVertical: 20,
            }}
            ref={mapRef}
            initialRegion={{
              latitude: 22.5726,
              longitude: 88.3639,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
            followsUserLocation={true}
          />
          {/* Data */}
          <View style={styles.input}>
            <Icon name="user" type="FontAwesome" style={styles.icon} />
            <Text style={AppStyles.regularText}>Jared Rice</Text>
          </View>
          <View style={styles.input}>
            <Icon
              name="mobile-phone"
              type="FontAwesome"
              style={[styles.icon, { fontSize: 25 }]}
            />

            <Text style={AppStyles.regularText}>9988776655</Text>
          </View>
          <View style={styles.input}>
            <Icon name="home" type="Entypo" style={styles.icon} />
            <Text style={[AppStyles.regularText, { marginRight: 20 }]}>
              D506 ozone every green, Harlur Main Road, PWD Quarters, 1st
              Sector, Off Sarjapura HSR Layout, Bengaluru, Karnataka 560102,
              Karnataka - India
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 50,
              marginTop: 10,
            }}>
            <View style={styles.deepBtn}>
              <Icon
                name="home-outline"
                type="MaterialCommunityIcons"
                style={{ color: 'white', marginRight: 3, fontSize: 20 }}
              />
              <Text style={[AppStyles.mediumBold, { color: colors.white }]}>
                Home
              </Text>
            </View>
            <View style={styles.lightBtn}>
              <Icon
                name="briefcase-outline"
                type="MaterialCommunityIcons"
                style={{
                  color: colors.primaryBlue,
                  marginRight: 3,
                  fontSize: 20,
                }}
              />
              <Text
                style={[AppStyles.mediumBold, { color: colors.primaryBlue }]}>
                Work
              </Text>
            </View>
            <View style={styles.lightBtn}>
              <Icon
                name="location"
                type="Octicons"
                style={{
                  color: colors.primaryBlue,
                  marginRight: 3,
                  fontSize: 20,
                }}
              />
              <Text
                style={[AppStyles.mediumBold, { color: colors.primaryBlue }]}>
                Others
              </Text>
            </View>
          </View>
        </ScrollView>
        <Button
          title="Proceed"
          onPress={() => navigation.navigate('SelectSchedule')}
        />
      </View>
    </Fragment>
  );
};

export default Location;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#E4E4E4',
    marginVertical: 10,
    width: 230,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
  },
  mainBtn: {
    backgroundColor: colors.primaryBlue,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    translateY: -12,
  },
  innerCircle: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    borderColor: '#f1f1f1',
    borderWidth: 8,
    backgroundColor: colors.lightWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerCircle: {
    width: 200,
    height: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 100,
    overflow: 'hidden',
  },
  input: {
    flexDirection: 'row',
    paddingHorizontal: 7,
    paddingVertical: 10,
    width: '87%',
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 10,
  },
  icon: { marginRight: 10, marginLeft: 5, fontSize: 20, color: 'grey' },
  lightBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    borderRadius: 50,
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderColor: colors.primaryBlue,
    borderWidth: 1,
  },
  deepBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryBlue,
    borderRadius: 50,
    paddingHorizontal: 13,
    paddingVertical: 10,
  },
});
