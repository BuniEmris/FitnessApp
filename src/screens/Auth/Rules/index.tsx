import { View, Text } from 'react-native'
import React from 'react'
import GoBackBtn from '@ui/Buttons/GoBackBtn'
import { PhoneComponentProps } from '../LoginScreen'
import { styles } from './styles'
import RulesText from '@helpers/Icons/Rules'

export default function Rules({ navigation }: PhoneComponentProps) {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <GoBackBtn navigation={navigation} infoColor={false} />
      </View>
      <View style={{ marginTop: 20 }}>
        <RulesText />
      </View>
    </View>
  )
}
