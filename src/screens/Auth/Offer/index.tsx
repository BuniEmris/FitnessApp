import { View, Text, ImageBackground, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'

import { styles } from './styles'
import MainText from '@assets/Icons/OfferMainTxt'
import { PhoneComponentProps } from '../LoginScreen'
import LoginButtons from '@components/Login/LoginButtons'
import Cancel from '@assets/Icons/CancelOffer'
import { Assets } from '@constants/Icons/Assets'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { SCREENS } from '@routes/navigations.types'
import LinearGradient from 'react-native-linear-gradient'
export default function Offer({}: PhoneComponentProps) {
  const navigation = useNavigation<StackNavigationProp<any, any>>()

  return (
    <ImageBackground source={Assets.bg} resizeMode="cover" style={styles.imageBg}>
      <StatusBar animated={true} barStyle={'light-content'} />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(SCREENS.HOME_TABS)
          }}
          style={styles.cancel}>
          <Cancel />
        </TouchableOpacity>
        <View style={styles.mainText}>
          <MainText />
        </View>
        <View style={styles.mainTextContainer}>
          <Text style={styles.freeText}>Оформи бесплатную подписку, похудей на{'  '}</Text>
          <LinearGradient
            style={styles.weekTextContainer}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            colors={['#F2521F', '#FF8D4E']}>
            <View>
              <Text style={styles.weekText}>1 кг за 7 дней</Text>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.btn}>
          <LoginButtons offer={true} />
        </View>
      </View>
    </ImageBackground>
  )
}
