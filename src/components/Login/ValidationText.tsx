import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './textstyles'
export default function ValidationText() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Не верный код подтверждения, попробуйте еще раз</Text>
    </View>
  )
}
