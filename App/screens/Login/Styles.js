import { Dimensions, Platform, StyleSheet } from 'react-native';
import React from 'react';
const { width, height } = Dimensions.get('window');
const Styles = StyleSheet.create({
  skip_now: {
    alignSelf: 'flex-end',
    textAlign: 'right',
    fontSize: 12,
    color: '#000000',
  },
  welcome_back: {
    fontWeight: 'bold',
    fontSize: 27,
  },
  login_to_continue: {
    textAlign: 'center',
    fontSize: 15,
    color: '#B9B9B9',
  },
  input: {
    height: 50,
    width: width - 55,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  otp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderWidth: Platform.OS === 'ios' ? 0.5 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    marginLeft: 10,
    width: 65,
    height: 65,
  },
});

export default Styles;
