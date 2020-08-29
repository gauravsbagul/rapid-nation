import React, { Fragment, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Header from '../components/Header';
import { colors } from '../Asset/colors/colors';
import { images } from '../Asset/images/images';
import { AppStyles } from '../AppStyles/Styles';
import Button from '../components/Button';
import {
  Card,
  CardItem,
  Thumbnail,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem,
} from 'native-base';

const Favorite = () => {
  const [showFavorite, setShowFavorite] = useState(true);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
      <Header title="Favorite" noMic />
      {showFavorite ? (
        <View style={{ marginTop: 30, paddingHorizontal: 12 }}>
          <Card style={{ marginBottom: 25 }}>
            <CardItem cardBody>
              <ImageBackground
                source={images.head_shoulder}
                style={{ height: 150, width: null, flex: 1 }}>
                <Image
                  source={images.off_20}
                  style={{ alignSelf: 'flex-end', marginRight: -15 }}
                />
              </ImageBackground>
            </CardItem>
            <CardItem style={{ paddingHorizontal: 9 }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 4 }}>
                  <Text style={{ ...AppStyles.semiBold }}>
                    Hair coloring, elderly males and females with white hairs.
                  </Text>
                </View>
                <View style={{ flex: 0.8, alignItems: 'flex-end' }}>
                  <Icon
                    name="md-alarm-outline"
                    style={{ color: '#007aff', fontSize: 21 }}
                  />
                  <Text style={{ color: '#007aff', fontSize: 11 }}>
                    40 Mins
                  </Text>
                </View>
              </View>
            </CardItem>
            <CardItem style={{ paddingHorizontal: 9, flexDirection: 'column' }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Icon type="Entypo" name="dot-single" />
                </View>
                <View style={{ flex: 9 }}>
                  <Text style={{ ...AppStyles.regularText }}>
                    Head, Shoulder and Foot Massage
                  </Text>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Icon type="Entypo" name="dot-single" />
                </View>
                <View style={{ flex: 9 }}>
                  <Text style={{ ...AppStyles.regularText }}>
                    When tired, work out, tense
                  </Text>
                </View>
              </View>
            </CardItem>

            <View style={{ flexDirection: 'row', flex: 1, marginRight: 5 }}>
              <View style={{ flex: 3, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Button secondary title="View Details" />
                </View>
                <View style={{ flex: 1 }}>
                  <Button title="Repeat" />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 5,
                    marginLeft: 40,
                    alignItems: 'center',
                  }}>
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
                      },
                    ]}>
                    1000
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 5,
                    marginLeft: 40,
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="rupee"
                    type="FontAwesome"
                    style={{ fontSize: 15 }}
                  />
                  <Text style={[AppStyles.regularText]}>800</Text>
                </View>
              </View>
            </View>
          </Card>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 70,
          }}>
          <Image
            style={{ width: 90, height: 90 }}
            resizeMode="contain"
            source={images.favorite}
          />
          <Text
            style={[
              AppStyles.regularText,
              {
                textAlign: 'center',
                color: 'grey',
                marginTop: 5,
                marginBottom: 100,
              },
            ]}>
            You don't have any service in your FAVORITE
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
