import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { RH, RW } from '@helpers/Responsive'

export default function ValidationText() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Не верный код подтверждения, попробуйте еще раз</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: RW(311),
    height: RH(33),
    marginLeft: RW(35),
    marginTop: RH(44),
  },
  text: {
    fontSize: 14,
    color: '#EB5757',
    textAlign: 'center',
    lineHeight: RH(16),
  },
})
