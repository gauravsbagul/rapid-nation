import React, { Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Header from '../components/Header';
import { colors } from '../Asset/colors/colors';
import Button from '../components/Button';
import { Icon, Textarea } from 'native-base';
import { AppStyles } from '../AppStyles/Styles';
import { images } from '../Asset/images/images';

const Support = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.lightWhite }}>
      <ScrollView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
        <Header title="Support" noMic />
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: 80 }}>
            <View style={styles.input}>
              <Icon name="user" type="FontAwesome" style={styles.icon} />
              <TextInput
                style={[AppStyles.regularText, { flexGrow: 1 }]}
                placeholderTextColor="grey"
                placeholder="Name"
              />
            </View>
            <View style={styles.input}>
              <Icon name="email" type="MaterialIcons" style={styles.icon} />
              <TextInput
                style={[AppStyles.regularText, { flexGrow: 1 }]}
                placeholderTextColor="grey"
                placeholder="Email ID"
              />
            </View>
            <View style={styles.input}>
              <Icon
                name="mobile-phone"
                type="FontAwesome"
                style={styles.icon}
              />
              <TextInput
                style={[AppStyles.regularText, { flexGrow: 1 }]}
                placeholderTextColor="grey"
                placeholder="Phone Number*"
              />
            </View>
            <View style={styles.textarea}>
              <Image
                source={images.comment}
                style={[styles.lockIcon, { marginTop: 14 }]}
                resizeMode="contain"
              />
              <Textarea
                style={[AppStyles.regularText, { flexGrow: 1, height: 120 }]}
                placeholderTextColor="grey"
                placeholder="Comment"
              />
            </View>
          </View>
        </View>
        <View style={{ height: 80 }} />
      </ScrollView>
      <Button title="Submit" />
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({
  input: {
    marginVertical: 8,
    width: '92%',
    alignSelf: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  textarea: {
    marginVertical: 8,
    width: '92%',
    alignSelf: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderRadius: 30,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  icon: { fontSize: 20, marginHorizontal: 5, marginRight: 10, color: 'grey' },
  lockIcon: { height: 16, width: 16, marginLeft: 10, marginTop: 10 },
});
