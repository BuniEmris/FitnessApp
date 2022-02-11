import React from 'react'
import { View, ImageBackground, StyleSheet } from 'react-native'
import { RW } from '@helpers/Responsive'
import MainText from '@assets/Icons/MainText'
import LoginButtons from '@components/Login/LoginButtons'
import { Assets } from '@constants/Icons/Assets'

export type PhoneComponentProps = {}

export default function LoginScreen({}: PhoneComponentProps) {
  return (
    <ImageBackground source={Assets.bg} resizeMode="cover" style={styles.imageBg}>
      <View style={styles.container}>
        <View style={styles.mainText}>
          <MainText />
        </View>
        <LoginButtons offer={false} />
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  // TODO стили нельзя так оставить!!
  container: {
    flex: 1,
    backgroundColor: '#000000c0',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // opacity: 0.6,
  },
  imageBg: {
    flex: 1,
  },
  mainText: {
    fontWeight: '600',
    marginRight: RW(60),
  },
})
