import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import NextIcon from '@assets/Icons/NextIcon'
import { typography } from '@styles/typography'
import { SCREENS } from '@routes/navigations.types'
type IProps = {
  text: string
  navigation: any
  key: any
}
export default function RulesBtn({ text, navigation, key }: IProps) {
  return (
    <TouchableOpacity
      key={key}
      onPress={() => navigation.navigate(SCREENS.RULES_DETAILS)}
      style={styles.container}>
      <Text style={typography.regular}>{text}</Text>
      <View style={{ marginRight: 5 }}>
        <NextIcon />
      </View>
    </TouchableOpacity>
  )
}
