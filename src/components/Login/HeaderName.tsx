import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import GoBackBtn from '@ui/Buttons/GoBackBtn'
import { PhoneComponentProps } from '../../screens/Auth/LoginScreen'
import Skip from '@helpers/Icons/Skip'
import { SCREENS } from '@routes/navigations.types'

type IOwnProps = {
  navigation: any
  color: boolean
}
export default function HeaderName({ navigation, color }: IOwnProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      }}>
      <GoBackBtn navigation={navigation} infoColor={color} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(SCREENS.USER_CALORIES)
        }}>
        <Skip />
      </TouchableOpacity>
    </View>
  )
}
