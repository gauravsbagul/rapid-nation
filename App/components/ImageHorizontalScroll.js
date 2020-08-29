import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import { images } from '../Asset/images/images';
import { colors } from '../Asset/colors/colors';
import { AppStyles } from '../AppStyles/Styles';

const { width, height } = Dimensions.get('screen');


const ImageHorizontalScroll = () => {
    let imagesArr = [
        { img: images.profile_1 }
    ];
    let dotArr = new Array(5).fill(0);
    return (
        <ImageBackground
            source={images.profile_1}
            style={{
                width, height: 226, marginTop: -28, zIndex: -1,
                alignItems: 'center'
            }}>
            <View style={{ backgroundColor: 'rgba(67,67,67,.7)', marginTop: 70, paddingHorizontal: 10, paddingVertical: 2 }}>
                <Text style={{ ...AppStyles.smallestText, color: colors.white }}>
                    Your Trusted New and Now Good Offers
                </Text>
            </View>
            <Text style={{ ...AppStyles.semiLight, marginVertical: 5, color: colors.white }}>
                Select Service
            </Text>
            <View style={{ marginTop: 'auto', flexDirection: 'row', alignItems: 'center' }}>
                {
                    dotArr.map((_, index) => (
                        <View
                            key={index}
                            style={{ ...styles.selectBtn, marginVertical: 5 }}>
                            <View style={[{ width: 7, height: 7, borderRadius: 10 }, { backgroundColor: index == 2 ? '#0D83EE' : '#fff' }]} />
                        </View>
                    ))
                }
            </View>
        </ImageBackground>
    )
}

export default ImageHorizontalScroll

const styles = StyleSheet.create({
    selectBtn: {
        width: 10, height: 10, borderWidth: 1, borderColor: 'rgba(13, 131, 238,.8)', marginLeft: 10, borderRadius: 20, marginTop: 2, alignItems: 'center', justifyContent: 'center',
    },
})
