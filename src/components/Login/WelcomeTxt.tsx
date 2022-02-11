import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { RH, RW } from '@helpers/Responsive'

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
const styles = StyleSheet.create({
  welcomeTxt: {
    marginTop: RH(25),
    color: '#828282',
    fontSize: RW(20),
    fontWeight: '400',
    lineHeight: RH(23),
    alignItems: 'center',
  },
  enterPhoneTxt: {
    marginTop: RH(10),
    width: RW(358),
    height: RH(72),
    fontSize: RW(30),
    fontWeight: 'bold',
    lineHeight: RH(35),
    color: '#333333',
  },
})
