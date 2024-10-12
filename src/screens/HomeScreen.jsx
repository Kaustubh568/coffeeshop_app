import React, { useState } from 'react'
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { useStore } from '../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { BorderRadius, Color, FontFamily, FontSize, Spacing } from '../theme/theme'
import HeaderBar from '../components/HeaderBar'
import CustomIcon from '../components/CustomIcon'
import ItemCard from '../components/ItemCard'

const getCategoriesFromData = (data) => {
  let temp = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
}

const getCoffeeList = (category, data) => {
  if (category == 'All') {
    return data;
  } else {
    return (data.filter((item) => item.name == category))
  }
}

const HomeScreen = () => {
  const CoffeeList = useStore((state) => state.CoffeeList);
  const BeanList = useStore((state) => state.BeanList);
  const [categories, setCategories] = useState(getCategoriesFromData(CoffeeList));
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList)
  );

  // console.log('CoffeeList', sortedCoffee.length);
  // console.log('Coffee', CoffeeList.length);
  // console.log('categoryIndex', categoryIndex.category);

  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Color.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <HeaderBar />
        <Text style={styles.ScreenTitle}>Find the best{'\n'}coffee for you</Text>



        {/* input container */}
        <View style={styles.InputContainerComponent}>
          <TouchableOpacity onPress={() => { }}>
            <CustomIcon
              style={styles.InputIcon}
              size={FontSize.size_18}
              name='search'
              color={
                searchText.length > 0 ? Color.primaryOrangeHexa : Color.primaryLightGreyHex
              }
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find Your Coffee..."
            placeholderTextColor={Color.primaryLightGreyHex}
            value={searchText}
            onChange={(text) => setSearchText(text)}
            style={styles.TextInputStyle}
          />
        </View>

        {/* Category Scroller */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}
        >
          {
            categories?.map((data, index) => {
              return (
                <View
                  key={index}
                  style={styles.CategoryScrollViewContainer}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setCategoryIndex({ index: index, category: categories[index] })
                      setSortedCoffee(getCoffeeList(categories[index], CoffeeList))
                    }}
                    style={styles.CategoryScrollViewItem}
                  >
                    <Text
                      style={[
                        styles.CategoryScrollViewText,
                        categoryIndex.index == index ? { color: Color.primaryOrangeHex, } : {}
                      ]}
                    >{data}</Text>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </ScrollView>


        {/* Coffee Flatlist */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          contentContainerStyle={styles.FLatListContainer}
          keyExtractor={item=> item.id}
          renderItem={
            ({item})=>{
              return (
                <TouchableOpacity>
                  <ItemCard item={item}/>
                </TouchableOpacity>
              )
            }
          }
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Color.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontSize: FontSize.size_28,
    fontFamily: FontFamily.poppins_semibold,
    color: Color.primaryWhiteHex,
    paddingLeft: Spacing.space_30,
  },
  InputContainerComponent: {
    flexDirection: 'row',
    margin: Spacing.space_30,
    borderRadius: BorderRadius.radius_20,
    backgroundColor: Color.primaryDarkGreyHex,
    alignItems: 'center',
  },
  InputIcon: {
    marginHorizontal: Spacing.space_20,
  },
  TextInputStyle: {
    flex: 1,
    height: Spacing.space_20 * 3,
    fontFamily: FontFamily.poppins_medium,
    fontSize: FontSize.size_14,
    color: Color.primaryWhiteHex,
  },
  CategoryScrollViewStyle: {
    paddingHorizontal: Spacing.space_20,
    marginBottom: Spacing.space_20,
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: Spacing.space_20,
  },
  CategoryScrollViewItem: {
    alignItems: "center",
  },
  CategoryScrollViewText: {
    fontFamily: FontFamily.poppins_semibold,
    fontSize: FontSize.size_16,
    color: Color.primaryLightGreyHex,
  },
  FLatListContainer:{
    // backgroundColor: Color.primaryOrangeHex,
    // paddingLeft
    // backgroundColor:"red",
    gap:Spacing.space_20,
    paddingVertical:Spacing.space_20,
    paddingHorizontal:Spacing.space_30,

  },
})
export default HomeScreen
