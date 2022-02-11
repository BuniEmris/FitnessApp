import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { PhoneComponentProps } from '@screens/Auth/LoginScreen'
import { RH, RW } from '@helpers/Responsive'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '@routes/navigations.types'
import { StackNavigationProp } from '@react-navigation/stack'

import { NavigationContainer } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

export default function ContinueBtn({userName, address}: any) {
  const navigation = useNavigation<StackNavigationProp<any, any>>()

  return (
    <LinearGradient
      style={userName ? styles.nextActive : styles.nextInActive}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      colors={['#F2521F', '#FF8D4E']}>
      <TouchableOpacity
          onPress={() => {
            navigation.navigate(SCREENS.USER_INFO)
          }}
          disabled={userName ? false : true}>
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
