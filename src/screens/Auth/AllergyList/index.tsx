import { View } from 'react-native'
import React from 'react'
import HeaderName from '@components/Login/HeaderName'
import { PhoneComponentProps } from '../LoginScreen'
import AlergicText from '@assets/Icons/AlergicText'
import { styles } from './styles'
import SelectAllergicList from '@components/Login/SelectAllergicList'

export default function AllergyList({}: PhoneComponentProps) {
  return (
    <View style={styles.container}>
      <HeaderName color={false} />
      <View style={styles.intro}>
        <AlergicText />
      </View>
      <View>
        <SelectAllergicList />
      </View>
    </View>
  )
}
