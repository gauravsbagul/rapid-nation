import React, { Fragment } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { colors } from '../Asset/colors/colors'
import { AppStyles } from '../AppStyles/Styles'
import { images } from '../Asset/images/images'
import { Icon } from 'native-base'
const MessagesCard = ({ item, isPackage, onPress }) => {
    return (
        <View style={styles.container}>
            {/* Header */}

            <Image
                source={item.image}
                style={{ width: '100%', height: 150 }}
            />
            <ImageBackground
                style={{ position: 'absolute', top: 2, right: 2, height: 10 }}
                resizeMode="contain"
                source={images.offer_shape}
            ></ImageBackground>
            {/* Body */}
            <View style={styles.textContainer}>
                <View style={{ position: 'absolute', top: 0, right: 2, alignItems: 'center' }}>
                    <Image source={images.clock_blue}
                        style={{ width: 15, height: 15 }} />
                    <Text style={{ ...AppStyles.smallText, color: colors.primaryBlue }}>40 Mins</Text>
                </View>
                <Text
                    style={{ ...AppStyles.regularText, marginBottom: 5 }}
                >Head + Shoulder + Foot Massage</Text>
                <View style={styles.dotContainer}>
                    <View style={styles.dot} />
                    <Text style={{ ...AppStyles.medium }}>
                        Head Shoulder And Foot Massage
                    </Text>
                </View>
                <View style={styles.dotContainer}>
                    <View style={styles.dot} />
                    <Text style={{ ...AppStyles.medium }}>
                        When Tired Workout Tense
                    </Text>
                </View>
                <View style={styles.dotContainer}>
                    <View style={styles.dot} />
                    <Text style={{ ...AppStyles.medium }}>
                        With Curated Essential Oil
                    </Text>
                </View>
            </View>

            {/* Footer */}
            {isPackage &&
                <>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2, paddingHorizontal: 13 }}>
                        <Icon name="rupee-sign" style={{ fontSize: 12, color: 'grey' }}
                            type="FontAwesome5" />
                        <Text style={{
                            ...AppStyles.medium, marginHorizontal: 4, color: 'grey',
                            textDecorationLine: 'line-through', textDecorationStyle: 'solid'
                        }}>2000</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, paddingHorizontal: 13 }}>
                        <Icon name="rupee-sign" style={{ fontSize: 15 }}
                            type="FontAwesome5" />
                        <Text style={{ ...AppStyles.regularText, marginHorizontal: 4 }}>1000</Text>
                    </View>
                </>
            }
            <View style={styles.footerContainer}>

                {isPackage ?
                    <Fragment>
                        <TouchableOpacity
                            onPress={() => onPress()}
                            style={styles.edit}>
                            <Text style={{ ...AppStyles.smallText, color: colors.primaryBlue }}>Edit This Package</Text>
                            <Icon name="caretright"
                                type="AntDesign"
                                style={{ fontSize: 16, marginLeft: 'auto', color: colors.primaryBlue }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.plusBtn}>
                            <Text style={{ ...AppStyles.regularText, color: colors.primaryBlue, marginVertical: 5, marginLeft: 9 }}>Add</Text>
                            <View style={styles.pulsContainer}>
                                <Text style={{ fontSize: 16, color: colors.primaryBlue }}>+</Text>
                            </View>
                        </TouchableOpacity>
                    </Fragment> :
                    <Fragment>
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
                                <Icon name="rupee-sign" style={{ fontSize: 12, color: 'grey' }}
                                    type="FontAwesome5" />
                                <Text style={{
                                    ...AppStyles.medium, marginHorizontal: 4, color: 'grey',
                                    textDecorationLine: 'line-through', textDecorationStyle: 'solid'
                                }}>2000</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="rupee-sign" style={{ fontSize: 15 }}
                                    type="FontAwesome5" />
                                <Text style={{ ...AppStyles.regularText, marginHorizontal: 4 }}>999</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.plusBtn}>
                            <Text style={{ ...AppStyles.regularText, color: colors.primaryBlue, marginVertical: 5, marginLeft: 9 }}>Add</Text>
                            <View style={styles.pulsContainer}>
                                <Text style={{ fontSize: 16, color: colors.primaryBlue }}>+</Text>
                            </View>
                        </TouchableOpacity>

                    </Fragment>
                }

            </View>

            {/* Icons */}
            <ImageBackground
                style={{ position: 'absolute', top: 2, right: -15, height: 40, width: 77 }}
                source={images.offer_shape}
            >
                <Text style={{ ...AppStyles.smallestText, color: colors.white, marginLeft: 12, marginTop: 11 }}>
                    20% off
                </Text>
            </ImageBackground>
            <Image
                style={{ position: 'absolute', top: 8, left: 8, width: 23, height: 23 }}
                source={images.i_round}
            />
        </View>
    )
}

export default MessagesCard

const styles = StyleSheet.create({
    edit: { flexDirection: 'row', alignItems: 'center', width: 180, borderColor: colors.primaryBlue, borderWidth: 1, borderRadius: 5, overflow: 'hidden', paddingHorizontal: 12, paddingVertical: 6, backgroundColor: 'rgba(13, 131, 238,.13)' },
    plusBtn: { flexDirection: 'row', alignItems: 'center', width: 80, borderColor: colors.primaryBlue, borderWidth: 1, borderRadius: 5, overflow: 'hidden' },
    pulsContainer: { marginLeft: 'auto', backgroundColor: '#cccddd', height: '100%', paddingVertical: 4.5, paddingHorizontal: 7 },
    footerContainer: { flexDirection: 'row', marginTop: 7, bottom: 10, alignItems: 'center', paddingHorizontal: 13, justifyContent: 'space-between' },
    container: {
        backgroundColor: colors.white, width: '100%', position: 'relative', borderRadius: 5, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    textContainer: { marginVertical: 10, position: 'relative', paddingHorizontal: 10 },
    dot: { width: 8, height: 8, borderRadius: 8, backgroundColor: colors.grey, marginRight: 7 },
    dotContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 3, marginLeft: 7 }
})
