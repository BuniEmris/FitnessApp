import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import BgImage from '@assets/image/bg.png'
import { styles } from './styles'
import MainText from '@helpers/Icons/OfferMainTxt'
import FreeWeek from '@helpers/Icons/OfferFreeTxt'
import { PhoneComponentProps } from '../LoginScreen'
import LoginButtons from '@components/Login/LoginButtons'
import Cancel from '@helpers/Icons/CancelOffer'
export default function Offer({ navigation }: PhoneComponentProps) {
  return (
    <ImageBackground source={BgImage} resizeMode="cover" style={styles.imageBg}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('main')
          }}
          style={styles.cancel}>
          <Cancel />
        </TouchableOpacity>
        <View style={styles.mainText}>
          <MainText />
        </View>
        <View style={styles.mainTextContainer}>
          <Text style={styles.freeText}>
            Оформи бесплатную подписку, похудей на{'  '}
            <View style={styles.weekTextContainer}>
              <Text style={styles.weekText}>1 кг за 7 дней</Text>
            </View>
          </Text>
        </View>
        <View style={styles.btn}>
          <LoginButtons offer={true} navigation={navigation} />
        </View>
      </View>
    </ImageBackground>
  )
}
