/*
 * @author GennadySX
 * @created at 2022
 **/
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import React from 'react'
import { style } from '@screens/Main/styles'
import { DateCarousel } from '@screens/Main/components/DateCarousel'
import { SberCard } from '@screens/Main/components/SberCard'
import { Colors, Spacing } from "@styles/index";
import { ProductList } from '@screens/Main/components/ProductList'
import { AccountHeader } from '@screens/Main/components/Header'

export const MainScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE} animated />
      <ScrollView style={style.block}>
        <AccountHeader />
        <DateCarousel />
        <View
          style={{
            paddingHorizontal: Spacing.MEDIUM,
            marginBottom: Spacing.MEDIUM_PLUS,
            marginTop: Spacing.SMALL,
          }}>
          <SberCard />
        </View>
        <ProductList />
        <View />
      </ScrollView>
    </SafeAreaView>
  )
}
