import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Color, Spacing } from '../theme/theme'

const ProfilePic = () => {
  return (
    <View style={styles.ImageContainer}>
      <Image
        source={require('../assets/app_images/avatar.png')}
        style={styles.Image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  ImageContainer: {
    borderWidth: 2,
    height: Spacing.space_36,
    width: Spacing.space_36,
    borderRadius: Spacing.space_12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.secondaryDarkGreyHex,
    overflow: 'hidden',
  },
  Image: {
    height: Spacing.space_36,
    width: Spacing.space_36,
  }
})

export default ProfilePic
