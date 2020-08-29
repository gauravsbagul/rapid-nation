import React, { Fragment, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import { colors } from '../Asset/colors/colors';
import Modal from 'react-native-modal';
import { AppStyles } from '../AppStyles/Styles';
import Button from '../components/Button';
import { images } from '../Asset/images/images';
import { Icon, Radio, Textarea } from 'native-base';

const dateArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const MyOrderDetail = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [scanQRModalVisibility, setScarQRModalVisibility] = useState(false);
  const [isRescheduleModalVisible, setRescheduleModalVisible] = useState(false);
  const [isCancelModalVisible, setCancelModalVisible] = useState(false);

  const technicianAssigned = 'Yes';

  const toggleRescheduleModal = () => {
    setRescheduleModalVisible(!isRescheduleModalVisible);
  };

  const toggleCancelModal = () => {
    setCancelModalVisible(!isCancelModalVisible);
  };

  const dates = new Array(5).fill(0);

  const times = [
    '10:00 am',
    '10:30 am',
    '11:00 am',
    '11:30 am',
    '12:00 am',
    '12:30 pm',
    '01:00 pm',
    '01:30 pm',
    '02:00 pm',
    '02:30 pm',
    '03:00 pm',
    '03:30 pm',
  ];
  const options = [
    { title: 'Prices are High' },
    { title: 'Did not get service provider details' },
    { title: 'Want the service at some other time' },
    { title: 'Others' },
  ];

  return (
    <>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection={['left', 'right', 'up', 'down']}
        swipeArea>
        <ScrollView>
          <View
            style={{
              padding: 20,
              width: '93%',
              marginTop: '40%',
              alignSelf: 'center',
              height: '70%',
              backgroundColor: colors.lightWhite,
              borderRadius: 20,
              flexGrow: 1,
            }}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Icon
                name="circle-with-cross"
                type="Entypo"
                style={{
                  fontSize: 20,
                  color: colors.grey,
                  alignSelf: 'flex-end',
                }}
              />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
              <View>
                <Image
                  source={images.profile_ananya}
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                />
              </View>
              <View style={{ justifyContent: 'center', paddingStart: 10 }}>
                <Text style={AppStyles.mediumBold}>Cihan Soysakal </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Icon
                    name="star"
                    type="FontAwesome"
                    style={{
                      fontSize: 15,
                      color: '#f5c720',
                      alignSelf: 'flex-end',
                    }}
                  />
                  <Icon
                    name="star"
                    type="FontAwesome"
                    style={{
                      fontSize: 15,
                      color: '#f5c720',
                      alignSelf: 'flex-end',
                    }}
                  />
                  <Icon
                    name="star"
                    type="FontAwesome"
                    style={{
                      fontSize: 15,
                      color: '#f5c720',
                      alignSelf: 'flex-end',
                    }}
                  />
                  <Icon
                    name="star"
                    type="FontAwesome"
                    style={{
                      fontSize: 15,
                      color: colors.grey,
                      alignSelf: 'flex-end',
                    }}
                  />
                  <Icon
                    name="star"
                    type="FontAwesome"
                    style={{
                      fontSize: 15,
                      color: colors.grey,
                      alignSelf: 'flex-end',
                    }}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: 0.5,
                backgroundColor: '#ccc',
                marginVertical: 15,
              }}
            />
            <Text style={[AppStyles.smallText, { color: colors.grey }]}>
              Cihan Soysakal will assigned you
            </Text>
            <Text style={[AppStyles.mediumBold]}>Wed, 3rd Dec - 12:00 PM</Text>

            <View
              style={{
                width: '100%',
                height: 0.5,
                backgroundColor: '#ccc',
                marginVertical: 15,
              }}
            />
            <Text style={[AppStyles.smallText, { color: colors.grey }]}>
              Language Knows
            </Text>
            <Text style={[AppStyles.mediumBold]}>
              English, Kannada, Hindi, etc.
            </Text>

            <View
              style={{
                width: '100%',
                height: 0.5,
                backgroundColor: '#ccc',
                marginVertical: 15,
              }}
            />
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <Text style={[AppStyles.smallText, { color: colors.grey }]}>
                  Experience
                </Text>
              </View>
              <View>
                <Text style={[AppStyles.smallBold, { textAlign: 'right' }]}>
                  2 years
                </Text>
              </View>
            </View>

            <Textarea
              style={[
                AppStyles.regularText,
                styles.textarea,
                { height: 100, flexDirection: 'row' },
              ]}
              placeholderTextColor="grey"
              placeholder="Description: "
            />
            <Text style={[AppStyles.smallText, { color: colors.grey }]}>
              Qualification
            </Text>
            <Text style={[AppStyles.mediumBold]}>abc</Text>
          </View>
        </ScrollView>
      </Modal>
      <Modal
        isVisible={scanQRModalVisibility}
        onBackdropPress={() => setScarQRModalVisibility(false)}
        onSwipeComplete={() => setScarQRModalVisibility(false)}
        swipeDirection={['left', 'up', 'right', 'down']}
        swipeArea
        style={{ justifyContent: 'center' }}>
        <View
          style={{
            backgroundColor: colors.lightWhite,
            borderRadius: 25,
            height: '65%',
            paddingTop: 25,
            alignItems: 'center',
          }}>
          <Text style={[AppStyles.regularText, { color: colors.grey }]}>
            Staff will scan the QR Code to Start the JOB
          </Text>
          <View style={{ marginVertical: 25 }}>
            <Text style={[AppStyles.semiBold, { textAlign: 'center' }]}>
              Scan QR
            </Text>
            <Image
              source={images.qrCode}
              style={{ width: 125, height: 125, resizeMode: 'contain' }}
            />
          </View>
          <Text style={[AppStyles.semiBold, { color: colors.primaryBlue }]}>
            Or
          </Text>
          <View style={{ marginVertical: 20 }}>
            <Text style={[AppStyles.semiBold, { textAlign: 'center' }]}>
              QR Code
            </Text>
            <Text style={[AppStyles.semiLight, { marginTop: 5 }]}>
              OTP1514084
            </Text>
          </View>
          <Text style={AppStyles.regularText}>
            QR code scanned .. Work will start now
          </Text>
          <TouchableOpacity
            style={{
              width: '100%',
              position: 'absolute',
              bottom: 0,
              height: '10%',
              justifyContent: 'center',
              backgroundColor: colors.white,
              borderBottomEndRadius: 25,
              borderBottomStartRadius: 25,
            }}>
            <Text
              style={[
                AppStyles.mediumBold,
                { textAlign: 'center', color: colors.primaryBlue },
              ]}>
              View Details
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Fragment>
        <StatusBar barStyle="light-content" backgroundColor={colors.white} />
        <ScrollView
          style={{
            flex: 1,
            marginVertical: 20,
            backgroundColor: colors.lightWhite,
            paddingHorizontal: 15,
          }}>
          {/* Progresss bar starts */}
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
              alignSelf: 'center',
            }}>
            <View style={{ alignItems: 'center' }}>
              <View
                style={{
                  backgroundColor: colors.primaryBlue,
                  padding: 4,
                  borderRadius: 20,
                }}>
                <Image
                  source={images.new}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <Text style={AppStyles.smallestText}>New</Text>
            </View>

            <View
              style={{
                width: 20,
                height: 1,
                backgroundColor: colors.primaryBlue,
                marginTop: 15,
              }}
            />

            <View style={{ alignItems: 'center' }}>
              <View
                style={{
                  backgroundColor: colors.primaryBlue,
                  padding: 4,
                  borderRadius: 20,
                }}>
                <Image
                  source={images.technician}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <Text style={AppStyles.smallestText}> Technician </Text>
              <Text style={AppStyles.smallestText}> Assigned</Text>
            </View>

            <View
              style={{
                width: 20,
                height: 1,
                backgroundColor: '#ccc',
                marginTop: 15,
              }}
            />

            <View style={{ alignItems: 'center' }}>
              <View
                style={{
                  backgroundColor: colors.white,
                  padding: 4,
                  borderRadius: 20,
                }}>
                <Image
                  source={images.reached}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <Text style={[AppStyles.smallestText, { color: colors.grey }]}>
                Reached
              </Text>
            </View>

            <View
              style={{
                width: 20,
                height: 1,
                backgroundColor: '#ccc',
                marginTop: 15,
              }}
            />

            <View style={{ alignItems: 'center' }}>
              <View
                style={{
                  backgroundColor: colors.white,
                  padding: 4,
                  borderRadius: 20,
                }}>
                <Image
                  source={images.working_process}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <Text style={[AppStyles.smallestText, { color: colors.grey }]}>
                Working{' '}
              </Text>
              <Text style={[AppStyles.smallestText, { color: colors.grey }]}>
                Process
              </Text>
            </View>

            <View
              style={{
                width: 20,
                height: 1,
                backgroundColor: '#ccc',
                marginTop: 15,
              }}
            />

            <View style={{ alignItems: 'center' }}>
              <View
                style={{
                  backgroundColor: colors.white,
                  padding: 4,
                  borderRadius: 20,
                }}>
                <Image
                  source={images.complete}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <Text style={[AppStyles.smallestText, { color: colors.grey }]}>
                Completed
              </Text>
            </View>
          </View>
          {/* progress bar end */}
          {technicianAssigned == 'Yes' ? (
            <View>
              <View style={{ marginTop: 20, flexDirection: 'row' }}>
                <View style={{ flex: 2 }}>
                  <Text style={[AppStyles.mediumBold, { color: '#363636' }]}>
                    Massage for Men
                  </Text>
                  <Text style={[AppStyles.medium, { color: colors.grey }]}>
                    December 1, 2019
                  </Text>
                  <Text
                    style={[
                      AppStyles.smallText,
                      { color: colors.primaryBlue, marginTop: 20 },
                    ]}>
                    Staff will scan the QR code to start the job
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    paddingHorizontal: 20,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <Text style={AppStyles.medium}>Scan QR</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setScarQRModalVisibility(true);
                    }}>
                    <Image
                      source={images.qrCode}
                      style={{ width: 100, height: 100, resizeMode: 'contain' }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  marginVertical: 20,
                  backgroundColor: colors.white,
                  padding: 10,
                }}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Image
                      source={images.profile_ananya}
                      style={{ width: 40, height: 40, borderRadius: 20 }}
                    />
                  </View>
                  <View style={{ justifyContent: 'center', paddingStart: 10 }}>
                    <Text style={AppStyles.mediumBold}>
                      Cihan Soysakal is Assigned
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(true);
                  }}>
                  <Text
                    style={[
                      AppStyles.smallestText,
                      { color: colors.primaryBlue, textAlign: 'right' },
                    ]}>
                    View Details
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={AppStyles.medium}>
                Payment Mode
                <Text style={AppStyles.mediumBold}> Cash On Delivery</Text>
              </Text>
            </View>
          ) : (
            <View>
              <View style={{ marginTop: 20 }}>
                <Text style={[AppStyles.mediumBold, { color: '#363636' }]}>
                  Massage for Men
                </Text>
                <Text style={[AppStyles.medium, { color: colors.grey }]}>
                  December 1,2019
                </Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ flex: 1, padding: 4, justifyContent: 'center' }}>
                  <Text style={AppStyles.mediumBold}>Note :</Text>
                </View>
                <View
                  style={{
                    flex: 4,
                    justifyContent: 'center',
                    padding: 5,
                    backgroundColor: colors.lightBlue,
                  }}>
                  <Text
                    style={[
                      AppStyles.medium,
                      { color: '#363636', textAlign: 'center' },
                    ]}>
                    Share the OTP only when vendor is at start the work
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  padding: 5,
                  backgroundColor: colors.white,
                  marginTop: 20,
                }}>
                <Text
                  style={[
                    AppStyles.medium,
                    { color: '#363636', textAlign: 'center' },
                  ]}>
                  Our experience technician will be assigned SOON....!!!!!
                </Text>
              </View>
            </View>
          )}

          {/* // Common part start here */}
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colors.white,
              marginTop: 20,
              padding: 20,
              alignItems: 'center',
            }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text
                style={[
                  AppStyles.medium,
                  { color: '#363636', textAlign: 'center' },
                ]}>
                Date-Time
              </Text>
              <Text
                style={[
                  AppStyles.mediumBold,
                  { color: '#363636', textAlign: 'center' },
                ]}>
                31/01/2020 - 3:30Pm
              </Text>
            </View>
            <View
              style={{
                width: 1,
                height: 40,
                backgroundColor: '#ccc',
                marginHorizontal: 10,
              }}
            />
            <View
              style={{ flex: 1, justifyContent: 'center', marginStart: 10 }}>
              <Text
                style={[
                  AppStyles.medium,
                  { color: '#363636', textAlign: 'center' },
                ]}>
                Booking ID
              </Text>
              <Text
                style={[
                  AppStyles.mediumBold,
                  { color: '#363636', textAlign: 'center' },
                ]}>
                ID OTP151
              </Text>
            </View>
          </View>

          <Text
            style={[AppStyles.mediumBold, { marginTop: 20, marginBottom: 10 }]}>
            Cihan Soysakal
          </Text>
          <Text style={[AppStyles.smallText, { color: '#363636' }]}>
            Marathalli, Bengaluru, Karnataka
          </Text>
          <Text style={[AppStyles.smallText, { color: '#363636' }]}>
            Marathalli, Bengaluru - 560040
          </Text>
          <Text style={[AppStyles.smallText, { color: '#363636' }]}>
            Mobile Number - 988776655
          </Text>
          <View
            style={{
              height: 0.5,
              width: '100 %',
              backgroundColor: '#ccc',
              marginTop: 20,
              marginBottom: 10,
            }}
          />
          <Text style={AppStyles.medium}>
            Payment Mode
            <Text style={AppStyles.mediumBold}> Cash On Delivery</Text>
          </Text>

          <View style={{ marginTop: 30, margin: 10 }}>
            <View style={{ flexDirection: 'row', padding: 10 }}>
              <View style={{ flex: 3, justifyContent: 'center' }}>
                <Text style={AppStyles.mediumBold}>Service</Text>
              </View>
              <View style={{ flex: 3 }}>
                <Text style={[AppStyles.medium, { color: colors.grey }]}>
                  Stress Relief
                </Text>
                <Text style={[AppStyles.medium, { color: colors.grey }]}>
                  Swedish Massage
                </Text>
              </View>
            </View>

            <View
              style={{ width: '100%', height: 0.5, backgroundColor: '#ccc' }}
            />

            <View style={{ flexDirection: 'row', padding: 10 }}>
              <View style={{ flex: 3, justifyContent: 'center' }}>
                <Text style={AppStyles.mediumBold}>Price</Text>
              </View>
              <View style={{ flex: 3 }}>
                <Text style={[AppStyles.medium, { color: colors.grey }]}>
                  1,200
                </Text>
              </View>
            </View>

            <View
              style={{ width: '100%', height: 0.5, backgroundColor: '#ccc' }}
            />

            <View style={{ flexDirection: 'row', padding: 10 }}>
              <View style={{ flex: 3, justifyContent: 'center' }}>
                <Text style={AppStyles.mediumBold}>Qty</Text>
              </View>
              <View style={{ flex: 3 }}>
                <Text style={[AppStyles.medium, { color: colors.grey }]}>
                  1
                </Text>
              </View>
            </View>

            <View
              style={{ width: '100%', height: 0.5, backgroundColor: '#ccc' }}
            />

            <View style={{ flexDirection: 'row', padding: 10 }}>
              <View style={{ flex: 3, justifyContent: 'center' }}>
                <Text style={AppStyles.mediumBold}>Amount</Text>
              </View>
              <View style={{ flex: 3 }}>
                <Text style={[AppStyles.medium, { color: colors.grey }]}>
                  1,800
                </Text>
              </View>
            </View>

            <View
              style={{ width: '100%', height: 0.5, backgroundColor: '#ccc' }}
            />

            <Text
              style={[
                AppStyles.smallText,
                { paddingVertical: 10, color: colors.primaryBlue },
              ]}>
              +Add more Service
            </Text>

            <View style={{ flexDirection: 'row', padding: 10, marginTop: 30 }}>
              <TouchableOpacity
                onPress={toggleRescheduleModal}
                style={{
                  flex: 1,
                  borderRadius: 5,
                  backgroundColor: colors.primaryBlue,
                  justifyContent: 'center',
                  padding: 10,
                }}>
                <Text
                  style={[
                    AppStyles.mediumBold,
                    { color: colors.white, textAlign: 'center' },
                  ]}>
                  Reschedule
                </Text>
              </TouchableOpacity>

              {/*Reschedule Modal*/}
              <Modal
                isVisible={isRescheduleModalVisible}
                onBackdropPress={() => setRescheduleModalVisible(false)}
                onSwipeComplete={() => setRescheduleModalVisible(false)}
                swipeDirection={['left', 'right', 'up', 'down']}
                swipeArea>
                <Fragment>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: colors.lightWhite,
                      borderRadius: 20,
                      paddingVertical: 20,
                      paddingHorizontal: 15,
                      marginTop: '30%',
                      marginBottom: '20%',
                    }}>
                    <TouchableOpacity
                      onPress={() => setRescheduleModalVisible(false)}>
                      <Icon
                        name="circle-with-cross"
                        type="Entypo"
                        style={{
                          fontSize: 25,
                          color: '#ccc',
                          marginLeft: 'auto',
                          paddingHorizontal: 10,
                        }}
                      />
                    </TouchableOpacity>
                    <ScrollView
                      style={{
                        flex: 1,
                        backgroundColor: colors.lightWhite,
                        paddingHorizontal: 10,
                        paddingTop: 30,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: 15,
                          alignItems: 'center',
                        }}>
                        <Text
                          style={[AppStyles.mediumBold, { color: 'black' }]}>
                          Select Date
                        </Text>
                        <Icon
                          name="calendar"
                          type="AntDesign"
                          style={styles.icon}
                        />
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: 15,
                        }}>
                        {dates.map((_, i) => {
                          let date = new Date();
                          date = date.addDays(i);
                          let day = dateArr[date.getDay()];
                          let backgroundColor =
                            i == 0 ? colors.primaryBlue : 'white';
                          let color = i == 0 ? colors.white : 'grey';
                          return (
                            <TouchableOpacity
                              style={[
                                styles.date,
                                { backgroundColor, borderColor: color },
                              ]}>
                              <Text
                                style={[
                                  AppStyles.mediumBold,
                                  { color, marginBottom: 12 },
                                ]}>
                                {day}
                              </Text>
                              <Text style={{ ...AppStyles.mediumBold, color }}>
                                {date.getDate()}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: 15,
                          alignItems: 'center',
                        }}>
                        <Text
                          style={[AppStyles.mediumBold, { color: 'black' }]}>
                          Select Time
                        </Text>
                        <View
                          style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                          <View style={styles.smallBtn}>
                            <Text
                              style={[
                                AppStyles.smallestText,
                                { color: colors.primaryBlue, fontSize: 10 },
                              ]}>
                              00:00
                            </Text>
                          </View>
                          <View
                            style={[
                              styles.smallBtn,
                              { backgroundColor: colors.primaryBlue },
                            ]}>
                            <Text
                              style={[
                                AppStyles.smallestText,
                                { color: colors.white, fontSize: 10 },
                              ]}>
                              00:30
                            </Text>
                          </View>
                        </View>
                      </View>

                      <FlatList
                        style={{ marginBottom: 20 }}
                        data={times}
                        numColumns={4}
                        keyExtractor={(_, key) => key}
                        renderItem={({ item, index }) => (
                          <TouchableOpacity
                            activeOpacity={0.8}
                            style={
                              (index + 1) % 3
                                ? styles.timeItem
                                : [
                                    styles.timeItem,
                                    { backgroundColor: colors.white },
                                  ]
                            }>
                            <Text
                              style={
                                (index + 1) % 3
                                  ? [
                                      AppStyles.smallestText,
                                      {
                                        color: colors.primaryBlue,
                                        fontSize: 10,
                                      },
                                    ]
                                  : [
                                      AppStyles.smallestText,
                                      { color: '#de4d43', fontSize: 10 },
                                    ]
                              }>
                              {item}
                            </Text>
                          </TouchableOpacity>
                        )}
                      />
                      <Button title="Done" />
                    </ScrollView>
                  </View>
                </Fragment>
              </Modal>

              <TouchableOpacity
                onPress={toggleCancelModal}
                style={{
                  flex: 1,
                  borderRadius: 5,
                  marginStart: 15,
                  justifyContent: 'center',
                  padding: 10,
                  backgroundColor: colors.white,
                }}>
                <Text
                  style={[
                    AppStyles.mediumBold,
                    { color: colors.primaryBlue, textAlign: 'center' },
                  ]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              {/*Cancel Modal*/}
              <Modal
                isVisible={isCancelModalVisible}
                onBackdropPress={() => setCancelModalVisible(false)}
                onSwipeComplete={() => setCancelModalVisible(false)}
                swipeDirection={['left', 'right', 'up', 'down']}
                swipeArea>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: colors.lightWhite,
                    borderRadius: 20,
                    paddingVertical: 20,
                    paddingHorizontal: 15,
                    marginTop: '25%',
                    marginBottom: '15%',
                  }}>
                  <TouchableOpacity
                    onPress={() => setCancelModalVisible(false)}>
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
                  <ScrollView
                    style={{
                      flex: 1,
                      backgroundColor: colors.lightWhite,
                      paddingHorizontal: 15,
                      paddingTop: 50,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        paddingHorizontal: 10,
                        paddingVertical: 13,
                      }}>
                      <Radio
                        selected={true}
                        selectedColor={colors.primaryBlue}
                      />
                      <Text
                        style={[AppStyles.regularText, { paddingLeft: 15 }]}>
                        Prices are High
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        paddingHorizontal: 10,
                        paddingVertical: 13,
                      }}>
                      <Radio selected={false} color={colors.primaryBlue} />
                      <Text
                        style={[AppStyles.regularText, { paddingLeft: 15 }]}>
                        Did not get service provider details
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        paddingHorizontal: 10,
                        paddingVertical: 13,
                      }}>
                      <Radio selected={false} color={colors.primaryBlue} />
                      <Text
                        style={[AppStyles.regularText, { paddingLeft: 15 }]}>
                        Want the services at some other time
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        paddingHorizontal: 10,
                        paddingVertical: 13,
                      }}>
                      <Radio selected={false} color={colors.primaryBlue} />
                      <Text
                        style={[AppStyles.regularText, { paddingLeft: 15 }]}>
                        Others
                      </Text>
                    </View>

                    <View style={styles.textarea}>
                      <Textarea
                        style={[AppStyles.regularText, { height: 160 }]}
                        placeholderTextColor="grey"
                        placeholder="Description:"
                      />
                    </View>

                    <Button title="Done" />
                  </ScrollView>
                </View>
              </Modal>
            </View>
          </View>
          <Button title="Total Amount : 1,200 rs" />
        </ScrollView>
      </Fragment>
    </>
  );
};
export default MyOrderDetail;

const styles = StyleSheet.create({
  icon: {
    marginLeft: 'auto',
    backgroundColor: '#ccc',
    padding: 5,
    borderRadius: 50,
    fontSize: 20,
    color: colors.white,
  },
  smallBtn: {
    width: 50,
    backgroundColor: colors.white,
    margin: 4,
    marginVertical: 5,
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 10,
  },
  timeItem: {
    width: '23%',
    backgroundColor: colors.lightBlue,
    margin: 4,
    marginVertical: 5,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  date: {
    width: '16%',
    alignItems: 'center',
    margin: 3,
    borderRadius: 22,
    paddingVertical: 13,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  textarea: {
    marginVertical: 10,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 25,
  },
});
