/*
 * @author GennadySX
 * @created at 2022
 **/
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { WIDTH } from '@utils/normalizer'
import { style } from '@screens/Main/styles'
import { mainScreenMock } from '@mocks/mainScreen.mock'
import { DateCarousel } from '@screens/Main/components/DateCarousel'
import { SberCard } from '@screens/Main/components/SberCard'
import { Spacing } from '@styles/index'
import { ProductList } from '@screens/Main/components/ProductList'

export const MainScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={style.block}>
        <View style={style.container}>
          <View style={{ width: WIDTH - 80 }}>
            <Text style={style.name}>Привет {mainScreenMock.userName} ✋🏻</Text>
          </View>
          <Image
            source={{
              uri: mainScreenMock.userAvatar,
            }}
            style={style.avatar}
          />
        </View>
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
