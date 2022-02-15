import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { RH, RW } from '@helpers/Responsive'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '@routes/navigations.types'
import { StackNavigationProp } from '@react-navigation/stack'
import LinearGradient from 'react-native-linear-gradient'

type ContinueBtnProps = {
  onPress?: () => void
}

export default function ContinueBtn({ onPress }: ContinueBtnProps) {
  const navigation = useNavigation<StackNavigationProp<any, any>>()

  const onNavigateUserInfo = () => {
    onPress ? onPress() : navigation.navigate(SCREENS.USER_INFO)
  }
  return (
    <LinearGradient
      style={styles.nextActive}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      colors={['#F2521F', '#FF8D4E']}>
      <TouchableOpacity onPress={onNavigateUserInfo}>
        <Text style={styles.nextText}>Продолжить</Text>
      </TouchableOpacity>
    </LinearGradient>
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
