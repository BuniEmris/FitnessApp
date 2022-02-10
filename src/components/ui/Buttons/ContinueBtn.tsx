import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { PhoneComponentProps } from '@screens/Auth/LoginScreen'
import { RH, RW } from '@helpers/Responsive'
import { NavigationContainer } from '@react-navigation/native'

export default function ContinueBtn({ navigation, address, userName }: any) {
  return (
    <TouchableOpacity
      onPress={address}
      disabled={userName ? false : true}
      style={userName ? styles.nextActive : styles.nextInActive}>
      <Text style={styles.nextText}>Продолжить</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  nextActive: {
    width: RW(325),
    height: RH(60),
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FA5C01',
    marginTop: RH(152),
  },
  nextInActive: {
    width: RW(325),
    height: RH(60),
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FA5C01',
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
