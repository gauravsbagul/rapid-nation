import React, { Fragment, useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { AppStyles } from '../../AppStyles/Styles';
import { colors } from '../../Asset/colors/colors';
import { images } from '../../Asset/images/images';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {
  clearGetCategoryProps,
  clearGetSubCategoryProps,
  getCategory,
  getSubCategory,
} from '../../Redux/actions/Category/userCategory';

const AllHomeServices = (props) => {
  const [gender, setGender] = useState('male');
  const [categoryId, setCategoryId] = useState(props.route?.params?.item?._id);
  const [services, setServices] = useState([]);
  const { navigation } = props;

  useEffect(() => {
    if (categoryId.length) {
      props.getSubCategory({ category_id: categoryId });
    }
  }, [categoryId]);

  const onServiceSelection = (item) => {
    if (item.title == 'Salon') {
      setIsGenderModalVisible(true);
    } else {
      Alert.alert(``, 'No Subcategory Available', [{ text: 'OK' }], {
        cancelable: false,
      });
    }
  };

  useEffect(() => {
    if (props.navigation.isFocused()) {
      if (
        props.category?.getUserSubCategory?.response?.response &&
        props.category?.getUserSubCategory?.response?.status
      ) {
        props.clearGetSubCategoryProps();
        if (props.category?.getUserSubCategory?.response?.response.length) {
          setServices(props.category?.getUserSubCategory?.response?.response);
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

  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.header_linear_1}
      />
      <ScrollView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
        <Header onMicPress={() => {}} />
        <View style={styles.genderSelctionWrapper}>
          <TouchableOpacity
            style={
              gender == 'male' ? styles.activeBox : { marginHorizontal: 20 }
            }
            onPress={() => setGender('male')}>
            <Image source={images.boy} style={styles.genderImage} />
            <Text
              style={
                gender == 'male'
                  ? styles.genderActiveText
                  : styles.genderInActiveText
              }>
              Men
            </Text>
          </TouchableOpacity>
          <View
            style={{ width: 0.5, height: '80%', backgroundColor: colors.grey }}
          />
          <TouchableOpacity
            style={
              gender == 'female' ? styles.activeBox : { marginHorizontal: 20 }
            }
            onPress={() => setGender('female')}>
            <Image style={styles.genderImage} source={images.girl} />
            <Text
              style={
                gender == 'female'
                  ? styles.genderActiveText
                  : styles.genderInActiveText
              }>
              Women
            </Text>
          </TouchableOpacity>
          <View
            style={{ width: 0.5, height: '80%', backgroundColor: colors.grey }}
          />
          <TouchableOpacity
            style={
              gender == 'couple' ? styles.activeBox : { marginHorizontal: 20 }
            }
            onPress={() => setGender('couple')}>
            <Image style={styles.genderImage} source={images.couple} />
            <Text
              style={
                gender == 'couple'
                  ? styles.genderActiveText
                  : styles.genderInActiveText
              }>
              Couple
            </Text>
          </TouchableOpacity>
        </View>
        {/* All Services */}
        <View style={{ paddingHorizontal: 4, marginVertical: 20 }}>
          <FlatList
            data={services}
            keyExtractor={(_, key) => key}
            numColumns={3}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.servicesContainer}
                  onPress={() =>
                    navigation.navigate('MessagesAndCheckup', {
                      item,
                      gender,
                      services,
                    })
                  }>
                  <Image
                    source={{
                      uri: `https://portal.rapidnation.in/category/${item.image}`,
                    }}
                    style={{ height: '80%', marginBottom: 5, width: '100%' }}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      ...AppStyles.smallText,
                      textAlign: 'center',
                      color: '#000',
                      fontSize: 15,
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            ...AppStyles.mediumBold,
            textAlign: 'center',
            paddingHorizontal: 15,
            color: '#000',
            fontSize: 16,
          }}>
          About Maintenance and Work
        </Text>
        <Text
          style={{
            ...AppStyles.smallText,
            paddingHorizontal: 20,
            marginVertical: 3,
          }}>
          When most people tell you they have a couple of cats at home, these
          probably aren't the type of cat you’d expect, but for one family in
          Gaza, these lion cubs are their household pets. Lioness Mona and Alex,
          who’s a male, were born in the battle-torn Gaza Strip to parents that
          were smuggled through a ...When most people tell you they have a
          couple of cats at home these probably aren't the type of cat you’d
          expect, but for one family in Gaza, these lion cubs are their
          household pets. Lioness Mona and Alex, who’s a male, were born in the
          battle-torn Gaza Strip to parents that were smuggled through a ...
        </Text>
        <View style={{ marginVertical: 15 }}>
          <Button
            disabled={!services.length}
            title="Next"
            onPress={() =>
              navigation.navigate('MessagesAndCheckup', {
                item: services[0],
                gender,
                services,
              })
            }
          />
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllHomeServices);

const styles = StyleSheet.create({
  servicesContainer: {
    width: '33%',
    height: 120,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.lightWhite,
    borderWidth: 0.8,
    backgroundColor: colors.white,
  },
  activeBox: {
    marginHorizontal: 20,
    borderBottomWidth: 3,
    borderBottomColor: colors.darkBrown,
    paddingHorizontal: 5,
  },
  genderSelctionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  genderImage: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
  genderActiveText: {
    ...AppStyles.regularText,
    textAlign: 'center',
  },
  genderInActiveText: {
    ...AppStyles.medium,
    textAlign: 'center',
    color: 'black',
  },
});
