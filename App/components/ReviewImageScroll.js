import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Icon } from 'native-base'
import { colors } from '../Asset/colors/colors'
import { AppStyles } from '../AppStyles/Styles'
import { images } from '../Asset/images/images'

const ReviewImageScroll = () => {
    const imageArr = [
        images.dummy_1,
        images.dummy_2,
        images.profile_02,
        images.dummy_3,
        images.dummy_4
    ]
    return (
        <View style={{ marginVertical: 10 }}>
            <Icon
                name="quote-left"
                type="FontAwesome5"
                style={{
                    color: colors.primaryBlue,
                    alignSelf: "center",
                    fontSize: 35
                }}
            />
            <Text style={{ ...AppStyles.medium, textAlign: 'center', paddingHorizontal: 20, marginVertical: 18 }}>
                Hard work is the most important key to success.
                Without being willing to work hard and put
                everything into a venture, business success is
                nearly impossible.
            </Text>
            <View style={styles.images}>
                {imageArr.map((img, index) => (
                    <Image
                        source={img}
                        key={index}
                        style={index == 2 ? { width: 100, height: 100, marginHorizontal: 7 } : { width: 60, height: 60, marginHorizontal: 7 }}
                        resizeMode="cover"
                    />
                ))}
            </View>
            <Text style={{ ...AppStyles.regularText, color: 'black', textAlign: 'center' }}>
                Garima
            </Text>
            <Text style={{ ...AppStyles.smallText, color: colors.primaryBlue, textAlign: 'center', }}>
                manager
            </Text>
        </View>
    )
}

export default ReviewImageScroll

const styles = StyleSheet.create({
    images: {
        flexDirection: 'row', marginVertical: 10, width: '100%', alignItems: 'center',
        transform: [
            { translateX: -35 }
        ]
    }
})
