import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import NextIcon from '@assets/Icons/NextIcon'
import { typography } from '@styles/typography'
import { SCREENS } from '@routes/navigations.types'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

type IProps = {
  text: string
  key: any
}
export default function RulesBtn({ text, key }: IProps) {
  const navigation = useNavigation<StackNavigationProp<any, any>>()

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
