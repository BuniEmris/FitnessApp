import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import BgImage from '@assets/image/bg.png'
import { styles } from './styles'
import MainText from '@helpers/Icons/OfferMainTxt'
import FreeWeek from '@helpers/Icons/OfferFreeTxt'
import { PhoneComponentProps } from '../LoginScreen'
import LoginButtons from '@components/Login/LoginButtons'
export default function Offer({ navigation }: PhoneComponentProps) {
  return (
    <ImageBackground source={BgImage} resizeMode="cover" style={styles.imageBg}>
      <View style={styles.container}>
        <View style={styles.mainText}>
          <MainText />
        </View>
        <View style={styles.mainText}>
          <FreeWeek />
        </View>
        <View style={styles.btn}>
          <LoginButtons offer={true} navigation={navigation} />
        </View>
      </View>
    </ImageBackground>
  )
}
