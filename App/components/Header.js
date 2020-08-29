import React, { Fragment } from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native'
import { images } from '../Asset/images/images'
import { colors } from '../Asset/colors/colors'
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'native-base';
import { AppStyles } from '../AppStyles/Styles';


const { height, width } = Dimensions.get('screen')
const Header = ({ mic, text, onMicPress, title, noMic }) => {
    return (

        <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
            colors={[colors.header_linear_1, colors.header_linear_2,]}
            style={styles.container}>
            <View style={styles.circle1} />
            <View style={styles.circle2} />
            <View style={{ marginTop: 'auto', width: '100%', alignItems: 'center' }}>
                {text && <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                    <Icon
                        onPress={() => onMicPress()}
                        name="location-pin" type="Entypo" style={{ fontSize: 18, color: colors.white, marginHorizontal: 10 }} />
                    <Text style={{ ...AppStyles.regularText, color: colors.white }}>Marathallani Village</Text>
                </View>}
                {!noMic && <View style={{ flexDirection: 'row', paddingHorizontal: 13, alignItems: 'center' }}>
                    <View style={styles.inputContainer}>

                        <Icon
                            name="search" type="FontAwesome" style={{ fontSize: 20, color: colors.grey, marginHorizontal: 5 }} />

                        <TextInput
                            placeholder="search"
                            style={{ flexGrow: 1 }}
                        />

                    </View>

                    {mic &&
                        <View style={{ width: 35, height: 35, backgroundColor: colors.white, marginLeft: 8, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon
                                onPress={() => console.log('mic')}
                                name="microphone" type="FontAwesome" style={{ color: colors.grey, fontSize: 20 }} />
                        </View>}

                </View>}


            </View>
            {title && <Text style={[AppStyles.semiBold, { marginTop: 'auto', textAlign: 'center', marginBottom: 5, color: 'white' }]}>
                {title}
            </Text>}

        </LinearGradient>


    )
}

export default Header

const styles = StyleSheet.create({
    circle2: {
        position: 'absolute',
        top: -183,
        right: -33,
        width: 278,
        height: 278,
        borderRadius: 300,
        borderWidth: 7,
        borderColor: 'rgba(255,255,255,.1)'
    },
    circle1: {
        position: 'absolute',
        top: -173,
        right: -23,
        width: 250,
        height: 250,
        borderRadius: 300,
        borderWidth: 7,
        borderColor: 'rgba(255,255,255,.1)'
    },
    container: {
        width,
        height: 100,
        position: 'relative',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        padding: 10,
        paddingHorizontal: 14,
        alignItems: 'center',

    },
    inputContainer: {
        backgroundColor: 'rgba(255,255,255,1)',
        flexGrow: 1,
        height: 37,
        borderRadius: 30,
        paddingLeft: 5,
        flexDirection: 'row',
        alignItems: 'center'
    }
})
