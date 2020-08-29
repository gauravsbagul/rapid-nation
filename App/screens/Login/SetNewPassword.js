import React from 'react';
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


const { width, height } = Dimensions.get('window');


const SetNewPassword = ({ navigation }) => {
    return (
        <View style={
            {
                alignItems: "center",
                paddingHorizontal: 20,
                paddingVertical: 60,
                flex: 1,
                backgroundColor: "#F9F9F9",
            }
        }>
            <Text style={Styles.welcome_back}>
                Set new password
           </Text>
            <Text style={[Styles.login_to_continue, { paddingHorizontal: 30 }]}>

            </Text>


            <View style={{ paddingHorizontal: 20, marginVertical: 60 }}>

                <View style={{ paddingVertical: 10 }}>
                    <View style={Styles.input}>
                        <Icon name="lock" type="Entypo" style={{ color: "#8B8B8B", fontSize: 18, marginLeft: -10 }} />
                        <TextInput
                            style={{ marginLeft: 10, width: "90%" }}
                            // onChangeText={text => onChangeText(text)}
                            // value={null}
                            placeholder={"Enter New Password"}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View style={{ paddingVertical: 10 }}>
                    <View style={Styles.input}>
                        <Icon name="lock" type="Entypo" style={{ color: "#8B8B8B", fontSize: 18, marginLeft: -10 }} />
                        <TextInput
                            style={{ marginLeft: 10, width: "90%" }}
                            // onChangeText={text => onChangeText(text)}
                            // value={null}
                            placeholder={"Repeat New Password"}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
            </View>


            <View>
                <Button rounded style={{ width: width - 80, marginTop: height - 490, height: 50, alignItems: "center", justifyContent: "center", backgroundColor: "#0D83EE" }}
                    onPress={() => {
                        navigation.navigate("Login");
                    }}
                >
                    <Text style={{ color: "#fff" }}>Next</Text>
                </Button>
            </View>
        </View>

    );
};




export default SetNewPassword;

