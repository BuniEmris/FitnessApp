import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import BgImage from '../../assets/image/bg.png'
import { RH, RW } from '../../helpers/Responsive'
import MainText from '@helpers/Icons/MainText'
import LoginButtons from '../../components/Login/LoginButtons'

export type PhoneComponentProps = {
  navigation: any
}

export default function LoginScreen({ navigation }: PhoneComponentProps) {
  return (
    <ImageBackground source={BgImage} resizeMode="cover" style={styles.imageBg}>
      <View style={styles.container}>
        <View style={styles.mainText}>
          <MainText />
        </View>
        <LoginButtons navigation={navigation} />
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
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
