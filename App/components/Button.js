import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../Asset/colors/colors'
import { AppStyles } from '../AppStyles/Styles'

const Button = ({ onPress = () => { }, title = '', secondary, style }) => {
    let backgroundColor = secondary ? colors.white : colors.primaryBlue;
    let color = secondary ? colors.primaryBlue : colors.white
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            activeOpacity={0.7}
            style={[styles.btnStyles, { backgroundColor, ...style }]}
        >
            <Text style={{ ...AppStyles.regularText, color }} >{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btnStyles: {
        height: 40, justifyContent: 'center', alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1.5,
        marginVertical: 10
    }
})
