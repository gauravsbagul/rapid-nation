import React, { Fragment, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Image, StatusBar, Dimensions, TextInput } from 'react-native'
import Header from '../components/Header'
import { colors } from '../Asset/colors/colors'
import { AppStyles } from '../AppStyles/Styles'
import { images } from '../Asset/images/images'
import Button from '../components/Button'

const AllHomeServices = ({ navigation }) => {

    const services = [
        { name: 'Massages', image: images.message_02 },
        { name: 'Cutting', image: images.face_cutting },
        { name: 'Shaving', image: images.shaving },
        { name: 'Face Wash', image: images.face_wash },
        { name: 'Hair Oil', image: images.hair_oil },
        { name: 'Iron', image: images.iron },
        { name: 'Account Work', image: images.account_work },
        { name: 'Bank', image: images.bank_01 },
        { name: 'Shaving & Cutting', image: images.razor },
    ]
    const [gender, setGender] = useState('male');
    return (
        <Fragment>
            <StatusBar barStyle="light-content" backgroundColor={colors.header_linear_1} />
            <ScrollView
                style={{ flex: 1, backgroundColor: colors.lightWhite }}>
                <Header
                    onMicPress={() => { }}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                    <TouchableOpacity
                        style={gender == 'male' ? styles.activeBox : { marginHorizontal: 20 }}
                        onPress={() => setGender('male')}
                    >
                        <Image
                            source={images.boy}
                            style={{
                                width: 40,
                                height: 40,
                                alignSelf: 'center'
                            }}
                        />
                        <Text style={gender == 'male' ? { ...AppStyles.regularText, textAlign: 'center' } : { ...AppStyles.medium, textAlign: 'center', color: 'black' }}>Men</Text>
                    </TouchableOpacity>
                    <View style={{ width: .5, height: '80%', backgroundColor: colors.grey }} />
                    <TouchableOpacity
                        style={gender == 'female' ? styles.activeBox : { marginHorizontal: 20 }}
                        onPress={() => setGender('female')}
                    >
                        <Image
                            style={{
                                width: 40,
                                height: 40,
                                alignSelf: 'center'
                            }}
                            source={images.girl}
                        />
                        <Text style={gender == 'female' ? { ...AppStyles.regularText, textAlign: 'center' } : { ...AppStyles.medium, textAlign: 'center', color: 'black' }}>Women</Text>
                    </TouchableOpacity>
                </View>
                {/* All Services */}
                <View style={{ paddingHorizontal: 4, marginVertical: 20 }}>
                    <FlatList
                        data={services}
                        keyExtractor={(_, key) => key}
                        numColumns={3}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.servicesContainer}>
                                <Image source={item.image}
                                    style={{ height: 30, marginBottom: 5 }}
                                    resizeMode='contain' />
                                <Text style={{ ...AppStyles.smallText, textAlign: 'center', color: 'black' }}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <Text style={{ ...AppStyles.mediumBold, textAlign: 'center', paddingHorizontal: 15, color: '#000', fontSize: 16 }}>
                    About Maintenance and Work
                </Text>
                <Text style={{ ...AppStyles.smallText, paddingHorizontal: 20, marginVertical: 3 }}>
                    When most people tell you they have a couple of cats at home,
                    these probably aren't the type of cat you’d expect, but for one
                    family in Gaza, these lion cubs are their household pets.
                    Lioness Mona and Alex, who’s a male, were born in the battle-torn
                    Gaza Strip to parents that were smuggled through a ...When most
                    people tell you they have a couple of cats at home these probably
                    aren't the type of cat you’d expect, but for one family in Gaza,
                    these lion cubs are their household pets. Lioness Mona and Alex,
                    who’s a male, were born in the battle-torn Gaza Strip to parents
                    that were smuggled through a ...
                </Text>
                <View style={{ marginVertical: 15 }}>
                    <Button
                        title="Next"
                        onPress={() => navigation.navigate('MessagesAndCheckup')}
                    />
                </View>

            </ScrollView>
        </Fragment>
    )
}

export default AllHomeServices

const styles = StyleSheet.create({
    servicesContainer: { width: '33%', height: 90, paddingHorizontal: 4, alignItems: 'center', justifyContent: 'center', borderColor: colors.lightWhite, borderWidth: .8, backgroundColor: colors.white },
    activeBox: {
        marginHorizontal: 20,
        borderBottomWidth: 3,
        borderBottomColor: colors.darkBrown,
        paddingHorizontal: 5
    }
})
