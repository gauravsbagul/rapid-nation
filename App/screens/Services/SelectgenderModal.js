import { Button, Text } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const SelectGenderModal = (props) => {
  const { isGenderModalVisible, onRequestGenderModalClose } = props;
  return (
    <Modal
      isVisible={isGenderModalVisible}
      Ionicons
      onBackdropPress={onRequestGenderModalClose}
      onSwipeComplete={onRequestGenderModalClose}
      swipeDirection={['left', 'right', 'up', 'down']}
      swipeArea
      style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.dialog}>
        <View style={styles.titleWrapper}>
          <Ionicons name={'cut-sharp'} size={25} />
          <Text style={{ fontSize: 20, marginStart: 20, fontWeight: '700' }}>
            Salon Service
          </Text>
        </View>
        <TouchableOpacity style={styles.genderOption}>
          <MaterialCommunityIcons name={'face'} size={25} />
          <Text style={styles.optionTitle}>Men</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.genderOption}>
          <MaterialCommunityIcons name={'face-woman'} size={25} />
          <Text style={styles.optionTitle}>Women</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.genderOption}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <MaterialCommunityIcons name={'face'} size={25} />
            <MaterialCommunityIcons name={'face-woman'} size={25} />
          </View>
          <Text style={styles.optionTitle}>Couple</Text>
        </TouchableOpacity>
        <Button
          style={{ alignSelf: 'center' }}
          onPress={onRequestGenderModalClose}>
          <Text>close</Text>
        </Button>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  dialog: {
    backgroundColor: '#fff',
    marginHorizontal: 30,
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
    alignItems: 'center',
  },
  optionTitle: {
    fontSize: 20,
    marginStart: 20,
  },
  genderOption: {
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
});
