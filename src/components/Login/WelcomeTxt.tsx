import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './textstyles'

export default function WelcomeTxt({ LoginviaEmail }: any) {
  return (
    <View>
      <Text style={styles.welcomeTxt}>
        {!LoginviaEmail ? 'Добро пожаловать' : 'Немного о себе '}
      </Text>
      <Text style={styles.enterPhoneTxt}>
        {!LoginviaEmail ? 'Введите Ваш номер телефона' : 'Введите адрес электронной почты'}
      </Text>
    </View>
  )
}
