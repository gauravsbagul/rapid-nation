import { Icon, Textarea } from 'native-base';
import React, { Fragment, useEffect, useState } from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
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
import Header from '../components/Header';
import ImageHorizontalScroll from '../components/ImageHorizontalScroll';
import ReviewImageScroll from '../components/ReviewImageScroll';
import {
  clearGetCategoryProps,
  clearGetSubCategoryProps,
  getCategory,
  getSubCategory,
} from '../Redux/actions/Category/userCategory';

const Home = (props) => {
  const { navigation } = props;
  const [isServiceModalVisible, setServiceModalVisible] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const toggleServiceModal = () => {
    setServiceModalVisible(!isServiceModalVisible);
  };

  const [City, setCity] = useState([
    {
      name: 'Bangalore',
      path: require('@Ass/Bangalore.png'),
      id: 1,
    },
    {
      name: 'Chennai',
      path: require('@Ass/Chennai.png'),
      id: 2,
    },
    {
      name: 'Pune',
      path: require('@Ass/Pune.png'),
      id: 3,
    },
    {
      name: 'Delhi',
      path: require('@Ass/Delhi.png'),
      id: 4,
    },
    {
      name: 'Mumbai',
      path: require('@Ass/Mumbai.png'),
      id: 5,
    },
    {
      name: 'Calcutta',
      path: require('@Ass/Kollatta.png'),
      id: 6,
    },
  ]);

  let frequentlyUsed = [
    { name: 'Home Renovation', image: images.home_renovation },
    { name: 'Charted Account', image: images.group },
    { name: 'Lip', image: images.lips },
    { name: 'Full Home Deep Cleaning', image: images.home_clean },
    { name: 'Facials', image: images.facial },
    { name: 'Hair Care', image: images.hairfall },
  ];
  let homeServices = [
    { name: 'Back Massage', image: images.message },
    { name: 'Oil Massage', image: images.oil_message },
    { name: 'Yoga', image: images.yoga },
    { name: 'Fitness Trainer At Home', image: images.fitness },
    { name: 'Gym', image: images.gym },
    { name: 'Threading', image: images.threading },
  ];
  let recentlyAdeed = [
    { name: 'Saloon', image: images.saloon_01 },
    { name: 'Pet', image: images.pet_01 },
    { name: 'Electrical And Plumbing', image: images.saloon_01 },
  ];
  let steps = [
    { name: 'Submit Your Order', image: images.submit_order },
    { name: 'Analyze and Estimate', image: images.analyze },
    { name: 'Confirm and Pay', image: images.confirm_pay },
  ];
  let small1 = [
    { name: 'Verified Professionals', image: images.verified_prof },
    { name: 'Insured Work', image: images.home_loan },
    { name: 'Rework & Assurance', image: images.rework },
  ];
  let small2 = [
    { name: 'Support', image: images.support },
    { name: 'Explore Services', image: images.explore_world },
  ];
  let serviceCity = [
    { name: 'Bangalore', image: images.bangalore },
    { name: 'Chennai', image: images.chennai },
    { name: 'Pune', image: images.pune },
    { name: 'Delhi', image: images.delhi },
  ];

  useEffect(() => {
    props.getCategory();
  }, []);

  useEffect(() => {
    if (props.navigation.isFocused()) {
      if (
        props.category?.getUserCategory?.response?.response &&
        props.category?.getUserCategory?.response?.status
      ) {
        console.log(
          'Home -> props.category?.getUserCategory?.response?.response',
          props.category?.getUserCategory?.response?.response,
        );
        setCategory(props.category?.getUserCategory?.response?.response);
        props.clearGetCategoryProps();
      } else if (
        props.category?.getUserCategory?.response &&
        !props.category?.getUserCategory?.response?.status
      ) {
        props.clearGetCategoryProps();
        Alert.alert(
          ``,
          props.category?.getUserCategory?.response?.response ||
            'Something went wrong, please try again!',
          [{ text: 'OK' }],
          {
            cancelable: false,
          },
        );
      }

      console.log(
        'Home -> props.category?.getUserSubCategory',
        props.category?.getUserSubCategory,
      );
      if (
        props.category?.getUserSubCategory?.response?.response &&
        props.category?.getUserSubCategory?.response?.status
      ) {
        props.clearGetSubCategoryProps();
        if (props.category?.getUserSubCategory?.response?.response.length) {
          setSubCategory(
            props.category?.getUserSubCategory?.response?.response,
          );
        } else {
          Alert.alert(``, 'No Subcategory Available', [{ text: 'OK' }], {
            cancelable: false,
          });
        }
      } else if (
        props.category?.getUserSubCategory?.response &&
        !props.category?.getUserSubCategory?.response?.status
      ) {
        props.clearGetSubCategoryProps();
        Alert.alert(
          ``,
          props.category?.getUserCategory?.response?.response ||
            'Something went wrong, please try again!',
          [{ text: 'OK' }],
          {
            cancelable: false,
          },
        );
      }
    }
  }, [props.category, props.navigation]);

  const onPressOfCategory = (item) => {
    props.getSubCategory({ category_id: item._id });
  };

  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.header_linear_1}
      />

      <ScrollView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
        <ImageHorizontalScroll
          header={
            <Header mic text onMicPress={() => setServiceModalVisible(true)} />
          }
        />

        <View style={styles.container}>
          <View
            style={{
              backgroundColor: colors.lightWhite,
              width: '100%',
              paddingVertical: 25,
              alignItems: 'center',
            }}>
            <Text style={{ ...AppStyles.semiBold, color: 'black' }}>
              Select Service
            </Text>
            <Text style={{ ...AppStyles.smallText, color: colors.grey }}>
              Please select your service category
            </Text>
          </View>

          <View style={{ paddingHorizontal: 4 }}>
            <FlatList
              data={category}
              keyExtractor={(_, key) => key}
              numColumns={3}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.servicesContainer}
                  onPress={() => onPressOfCategory(item)}>
                  <Image
                    source={{
                      uri: `https://portal.rapidnation.in/maincategory/${item.image}`,
                    }}
                    style={{
                      height: 85,
                      width: '100%',
                      marginBottom: 5,
                    }}
                    resizeMode="contain"
                  />

                  <Text
                    style={{
                      ...AppStyles.smallText,
                      textAlign: 'center',
                      color: 'black',
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
            <View style={{ marginVertical: 10 }}>
              <Button onPress={() => {}} secondary title="View All" />
            </View>
          </View>

          {/* Newly added */}
          <View style={{ width: '100%', paddingHorizontal: 10 }}>
            <Text
              style={{
                ...AppStyles.semiBold,
                color: 'black',
                marginBottom: 3,
              }}>
              Recent Added Services
            </Text>
            <FlatList
              data={recentlyAdeed}
              style={{ alignSelf: 'center' }}
              key={(_, key) => key}
              numColumns={3}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.frequentlyContainer}>
                  <Image
                    source={item.image}
                    style={{ height: 85, width: '100%' }}
                    resizeMode="cover"
                  />
                  <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Text style={styles.frequentlyText}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <View style={{ marginVertical: 10 }}>
              <Button secondary title="View All" />
            </View>
          </View>

          {/* Frequently Used Services */}
          <View style={{ width: '100%', paddingHorizontal: 10 }}>
            <Text
              style={{
                ...AppStyles.semiBold,
                color: 'black',
                marginBottom: 3,
              }}>
              Frequently used service
            </Text>
            <FlatList
              data={frequentlyUsed}
              style={{ alignSelf: 'center' }}
              key={(_, key) => key}
              numColumns={3}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.frequentlyContainer}>
                  <Image
                    source={item.image}
                    style={{ height: 85, width: '100%' }}
                    resizeMode="cover"
                  />
                  <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Text style={styles.frequentlyText}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <View style={{ marginVertical: 10 }}>
              <Button secondary title="View All" />
            </View>
          </View>

          {/* Home Services */}

          <View style={{ width: '100%', paddingHorizontal: 10 }}>
            <Text
              style={{
                ...AppStyles.semiBold,
                color: 'black',
                marginBottom: 3,
              }}>
              Home service
            </Text>
            <FlatList
              data={homeServices}
              style={{ alignSelf: 'center' }}
              key={(_, key) => key}
              numColumns={3}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.frequentlyContainer}>
                  <Image
                    source={item.image}
                    style={{ height: 85, width: '100%' }}
                    resizeMode="cover"
                  />
                  <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Text style={styles.frequentlyText}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <View style={{ marginVertical: 10 }}>
              <Button
                onPress={() => navigation.navigate('AllHomeServices')}
                secondary
                title="View All"
              />
            </View>
          </View>

          {/* Partner  */}
          <Text
            style={{
              ...AppStyles.semiBold,
              color: 'black',
              marginBottom: 15,
              paddingHorizontal: 10,
            }}>
            Proud To Be A Partner
          </Text>
          <View style={styles.partnerContainer}>
            <Image
              source={images.multiple_phones}
              style={{
                width: '65%',
              }}
              resizeMode="contain"
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                position: 'absolute',
                bottom: 5,
                right: 15,
              }}>
              <Image
                source={images.playstore_logo}
                style={{
                  width: 80,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {/* Happy Customers */}
          <View style={{ width: '100%', paddingHorizontal: 10, marginTop: 30 }}>
            <Text
              style={{
                ...AppStyles.semiBold,
                color: 'black',
                marginBottom: 5,
              }}>
              Happy Customers
            </Text>
            <Text style={styles.happyText}>
              Here's what our friends are saying about RAPID NATION
            </Text>
            <ReviewImageScroll />
          </View>

          {/* Why chose us */}
          <View style={{ width: '100%', paddingHorizontal: 10 }}>
            <Text
              style={{
                ...AppStyles.semiBold,
                color: 'black',
                marginBottom: 5,
                paddingBottom: 25,
              }}>
              Why Choose Us
            </Text>

            <Image
              source={images.chose_us}
              style={{ width: '100%', height: 170 }}
              resizeMode="contain"
            />
          </View>
          {/* Step works */}
          <View
            style={{
              width: '100%',
              paddingHorizontal: 10,
              marginVertical: 40,
            }}>
            <Text
              style={{
                ...AppStyles.semiBold,
                color: 'black',
                marginBottom: 35,
              }}>
              Step Works
            </Text>
            <View style={{ paddingVertical: 15, flexDirection: 'row' }}>
              {steps.map((item, index) => (
                <View key={index} style={styles.stepWork1}>
                  <View style={styles.numberTop}>
                    <Text style={{ fontSize: 17, color: colors.white }}>
                      {index + 1}
                    </Text>
                  </View>

                  <Image
                    source={item.image}
                    style={{ height: 30, marginBottom: 10, marginTop: 'auto' }}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      ...AppStyles.smallText,
                      color: 'black',
                      textAlign: 'center',
                      paddingHorizontal: 10,
                      marginBottom: 5,
                    }}>
                    {item.name}
                  </Text>
                </View>
              ))}
            </View>

            <Text
              style={{
                ...AppStyles.semiBold,
                color: 'black',
                alignSelf: 'center',
                marginBottom: 30,
                marginTop: 25,
              }}>
              Happiness Guarantee
            </Text>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              {small1.map((item, index) => (
                <View
                  key={index}
                  style={{ width: '33%', alignItems: 'center' }}>
                  <View
                    style={{
                      backgroundColor: colors.white,
                      width: 40,
                      height: 40,
                      borderRadius: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={item.image}
                      style={{ height: 20 }}
                      resizeMode="contain"
                    />
                  </View>
                  <Text
                    style={{
                      ...AppStyles.smallText,
                      textAlign: 'center',
                      color: 'black',
                    }}>
                    {item.name}
                  </Text>
                </View>
              ))}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              {small2.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    width: '33%',
                    alignItems: 'center',
                    marginBottom: 10,
                  }}
                  onPress={() => {
                    if (item.name === 'Explore Services') {
                      toggleServiceModal();
                    }
                  }}>
                  {/*Explore Service Modal*/}
                  <Modal
                    isVisible={isServiceModalVisible}
                    onBackdropPress={() => setServiceModalVisible(false)}
                    onSwipeComplete={() => setServiceModalVisible(false)}
                    swipeDirection={['left', 'right', 'up', 'down']}
                    swipeArea>
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: colors.lightWhite,
                        borderRadius: 10,
                        paddingVertical: 20,
                        paddingHorizontal: 15,
                        marginTop: '23%',
                        marginBottom: '15%',
                      }}>
                      <ScrollView
                        style={{
                          flex: 1,
                          backgroundColor: colors.lightWhite,
                          paddingHorizontal: 15,
                          paddingTop: 30,
                        }}>
                        <TouchableOpacity
                          onPress={() => setServiceModalVisible(false)}>
                          <Icon
                            name="circle-with-cross"
                            type="Entypo"
                            style={{
                              fontSize: 25,
                              color: '#ccc',
                              marginLeft: 'auto',
                            }}
                          />
                        </TouchableOpacity>

                        <View>
                          <Text
                            style={{
                              textAlign: 'center',
                              fontFamily: 'Montserrat-Bold',
                              fontSize: 23,
                              color: 'black',
                              paddingBottom: 30,
                            }}>
                            Service Your City
                          </Text>
                          <FlatList
                            data={serviceCity}
                            numColumns={2}
                            keyExtractor={(_, index) => index}
                            renderItem={({ item, index }) => (
                              <View style={styles.modalItem}>
                                <TouchableOpacity
                                  onPress={() => {
                                    if (item.name === 'Bangalore') {
                                      setServiceModalVisible(false);
                                      navigation.navigate('Explore services');
                                    }
                                  }}>
                                  <Image
                                    source={item.image}
                                    style={{
                                      width: 90,
                                      height: 90,
                                      alignSelf: 'center',
                                      marginBottom: 5,
                                    }}
                                    resizeMode="contain"
                                  />

                                  <View
                                    style={{
                                      flexDirection: 'row',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                    }}>
                                    <Text
                                      style={{
                                        ...AppStyles.medium,
                                        textAlign: 'center',
                                        color: 'black',
                                      }}>
                                      {item.name}
                                    </Text>

                                    <View style={{ ...styles.selectBtn }}>
                                      <View
                                        style={[
                                          {
                                            width: 10,
                                            height: 10,
                                            borderRadius: 10,
                                          },
                                          {
                                            backgroundColor:
                                              index == 0 ? '#0D83EE' : '#fff',
                                          },
                                        ]}
                                      />
                                    </View>
                                  </View>
                                </TouchableOpacity>
                              </View>
                            )}
                          />
                          <Text
                            style={{
                              textAlign: 'center',
                              fontFamily: 'Montserrat-SemiBold',
                              fontSize: 17,
                              color: 'black',
                              paddingBottom: 15,
                              paddingTop: 30,
                            }}>
                            Where do you want the Service?
                          </Text>
                          <View style={styles.searchBox}>
                            <Textarea
                              placeholderTextColor="grey"
                              placeholder="Your added Service Location"
                              style={{
                                ...AppStyles.smallText,
                                flexGrow: 1,
                                paddingTop: 20,
                              }}
                            />
                            <Icon
                              name="search"
                              type="FontAwesome"
                              style={{
                                fontSize: 20,
                                color: colors.grey,
                                marginHorizontal: 5,
                                marginRight: 10,
                              }}
                            />
                          </View>
                          <TouchableOpacity>
                            <Text
                              style={{
                                ...AppStyles.medium,
                                color: colors.primaryBlue,
                                alignSelf: 'flex-end',
                                marginBottom: 50,
                                marginTop: 5,
                              }}>
                              + Add area
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </ScrollView>
                    </View>
                  </Modal>
                  <View
                    style={{
                      backgroundColor: colors.white,
                      width: 40,
                      height: 40,
                      borderRadius: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={item.image}
                      style={{ height: 20 }}
                      resizeMode="contain"
                    />
                  </View>
                  <Text
                    style={{
                      ...AppStyles.smallText,
                      textAlign: 'center',
                      color: 'black',
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={{ height: 70 }} />
        </View>
        <ImageBackground
          source={images.bell_blue}
          style={{
            position: 'absolute',
            right: 0,
            top: 300,
            width: 85,
            height: 100,
            translateX: 23,
            justifyContent: 'center',
          }}
          resizeMode="cover">
          <Text style={[AppStyles.medium, { color: 'white', marginLeft: 22 }]}>
            Help
          </Text>
        </ImageBackground>
      </ScrollView>
    </Fragment>
  );
};

const mapDispatchToProps = {
  getCategory,
  clearGetCategoryProps,
  clearGetSubCategoryProps,
  getSubCategory,
};
const mapStateToProps = ({ category }) => ({
  category,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: 'rgba(255,255,255,1)',
    height: 40,
    borderRadius: 30,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  modalItem: {
    backgroundColor: colors.white,
    width: '46%',
    margin: 6,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    borderRadius: 3,
  },
  selectBtn: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderColor: 'rgba(13, 131, 238,.8)',
    marginLeft: 10,
    borderRadius: 20,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBg: {
    flex: 1,
    backgroundColor: colors.lightWhite,
    marginVertical: 60,
    position: 'relative',
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  container: { flex: 1, backgroundColor: colors.lightWhite },
  servicesContainer: {
    width: '33%',
    height: 90,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.lightWhite,
    borderWidth: 0.8,
    backgroundColor: colors.white,
  },
  frequentlyContainer: {
    width: (Dimensions.get('screen').width - 55) / 3,
    backgroundColor: colors.white,
    marginHorizontal: 6,
    marginVertical: 4,
    borderTopRightRadius: 7,
    overflow: 'hidden',
    borderTopLeftRadius: 7,
    height: 125,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  frequentlyText: {
    ...AppStyles.smallText,
    textAlign: 'center',
    color: 'black',
    marginVertical: 4,
    fontSize: 11,
    marginHorizontal: 4,
  },
  partnerContainer: {
    width: '100%',
    backgroundColor: colors.lightBlue,
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  happyText: {
    ...AppStyles.regularText,
    textAlign: 'center',
    color: 'black',
    paddingHorizontal: 40,
    marginVertical: 15,
  },
  numberTop: {
    position: 'absolute',
    top: -18,
    width: 36,
    height: 36,
    borderRadius: 30,
    backgroundColor: colors.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepWork1: {
    width: '31%',
    height: 100,
    backgroundColor: colors.white,
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});
