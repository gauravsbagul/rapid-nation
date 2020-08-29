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
import { colors } from '../Asset/colors/colors';
import { AppStyles } from '../AppStyles/Styles';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      day: '1 DAY AGO',
      text:
        'Announcing new G Suite partner integrations for eDiscovery and archiving ',
    },
    {
      id: 2,
      day: '5 DAYS AGO',
      text:
        'Bots in Hangouts Chat: How they can help developers change the conversation',
    },
    {
      id: 3,
      day: 'JAN 16',
      text:
        'Announcing new G Suite partner integrations for eDiscovery and archiving ',
    },
  ];
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
      <Header title="Blog" noMic />
      <View style={{ flex: 1, paddingTop: 40 }}>
        <Text
          style={[AppStyles.boldText, { marginLeft: 30, marginBottom: 15 }]}>
          All the latest
        </Text>
        {blogs.map((blog, key) => (
          <View style={styles.inputLike} key={blog.id}>
            <Text
              style={[AppStyles.smallText, { color: 'grey', marginBottom: 7 }]}>
              {blog.day}
            </Text>
            <Text
              style={[
                AppStyles.mediumBold,
                { color: 'black', paddingBottom: 9 },
              ]}>
              {blog.text}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Blog;

const styles = StyleSheet.create({
  inputLike: {
    marginVertical: 8,
    // width: '92%',
    marginHorizontal: 15,
    alignSelf: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
