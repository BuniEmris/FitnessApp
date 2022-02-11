import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { PhoneComponentProps } from '@screens/Auth/LoginScreen'
import { RH, RW } from '@helpers/Responsive'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '@routes/navigations.types'
import { StackNavigationProp } from '@react-navigation/stack'

export default function ContinueBtn({}: PhoneComponentProps) {
  const navigation = useNavigation<StackNavigationProp<any, any>>()

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(SCREENS.USER_INFO)
      }}
      style={styles.next}>
      <Text style={styles.nextText}>Продолжить</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  next: {
    width: RW(325),
    height: RH(60),
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FA5C01',
    marginTop: RH(152),
  },
  nextText: {
    fontSize: RH(18),
    color: 'white',
    fontWeight: 'bold',
    lineHeight: RH(22),
    alignSelf: 'center',
  },
})
