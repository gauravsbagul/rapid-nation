import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import { Icon } from 'native-base';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '@View/Login';
import ForgotPassword from '@View/Login/ForgotPassword';
import ForgotPasswordOtp from '@View/Login/ForgotPasswordOtp';
import SetNewPassword from '@View/Login/SetNewPassword';
import Signup from '@View/Signup';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SelectLocation from '@View/SelectLocation';
import Home from './screens/Home';
import { connect } from 'react-redux';
import { fetchUser } from './Redux/actions/Auth/userActions';
import { colors } from './Asset/colors/colors';
import Order from './screens/Order';
import ScanAndPay from './screens/ScanAndPay';
import Favorite from './screens/Favorite';
import Account from './screens/Account';
import AllHomeServices from './screens/AllHomeServices';
import MessagesAndCheckup from './screens/MessagesAndCheckup';
import ReadMoreReview from './screens/ReadMoreReview';
import MessagePcakgeDetails from './screens/MessagePcakgeDetails';
import Cart from './screens/Cart';
import Location from './screens/Location';
import Schedule from './screens/Shedule';
import Checkout from './screens/Checkout';
import MyProfile from './screens/MyProfile';
import MyWallet from './screens/MyWallet';
import MyOrder from './screens/MyOrder';
import MyOrderDetail from './screens/MyOrderDetail';
import Subscription from './screens/Subscription';
import Notification from './screens/Notification';
import ReferAndEarn from './screens/ReferAndEarn';
import Blog from './screens/Blog';
import Support from './screens/Support';
import ServiceArea from './screens/ServiceArea';
import Offers from './screens/Offers';
import Faqs from './screens/Faqs';
import PrivacyPolicy from './screens/PrivacyPolicy';
import RateUs from './screens/RateUs';
import JoinUs from './screens/JoinUs';
import ExploreServiceCityWise from './screens/ExploreServiceCityWise';
import Invoice from './screens/Invoice';
import MyOrderComplete from './screens/MyOrderComplete';

const { width, height } = Dimensions.get('window');

const Stack = createStackNavigator();
const UserStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SettingsScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{props.route.name}</Text>
    </View>
  );
};

const SlasScrine = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor('#00000', true);
    StatusBar.setBarStyle('light-content', true);
  }, []);
  return (
    <View style={{ backgroundColor: '#000' }}>
      <Image source={require('./Asset/screen.png')} style={{ width, height }} />
    </View>
  );
};

const CustomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: colors.primaryBlue,
        inactiveTintColor: colors.grey,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? colors.primaryBlue : colors.grey;
            return <Icon name="home" type="Entypo" style={{ color }} />;
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={MyOrder}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? colors.primaryBlue : colors.grey;
            return (
              <Icon
                name="truck-fast"
                type="MaterialCommunityIcons"
                style={{ color }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="QR"
        component={ScanAndPay}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? colors.primaryBlue : colors.grey;
            return <Icon name="qrcode" type="AntDesign" style={{ color }} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? colors.primaryBlue : colors.grey;
            return <Icon name="heart" type="AntDesign" style={{ color }} />;
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? colors.primaryBlue : colors.grey;
            return <Icon name="user" type="AntDesign" style={{ color }} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const UserScreens = () => {
  return (
    <UserStack.Navigator headerMode="none" initialRouteName="Main">
      <UserStack.Screen
        name="Main"
        options={{
          headerTitle: 'Main',
        }}>
        {(props) => <CustomTab {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="AllHomeServices">
        {(props) => <AllHomeServices {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="MessagesAndCheckup">
        {(props) => <MessagesAndCheckup {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="ReadMoreReview">
        {(props) => <ReadMoreReview {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="MessagePackageDetails">
        {(props) => <MessagePcakgeDetails {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="Cart">
        {(props) => <Cart {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="Location">
        {(props) => <Location {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="SelectSchedule">
        {(props) => <Schedule {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="SelectCheckout">
        {(props) => <Checkout {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="My Profile">
        {(props) => <MyProfile {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="My Wallet">
        {(props) => <MyWallet {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="My Order">
        {(props) => <MyOrder {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="My Order Detail">
        {(props) => <MyOrderDetail {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="Subscription">
        {(props) => <Subscription {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="Notification">
        {(props) => <Notification {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="Refer and Earn">
        {(props) => <ReferAndEarn {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="Blog">
        {(props) => <Blog {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="Support">
        {(props) => <Support {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="Service Area">
        {(props) => <ServiceArea {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="Offers">
        {(props) => <Offers {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="FAQ's">
        {(props) => <Faqs {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="Privacy Policy">
        {(props) => <PrivacyPolicy {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="Rate Us">
        {(props) => <RateUs {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="Join Us">
        {(props) => <JoinUs {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="Explore services">
        {(props) => <ExploreServiceCityWise {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="invoice">
        {(props) => <Invoice {...props} />}
      </UserStack.Screen>
      <UserStack.Screen name="My Order Complete">
        {(props) => <MyOrderComplete {...props} />}
      </UserStack.Screen>
    </UserStack.Navigator>
  );
};

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      headerMode="none"
      // mode="modal"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ForgotPasswordOtp" component={ForgotPasswordOtp} />
      <Stack.Screen name="SetNewPassword" component={SetNewPassword} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="SelectLocation" component={SelectLocation} />
    </Stack.Navigator>
  );
}

const Navigation = ({ isAuthenticated, fetchUser }) => {
  console.log('Navigation -> isAuthenticated', isAuthenticated);
  const [isLoad, setIsLoad] = useState(true);
  useEffect(() => {
    fetchUser();
    // setTimeout(() => {
    //   setIsLoad(false);
    //   StatusBar.setBackgroundColor("#F9F9F9", true);
    //   StatusBar.setBarStyle("dark-content", true);
    // }, 1000);
  }, []);

  // if (isLoad) {
  //   <SlasScrine />
  // }

  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <NavigationContainer>
        {isAuthenticated.isAuthenticated ? <UserScreens /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = ({ user: isAuthenticated }) => ({
  isAuthenticated,
});

export default connect(mapStateToProps, { fetchUser })(Navigation);
