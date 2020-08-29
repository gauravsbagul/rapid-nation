import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Accordion, Icon } from 'native-base';
import IconEntypto from 'react-native-vector-icons/Entypo';
import Header from '../components/Header';
import { colors } from '../Asset/colors/colors';
import { AppStyles } from '../AppStyles/Styles';

const Faqs = () => {
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);

  const faqs = [
    {
      id: 1,
      title: 'How to cancel my order',
      content:
        'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    },
    {
      id: 2,
      title: 'How will I get refund',
      content:
        'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    },
    {
      id: 3,
      title: 'How will I track my order',
      content:
        'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    },
  ];

  const renderHeader = (item, expanded) => {
    return (
      <View style={styles.innerContainer}>
        <View style={{ flex: 2 }}>
          <Text style={AppStyles.regularText}>{item.title}</Text>
        </View>
        <View style={styles.iconStyle}>
          {expanded ? (
            <Icon style={{ fontSize: 18 }} name="remove" />
          ) : (
            <Icon style={{ fontSize: 18 }} name="add" />
          )}
        </View>
      </View>
    );
  };
  const renderContent = (item) => {
    return (
      <View style={styles.descriptionContainer}>
        <Text
          style={[
            AppStyles.regularText,
            { color: colors.grey, textAlign: 'center' },
          ]}>
          {item.content}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
      <Header title="FAQ's" noMic />
      <View style={styles.container}>
        {/* <Accordion
          dataArray={faqs}
          animation={true}
          expanded={true}
          renderHeader={renderHeader}
          renderContent={renderContent}
        /> */}
        <>
          <View style={styles.innerContainer}>
            <View style={{ flex: 2 }}>
              <Text style={AppStyles.regularText}>How to cancel my order</Text>
            </View>
            <View style={styles.iconStyle}>
              <TouchableOpacity
                onPress={() => {
                  setShowOne(!showOne);
                }}>
                <IconEntypto name="plus" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          {showOne ? (
            <View style={styles.descriptionContainer}>
              <Text
                style={[
                  AppStyles.regularText,
                  { color: colors.grey, textAlign: 'center' },
                ]}>
                Lorem Ipsum has been the industry standard dummy text ever since
                the 1500s
              </Text>
            </View>
          ) : null}

          <View style={styles.innerContainer}>
            <View style={{ flex: 2 }}>
              <Text style={AppStyles.regularText}>How will I get refund</Text>
            </View>
            <View style={styles.iconStyle}>
              <TouchableOpacity
                onPress={() => {
                  setShowTwo(!showTwo);
                }}>
                <IconEntypto name="plus" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          {showTwo ? (
            <View style={styles.descriptionContainer}>
              <Text
                style={[
                  AppStyles.regularText,
                  { color: colors.grey, textAlign: 'center' },
                ]}>
                Lorem Ipsum has been the industry standard dummy text ever since
                the 1500s
              </Text>
            </View>
          ) : null}

          <View style={styles.innerContainer}>
            <View style={{ flex: 2 }}>
              <Text style={AppStyles.regularText}>
                How will I track my order
              </Text>
            </View>
            <View style={styles.iconStyle}>
              <TouchableOpacity
                onPress={() => {
                  setShowThree(!showThree);
                }}>
                <IconEntypto name="plus" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          {showThree ? (
            <View style={styles.descriptionContainer}>
              <Text
                style={[
                  AppStyles.regularText,
                  { color: colors.grey, textAlign: 'center' },
                ]}>
                Lorem Ipsum has been the industry standard dummy text ever since
                the 1500s
              </Text>
            </View>
          ) : null}
        </>
      </View>
    </ScrollView>
  );
};

export default Faqs;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    paddingHorizontal: 25,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.lightBlue,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  iconStyle: {
    flex: 1,
    alignItems: 'flex-end',
  },
  descriptionContainer: {
    paddingHorizontal: 5,
    alignItems: 'center',
    marginBottom: 30,
  },
  text: {
    color: colors.grey,
    fontSize: 14,
    textAlign: 'center',
  },
});
