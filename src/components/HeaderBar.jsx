import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color, FontFamily, FontSize, Spacing } from '../theme/theme'
import GradientBgIcon from './GradientBgIcon'
import ProfilePic from './ProfilePic'

const HeaderBar = ({title}) => {
  return (
    <View style={styles.HeaderContainer}>
      <GradientBgIcon name='menu' color={Color.primaryLightGreyHex} size={FontSize.size_16} />
      <Text style={styles.HeaderText}>{title}</Text>
      <ProfilePic />
    </View>
  )
}

const styles = StyleSheet.create({
  HeaderContainer : {
    padding : Spacing.space_30,
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily : FontFamily.poppins_semibold,
    fontSize: FontSize.size_20,
    color : Color.primaryWhiteHex,
  },
})

export default HeaderBar
