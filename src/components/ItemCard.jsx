import React from 'react'
import { Dimensions,ImageBackground, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Color, FontSize, Spacing } from '../theme/theme'
import CustomIcon from './CustomIcon'

const CARD_WIDTH = Dimensions.get('window').width*0.32;

const ItemCard = ({ item }) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[Color.primaryGreyHex, Color.primaryBlackHex]}
            style={styles.LinearGradientCard}
        >
            <ImageBackground
                source={item.imagelink_square}
                resizeMode="cover"
                style={styles.CardImageBG}
            >
                <View style={styles.CardRatingContainer}>
                    <CustomIcon name="star" size={FontSize.size_16} Color={Color.primaryOrangeHex} />
                    <Text style={styles.CardRatingText}>{item.average_rating}</Text>
                </View>
            </ImageBackground>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    LinearGradientCard:{
        
        // width: CARD_WIDTH*1.5,
    },
    CardImageBG:{
        height: CARD_WIDTH,
        width: CARD_WIDTH,
        // overflow:'hidden',
    },
    CardRatingText:{

    },
    // LinearGradientCard:{

    // },
})

export default ItemCard
