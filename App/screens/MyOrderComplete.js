import React, { Fragment } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { images } from '../Asset/images/images';
import { AppStyles } from '../AppStyles/Styles';
import Button from '../components/Button';
import { colors } from '../Asset/colors/colors';
import { Icon } from 'native-base';

const MyOrdeComplete = ({ navigation }) => {
  const infoArray = [
    'Head, Shoulder and Foot Massage',
    'When tired, work out, Tense',
    'With curated essential oils',
  ];
  return (
    <Fragment>
      <ScrollView>
        <Text
          style={[
            AppStyles.semiBold,
            { textAlign: 'center', marginVertical: 20 },
          ]}>
          Completed
        </Text>
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
        <View
          style={{
            marginTop: 20,
            margin: 10,
            backgroundColor: colors.white,
            padding: 10,
          }}>
          <View style={{ flexDirection: 'row', marginVertical: 20 }}>
            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
              <Text
                style={[
                  AppStyles.smallestText,
                  { color: colors.grey, marginBottom: 10 },
                ]}>
                Service
              </Text>
              <Text style={[AppStyles.smallBold]}>Sara Fruit Cleanup</Text>
            </View>
            <View
              style={{ height: 60, width: 0.5, backgroundColor: colors.grey }}
            />
            <View
              style={{
                flex: 1.8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  AppStyles.smallestText,
                  { color: '#363636', marginBottom: 10 },
                ]}>
                30/12/2019 2:00Pm
              </Text>
              <Text
                style={[
                  AppStyles.smallText,
                  { color: '#363636', fontSize: 11 },
                ]}>
                Booking ID : <Text style={{ fontWeight: 'bold' }}>114084</Text>
              </Text>
              <Text
                style={[
                  AppStyles.smallText,
                  { color: '#363636', fontSize: 11 },
                ]}>
                Vendor ID : <Text style={{ fontWeight: 'bold' }}>008877</Text>
              </Text>
            </View>
            <View
              style={{ height: 60, width: 0.5, backgroundColor: colors.grey }}
            />
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 3,
                  alignItems: 'center',
                }}>
                <Icon
                  name="rupee"
                  type="FontAwesome"
                  style={{ color: colors.grey, fontSize: 12 }}
                />
                <Text
                  style={[
                    AppStyles.smallBold,
                    { textDecorationLine: 'line-through', color: colors.grey },
                  ]}>
                  {' 1,000'}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 3,
                  alignItems: 'center',
                }}>
                <Icon
                  name="rupee"
                  type="FontAwesome"
                  style={{ color: '#363636', fontSize: 18 }}
                />
                <Text style={[AppStyles.mediumBold, { color: 'black' }]}>
                  {' 800'}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={{ flex: 5, justifyContent: 'flex-start' }}>
              <Text style={[AppStyles.mediumBold]}>
                Body massage with Shoulder massage, neck
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={images.clock_blue}
                style={{ width: 15, height: 15 }}
              />
              <Text
                style={[AppStyles.smallestText, { color: colors.primaryBlue }]}>
                40 Mins
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 10, justifyContent: 'center' }}>
            <FlatList
              data={infoArray}
              keyExtractor={(_, key) => key}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 4,
                  }}>
                  <View
                    style={{
                      marginEnd: 10,
                      width: 6,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: 'black',
                    }}
                  />
                  <View>
                    <Text
                      style={[
                        AppStyles.smallText,
                        { color: '#363636', fontSize: 12 },
                      ]}>
                      {item}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'center',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Image
                  source={images.profile_ananya}
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                />
              </View>
              <View style={{ justifyContent: 'center', paddingStart: 20 }}>
                <Text style={AppStyles.mediumBold}>Cihan Soysakal </Text>
                <View style={{ flexDirection: 'row', marginTop: 2 }}>
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
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <Text
                style={[
                  AppStyles.smallestText,
                  { color: colors.primaryBlue, fontWeight: 'bold' },
                ]}>
                Assigned
              </Text>
              <View
                style={{
                  width: 30,
                  height: 1,
                  backgroundColor: colors.primaryBlue,
                  alignSelf: 'flex-end',
                }}
              />
            </View>
          </View>
          <Text
            style={[AppStyles.smallBold, { marginTop: 20, marginBottom: 10 }]}>
            Date & Time
          </Text>
          <View
            style={{
              flex: 1,
              borderRadius: 10,
              backgroundColor: colors.lightWhite,
              padding: 10,
              justifyContent: 'center',
            }}>
            <Text
              style={[
                AppStyles.smallText,
                { color: '#363636', textAlign: 'center' },
              ]}>
              Monday, 24/11/2019-12:00 PM
            </Text>
          </View>
          <Text
            style={[AppStyles.smallBold, { marginTop: 20, marginBottom: 10 }]}>
            Address
          </Text>
          <View
            style={{
              flex: 1,
              borderRadius: 10,
              backgroundColor: colors.lightWhite,
              padding: 10,
              justifyContent: 'center',
            }}>
            <Text
              style={[
                AppStyles.smallText,
                { color: '#363636', textAlign: 'center' },
              ]}>
              93/1, Near Tulisi Therater,MainRoad HAL Old Airport, Banglore -
              India
            </Text>
          </View>
          <View
            style={{ flexDirection: 'row', padding: 10, marginVertical: 10 }}>
            <View style={{ flex: 2, padding: 10, flexDirection: 'row' }}>
              <TouchableOpacity
                style={{
                  borderRadius: 5,
                  backgroundColor: colors.primaryBlue,
                  padding: 5,
                  paddingHorizontal: 20,
                }}>
                <Text
                  style={[
                    AppStyles.smallBold,
                    { color: colors.white, textAlign: 'center' },
                  ]}>
                  Repeat
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('invoice')}
                style={{
                  borderRadius: 5,
                  borderColor: colors.primaryBlue,
                  paddingHorizontal: 20,
                  borderWidth: 1,
                  marginStart: 15,
                  padding: 5,
                  backgroundColor: colors.white,
                }}>
                <Text
                  style={[
                    AppStyles.smallBold,
                    { color: colors.primaryBlue, textAlign: 'center' },
                  ]}>
                  Invioce
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 3,
                  alignItems: 'center',
                }}>
                <Icon
                  name="rupee"
                  type="FontAwesome"
                  style={{ color: colors.grey, fontSize: 12 }}
                />
                <Text
                  style={[
                    AppStyles.smallBold,
                    { textDecorationLine: 'line-through', color: colors.grey },
                  ]}>
                  {' 1,200'}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 3,
                  alignItems: 'center',
                }}>
                <Icon
                  name="rupee"
                  type="FontAwesome"
                  style={{ color: '#363636', fontSize: 18 }}
                />
                <Text style={[AppStyles.mediumBold, { color: 'black' }]}>
                  {' 800'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
};
export default MyOrdeComplete;
