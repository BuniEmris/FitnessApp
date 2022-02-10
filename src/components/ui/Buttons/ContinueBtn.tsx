import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { PhoneComponentProps } from '@screens/Auth/LoginScreen'
import { RH, RW } from '@helpers/Responsive'
import { NavigationContainer } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
export default function ContinueBtn({ navigation, address, userName }: any) {
  return (
    <LinearGradient
      style={userName ? styles.nextActive : styles.nextInActive}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      colors={['#F2521F', '#FF8D4E']}>
      <TouchableOpacity onPress={address} disabled={userName ? false : true}>
        <Text style={styles.nextText}>Продолжить</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  nextActive: {
    width: RW(325),
    height: RH(60),
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FA5C01',
    marginTop: RH(152),
  },
  nextInActive: {
    width: RW(325),
    height: RH(60),
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FA5C01',
    marginTop: RH(152),
    opacity: 0.2,
  },
  nextText: {
    fontSize: RH(18),
    color: 'white',
    fontWeight: 'bold',
    lineHeight: RH(22),
    alignSelf: 'center',
  },
})
