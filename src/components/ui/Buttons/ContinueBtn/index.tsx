import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '@routes/navigations.types'
import { StackNavigationProp } from '@react-navigation/stack'
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './styles'

type ContinueBtnProps = {
  onPress?: () => void
  userInput: any
}

export default function ContinueBtn({ onPress, userInput }: ContinueBtnProps) {
  const navigation = useNavigation<StackNavigationProp<any, any>>()

  // const onNavigateUserInfo = () => {
  //   onPress ? onPress() : navigation.navigate(SCREENS.USER_INFO)
  // }
  return (
    <LinearGradient
      style={userInput ? styles.nextActive : styles.nextInActive}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      colors={['#F2521F', '#FF8D4E']}>
      <TouchableOpacity disabled={userInput ? false : true} onPress={onPress}>
        <Text style={styles.nextText}>Продолжить</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}
