import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderName from '@components/Login/HeaderName'
import { PhoneComponentProps } from '../LoginScreen'
import AlergicText from '@helpers/Icons/AlergicText'
import { styles } from './styles'
import Done from '@helpers/Icons/Done'
import SelectAllergicList from '@components/Login/SelectAllergicList'

export default function AllergyList({ navigation }: PhoneComponentProps) {
  return (
    <View style={styles.container}>
      <HeaderName navigation={navigation} color={false} />
      <View style={styles.intro}>
        <AlergicText />
      </View>
      <View>
        <SelectAllergicList navigation={navigation} />
      </View>
    </View>
  )
}
