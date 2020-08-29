import React, { Fragment } from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native'
import { images } from '../Asset/images/images'
import { colors } from '../Asset/colors/colors'
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'native-base';
import { AppStyles } from '../AppStyles/Styles';

const CartItem = ({ item }) => {
    return (
        <View style={styles.container}>

            <ImageBackground
                source={item.image}
                style={{ width: 88, height: 88 }} >
                <View style={{ width: '100%', backgroundColor: colors.lightBlue }}>
                    <Text style={[AppStyles.smallestText, { color: colors.white }]}>{`Service For ${item.type}`}</Text>
                </View>
            </ImageBackground>
            <View style={{ marginHorizontal: 10, flexGrow: 1 }}>
                <Text
                    style={[AppStyles.mediumBold, { marginRight: 125 }]}>
                    {item.title}
                </Text>
                <Text style={[AppStyles.smallText, { color: 'grey' }]}>
                    Service
                </Text>
                {/* Prices */}
                <View style={styles.row}>
                    <Icon name="rupee" type="FontAwesome" style={{ color: 'grey', fontSize: 15 }} />
                    <Text style={[AppStyles.regularText, { color: 'grey', textDecorationLine: 'line-through', textDecorationStyle: 'solid', marginRight: 4 }]}>
                        {` ${item.price}`}
                    </Text>
                    <Image style={{ height: 25, width: 50 }}
                        resizeMode="contain"
                        source={images.off_20} />
                </View>
                <View style={styles.row}>
                    <Icon name="rupee" type="FontAwesome" style={{ color: 'black', fontSize: 18 }} />
                    <Text style={[AppStyles.mediumBold, { color: 'black' }]}>
                        {` ${item.prevPrice}`}
                    </Text>
                </View>
            </View>
            <View style={{ position: 'absolute', top: 4, right: 4, alignItems: 'center' }}>
                <Image source={images.clock_blue}
                    style={{ width: 15, height: 15 }} />
                <Text style={{ ...AppStyles.smallestText, color: colors.primaryBlue }}>40 Mins</Text>
            </View>
            <TouchableOpacity style={{ position: 'absolute', bottom: 4, right: 4, alignItems: 'center', height: 25, flexDirection: 'row', justifyContent: 'space-evenly', borderRadius: 3, borderColor: '#ccc', borderWidth: 1.5 }}>
                <Text style={{ paddingHorizontal: 7, borderRightColor: '#ccc', borderRightWidth: 1.5 }}>-</Text>
                <Text style={{ paddingHorizontal: 7 }}>1</Text>
                <Text style={{ paddingHorizontal: 7, borderLeftColor: '#ccc', borderLeftWidth: 1.5 }}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        width: '98%', marginVertical: 10, padding: 7, backgroundColor: colors.white, borderRadius: 4, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        alignSelf: 'center',
        elevation: 2,
        flexDirection: 'row'
    },
    row: { flexDirection: 'row', marginBottom: 3, alignItems: 'center' }

})
