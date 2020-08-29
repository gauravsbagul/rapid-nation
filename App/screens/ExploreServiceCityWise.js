import React, { Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import Header from '../components/Header';
import { AppStyles } from '../AppStyles/Styles';
import { colors } from '../Asset/colors/colors';
import { images } from '../Asset/images/images';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ExploreServiceCityWise = () => {
  const iconArray = [
    { name: 'Service', images: images.customer },
    { name: 'Real Estate', images: images.building },
    { name: 'Pet Services', images: images.pet },
    { name: 'Interior Design', images: images.plan },
    { name: 'Service', images: images.customer },
  ];
  const servicesArray = [
    'All services',
    'Electronics Service',
    ' Home Repair',
    'Saloon',
    'Pet Service',
    'Document Service',
    'Document Service',
    'Home Service',
  ];
  const cartArray = [
    {
      title: 'All Services',
      image: images.group,
      firstLine: 'Recent Added Service',
      firstIcon: images.reached,
      secondLine: 'Pet Services',
      secondIcon: images.pet,
      thirdLine: 'Service',
      thirdIcon: images.customer,
      fourthLine: 'Interior Design',
      fourthIcon: images.plan,
      fiveLine: 'Real Estate',
      fiveIcon: images.building,
    },
    {
      title: 'All Services',
      image: images.group,
      firstLine: 'Recent Added Service',
      firstIcon: images.reached,
      secondLine: 'Pet Services',
      secondIcon: images.pet,
      thirdLine: 'Service',
      thirdIcon: images.customer,
      fourthLine: 'Interior Design',
      fourthIcon: images.plan,
      fiveLine: 'Real Estate',
      fiveIcon: images.building,
    },
    {
      title: 'All Services',
      image: images.group,
      firstLine: 'Recent Added Service',
      firstIcon: images.reached,
      secondLine: 'Pet Services',
      secondIcon: images.pet,
      thirdLine: 'Service',
      thirdIcon: images.customer,
      fourthLine: 'Interior Design',
      fourthIcon: images.plan,
      fiveLine: 'Real Estate',
      fiveIcon: images.building,
    },
  ];

  return (
    <Fragment>
      <ScrollView>
        <Header mic />
        <View style={{ margin: 15 }}>
          <Text
            style={[
              AppStyles.medium,
              { textAlign: 'center', color: '#363636', lineHeight: 22 },
            ]}>
            {' '}
            Explore Service in{' '}
            <Text style={AppStyles.mediumBold}>
              BANGLORE TRENDING CATEGORIES
            </Text>
          </Text>
        </View>
        {/* icon flatlist start */}
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={iconArray}
            style={{ backgroundColor: colors.white }}
            keyExtractor={(_, key) => key}
            renderItem={({ item, index }) => (
              <View
                style={{
                  alignItems: 'center',
                  padding: 20,
                  backgroundColor: colors.white,
                }}>
                <Image
                  source={item.images}
                  style={{ width: 40, height: 40, resizeMode: 'contain' }}
                />
                <Text style={[AppStyles.smallestText]}>{item.name}</Text>
              </View>
            )}
          />
        </View>
        {/* Service Box flatlist start */}
        <View
          style={{
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <FlatList
            data={servicesArray}
            keyExtractor={(_, key) => key}
            numColumns={2}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  padding: 5,
                  backgroundColor:
                    index == 0 ? colors.primaryBlue : colors.white,
                  width: Dimensions.get('screen').width / 2 - 20,
                  margin: 5,
                  borderRadius: 5,
                  shadowColor: colors.grey,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  elevation: 2,
                }}>
                <Text
                  style={[
                    AppStyles.medium,
                    {
                      color: index == 0 ? colors.white : colors.grey,
                      textAlign: 'center',
                    },
                  ]}>
                  {' '}
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* End card flatlist start */}
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={cartArray}
            horizontal
            style={{ height: 350, marginBottom: 20 }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, key) => key}
            renderItem={({ item, index }) => (
              <View
                style={{
                  backgroundColor: colors.white,
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  marginHorizontal: 10,
                  shadowOffset: {
                    width: 10,
                    height: 10,
                  },
                  overflow: 'hidden',
                  shadowColor: colors.grey,
                  shadowOpacity: 0.6,
                  shadowRadius: 1,
                  elevation: 8,
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: '100%',
                    height: 150,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                  }}
                />
                <View
                  style={{
                    backgroundColor: colors.white,
                    borderRadius: 8,
                    padding: 8,
                    width: 150,
                    marginTop: -90,
                    marginBottom: 53,
                    alignSelf: 'center',
                  }}>
                  <Text style={[AppStyles.smallBold, { textAlign: 'center' }]}>
                    {item.title}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 5, margin: 5 }}>
                  <Image
                    source={item.firstIcon}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text
                    style={[
                      AppStyles.smallText,
                      { color: colors.grey, marginStart: 10 },
                    ]}>
                    {item.firstLine}
                  </Text>
                </View>
                <View
                  style={{
                    Width: '100%',
                    height: 0.3,
                    backgroundColor: colors.grey,
                  }}
                />
                <View style={{ flexDirection: 'row', padding: 5, margin: 5 }}>
                  <Image
                    source={item.secondIcon}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text
                    style={[
                      AppStyles.smallText,
                      { color: colors.grey, marginStart: 10 },
                    ]}>
                    {item.secondLine}
                  </Text>
                </View>
                <View
                  style={{
                    Width: '100%',
                    height: 0.3,
                    backgroundColor: colors.grey,
                  }}
                />
                <View style={{ flexDirection: 'row', padding: 5, margin: 5 }}>
                  <Image
                    source={item.thirdIcon}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text
                    style={[
                      AppStyles.smallText,
                      { color: colors.grey, marginStart: 10 },
                    ]}>
                    {item.thirdLine}
                  </Text>
                </View>
                <View
                  style={{
                    Width: '100%',
                    height: 0.3,
                    backgroundColor: colors.grey,
                  }}
                />
                <View style={{ flexDirection: 'row', padding: 5, margin: 5 }}>
                  <Image
                    source={item.fourthIcon}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text
                    style={[
                      AppStyles.smallText,
                      { color: colors.grey, marginStart: 10 },
                    ]}>
                    {item.fourthLine}
                  </Text>
                </View>
                <View
                  style={{
                    Width: '100%',
                    height: 0.3,
                    backgroundColor: colors.grey,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 5,
                    paddingBottom: 0,
                    margin: 5,
                  }}>
                  <Image
                    source={item.fiveIcon}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text
                    style={[
                      AppStyles.smallText,
                      { color: colors.grey, marginStart: 10 },
                    ]}>
                    {item.fiveLine}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default ExploreServiceCityWise;
const styles = StyleSheet.create({});
