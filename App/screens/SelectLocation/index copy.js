import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import { Icon, Button } from 'native-base';
import Styles from "./Styles"
import Modal from 'react-native-modal';


const { width, height } = Dimensions.get('window');

const Signup = ({ navigation }) => {

    const [verify, setVerify] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <View style={
            {
                alignItems: "center",
                paddingHorizontal: 20,
                paddingVertical: 10,
                flex: 1,
                backgroundColor: "#fff"
            }
        }>
            <View style={{ paddingTop: 15 }}>
                <Text style={Styles.welcome_back}>
                    Hey There
                </Text>
                <Text style={Styles.login_to_continue}>
                    Sign up to continue
                </Text>
            </View>
            <View style={{ flexDirection: "row", paddingVertical: 10, paddingHorizontal: 20, width: "100%", alignItems: "center" }}>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Login");
                    }}
                    style={{
                        // borderBottomColor: "#000",
                        // borderBottomWidth: 3,
                        paddingBottom: 20,
                        marginTop: 11.5,
                        paddingHorizontal: 30,
                    }}
                >
                    <Text style={{
                        // fontWeight: "bold",
                        fontSize: 16,
                        color: "rgba(0, 0, 0, 255)",

                    }}>
                        Login
                    </Text>
                </TouchableOpacity>


                <View style={{
                    // marginStart: 60.5,
                    marginHorizontal: 30,
                    backgroundColor: "#ccc",
                    height: 42,
                    width: 1
                }}
                />
                <View style={{
                    borderBottomColor: "#000",
                    borderBottomWidth: 3,
                    paddingBottom: 20,
                    marginTop: 11.5,
                    paddingHorizontal: 35,
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 16,
                        color: "rgba(16, 16, 16, 255)",
                        // 

                    }}>
                        Signup
                    </Text>
                </View>

            </View>
            <View style={{ paddingHorizontal: 20, }}>

                <View style={{ paddingVertical: 6 }}>
                    <View style={Styles.input}>
                        <Icon name="user" type="FontAwesome" style={{ color: "#8B8B8B", fontSize: 20, marginLeft: -10 }} />
                        <TextInput
                            style={{ marginLeft: 10, width: "90%" }}
                            // onChangeText={text => onChangeText(text)}
                            // value={null}
                            placeholder={"Name"}
                        />
                    </View>
                </View>

                <View style={{ paddingVertical: 6 }}>
                    <View style={Styles.input}>
                        <Icon name="email" type="MaterialCommunityIcons" style={{ color: "#8B8B8B", fontSize: 18, marginLeft: -10 }} />
                        <TextInput
                            style={{ marginLeft: 10, width: "90%" }}
                            // onChangeText={text => onChangeText(text)}
                            // value={null}
                            placeholder={"Email ID"}
                        />
                    </View>
                </View>


                <View style={{ paddingVertical: 6 }}>
                    <View style={Styles.input}>
                        <Icon name="mobile-phone" type="FontAwesome" style={{ color: "#8B8B8B", fontSize: 24, marginLeft: -5 }} />
                        <TextInput
                            style={{ marginLeft: 10, width: "85%" }}
                            // onChangeText={text => onChangeText(text)}
                            // value={null}
                            placeholder={"Phone Number *"}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                setIsModalVisible(true);
                            }}
                        >
                            <Text style={{ fontSize: 10, color: "#FF0000" }}>
                                {!verify ? "Verify" : "Verified"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ paddingVertical: 6 }}>
                    <View style={Styles.input}>
                        <Icon name="lock" type="Entypo" style={{ color: "#8B8B8B", fontSize: 18, marginLeft: -10 }} />
                        <TextInput
                            style={{ marginLeft: 10, width: "90%" }}
                            // onChangeText={text => onChangeText(text)}
                            // value={null}
                            placeholder={"Password"}
                            secureTextEntry={true}
                        />
                    </View>
                </View>





                <TouchableOpacity onPress={() => {
                    navigation.navigate("ForgotPassword");
                }} >
                    <Text style={{ textAlign: "center", paddingTop: 15, color: "#0D83EE", fontSize: 12 }}>Forgot Password ?</Text>

                </TouchableOpacity>

            </View>

            <View style={{ marginTop: 10, }}>
                <Text style={{ textAlign: "center", color: "#000000", fontSize: 10, fontFamily: "Montserrat", paddingVertical: 3 }}>By Singing up your Agree to Our TC *</Text>
                <Button rounded style={{ width: width - 80, height: 50, alignItems: "center", justifyContent: "center", backgroundColor: "#0D83EE" }}>
                    <Text style={{ color: "#fff" }}>Signup</Text>
                </Button>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingTop: 10 }}>
                    <Text style={{ fontSize: 13 }}>
                        A new user ?
                    </Text>
                    <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                        {" "} {" "}
                        New Register
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: height - 640, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "#A7A5A5", fontSize: 15, textAlign: "center", paddingBottom: 10 }}>Login with</Text>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: 25 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: 7 }}>
                        <Image source={require('@Ass/fb.png')} style={{ height: 53, width: 53 }} />
                        <Text style={{ color: "#141313", paddingLeft: 10, fontSize: 15 }}>
                            Facebook
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: 7 }}>
                        <Image source={require('@Ass/google.png')} style={{ height: 53, width: 53 }} />
                        <Text style={{ color: "#141313", paddingLeft: 10, fontSize: 15 }}>
                            Google
                        </Text>
                    </View>
                </View>
            </View>


            {/* model */}
            <Modal 
                isVisible={isModalVisible}
                swipeDirection={['down']}
                onSwipeMove={(val) => {
                    // console.log('onSwipeMove', val);
                }}
                onSwipeComplete={() => {
                    setIsModalVisible(false);
                }}
            >
                <OtpVerify Verified={()=>{
                     setIsModalVisible(!isModalVisible);
                     setVerify(true);
                }} />
            </Modal>
        </View>
    );
};

const OtpVerify = ({Verified}) => {
    return (
        <View
            style={{
                flex: 1,
                // width, 
                // height,
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <View
                style={{
                    backgroundColor: "#fff",
                    paddingVertical: 40,
                    borderRadius: 25,
                    
                }}
            >
                <View style={{ paddingTop: 0 }}>
                    <Text style={[Styles.welcome_back, { textAlign: "center", alignItems: "center" }]}>
                        OTP
                </Text>
                    <Text style={[Styles.login_to_continue, {
                        paddingHorizontal: 50,
                        fontSize: 12,
                        paddingTop: 20
                    }]}>
                        We have send the top on 9988776655
                        will apply auto to the fields
                </Text>



                    <View style={{ marginLeft: -10, paddingTop: 80, paddingBottom: 10, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <TextInput
                            style={Styles.otp}
                        // onChangeText={text => onChangeText(text)}
                        // value={null}
                        // maxLength={1}
                        />
                        <TextInput
                            style={Styles.otp}
                        // onChangeText={text => onChangeText(text)}
                        // value={null}
                        // placeholder={"Mobile Number"}
                        />
                        <TextInput
                            style={Styles.otp}
                        // onChangeText={text => onChangeText(text)}
                        // value={null}
                        // placeholder={"Mobile Number"}
                        />
                        <TextInput
                            style={Styles.otp}
                        // onChangeText={text => onChangeText(text)}
                        // value={null}
                        // placeholder={"Mobile Number"}
                        />

                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: 80 }}>
                    <Text style={{color: "#B9B9B9", fontSize: 12}}>
                    If you didn't receive a code !
                    </Text>
                    <Text style={{color: "#FF0000", fontSize: 12}}>
                    RESEND   
                    </Text>
                    </View>
                    

                    <Button
                        rounded
                        style={{
                            width: width - 80,
                            // marginTop: height - 430,
                            height: 50,
                            alignItems: "center",
                            alignSelf: "center",
                            justifyContent: "center",
                            backgroundColor: "#0D83EE"
                        }}
                        onPress={() => {
                            // navigation.navigate("SetNewPassword");
                            Verified();
                        }}
                    >
                        <Text style={{ color: "#fff" }}>
                            Verify
                        </Text>
                    </Button>

                </View>
            </View>

        </View>
    )
}





export default Signup;

