import React, { Fragment, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import Header from '../components/Header';
import { colors } from '../Asset/colors/colors';
import MapView, { Marker } from 'react-native-maps';
import { AppStyles } from '../AppStyles/Styles';

const ServiceArea = () => {
  const sampleData = [
    'Silkboard ',
    'BTM Layout',
    'HSR Layout',
    'Agara',
    'Sarjapur',
    'Bellandur',
    'Marathahalli',
    'Harlaur',
  ];
  const mapRef = useRef();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
      <Header title="Service Area" noMic />
      <MapView
        style={{
          alignSelf: 'center',
          width: '92%',
          height: 440,
          marginVertical: 20,
        }}
        ref={mapRef}
        initialRegion={{
          latitude: 19.9615,
          longitude: 79.2961,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
      />
      <Text style={[AppStyles.boldText, { marginLeft: 15 }]}>Bangalore</Text>
      <View style={styles.inputLike}>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
          {sampleData.map((item, index) => {
            return (
              <View style={{ padding: 8, width: '45%' }}>
                <Text style={[AppStyles.smallText, { color: colors.grey }]}>
                  {item}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default ServiceArea;

const styles = StyleSheet.create({
  inputLike: {
    paddingStart: 20,
    marginVertical: 8,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.white,
    paddingVertical: 12,
  },
});
