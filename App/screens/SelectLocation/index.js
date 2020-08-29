import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Icon, Button, Footer, Container } from 'native-base';
import Styles from './Styles';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { login } from '../../actions/Auth/userActions';

const { width, height } = Dimensions.get('window');

const SelectLocation = ({ navigation, login }) => {
  const [verify, setVerify] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
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
  return (
    <Container>
      <View
        style={{
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
          flex: 1,
          backgroundColor: '#F9F9F9',
        }}>
        <View style={{ paddingTop: 15 }}>
          <Text style={Styles.welcome_back}>Select Location</Text>
          <View style={{ paddingVertical: 10 }}>
            <View style={Styles.input}>
              <Icon
                name="search"
                type="Ionicons"
                style={{ color: '#8B8B8B', fontSize: 18, marginLeft: -10 }}
              />
              <TextInput
                style={{ marginLeft: 10, width: '90%' }}
                // onChangeText={text => onChangeText(text)}
                // value={null}
                placeholder={'Search'}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            paddingVertical: 20,
          }}>
          <Button
            rounded
            style={{
              width: 200,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFFFFF',
            }}>
            <Text style={{ color: '#0D83EE', fontSize: 13 }}>Select City</Text>
          </Button>
        </View>

        <FlatList
          style={{ width: '100%', padding: '1%' }}
          contentContainerStyle={{ alignItems: 'center' }}
          data={City}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => console.log('state')}
                style={styles.flatListItem}>
                <Image
                  source={item.path}
                  style={{ width: 90, height: 90 }}
                  resizeMode="contain"
                />
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    alignItems: 'center',
                  }}>
                  <Text>{item.name}</Text>
                  <View style={{ ...styles.selectBtn }}>
                    <View
                      style={[
                        { width: 10, height: 10, borderRadius: 10 },
                        { backgroundColor: index == 0 ? '#0D83EE' : '#fff' },
                      ]}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Footer style={{ backgroundColor: '#F9F9F9' }}>
        <Button
          onPress={() => login()}
          rounded
          style={{
            width: width - 80,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0D83EE',
          }}>
          <Text style={{ color: '#fff' }}>Submit</Text>
        </Button>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
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
  flatListItem: {
    backgroundColor: 'white',
    width: 140,
    margin: 7,
    height: 140,
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
});

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { login })(SelectLocation);
