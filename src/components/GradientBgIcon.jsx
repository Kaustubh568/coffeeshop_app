import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomIcon from './CustomIcon'
import LinearGradient from 'react-native-linear-gradient'
import { Color, Spacing } from '../theme/theme'

const GradientBgIcon = ({ name, size, color }) => {
    return (
        <View style={styles.Container}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[Color.primaryGreyHex, Color.primaryBlackHex]}
                style={styles.LinearGradientBG}
            >
                <CustomIcon name={name} size={size} color={color} />
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    Container : {
        borderWidth : 2,
        borderColor : Color.secondaryDarkGreyHex,
        borderRadius : Spacing.space_12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.secondaryDarkGreyHex,
        overflow : 'hidden',
    },
    LinearGradientBG : {
        height: Spacing.space_36,
        width: Spacing.space_36,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default GradientBgIcon
