import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Color } from '../theme/theme';
import { BlurView } from '@react-native-community/blur';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import CartScreen from '../screens/CartScreen';
import CustomIcon from '../components/CustomIcon';



const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    // const [showTabBar, setShowTabBar] = useState(true);

    return (
        <Tab.Navigator
            screenOptions={{                
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarBackground: () => {
                    <BlurView overlayColor='' blurAmount={15} style={styles.blurViewStyles} />
                },
            }}>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomIcon name='home' size={25}
                            color={focused ? Color.primaryOrangeHex : Color.primaryLightGreyHex} />
                    )
                }}></Tab.Screen>
            <Tab.Screen name="Cart" component={CartScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomIcon name='cart' size={25}
                            color={focused ? Color.primaryOrangeHex : Color.primaryLightGreyHex} />
                    )
                }}></Tab.Screen>
            <Tab.Screen name="Favorite" component={FavoritesScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomIcon name='like' size={25}
                            color={focused ? Color.primaryOrangeHex : Color.primaryLightGreyHex} />
                    )
                }}></Tab.Screen>
            <Tab.Screen name="History" component={OrderHistoryScreen}
                options={{
                    // tabBarStyle:{display:"none"},
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomIcon name='bell' size={25}
                            color={focused ? Color.primaryOrangeHex : Color.primaryLightGreyHex} />
                    )
                }}></Tab.Screen>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        backgroundColor: Color.primaryBlackRGBA,
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent',
    },
    blurViewStyles: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
})

export default TabNavigator
