import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import GoBackBtn from '@ui/Buttons/GoBackBtn'
import Skip from '@assets/Icons/Skip'
import { SCREENS } from '@routes/navigations.types'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

type IOwnProps = {
  color: boolean
}
export default function HeaderName({ color }: IOwnProps) {
  const navigation = useNavigation<StackNavigationProp<any, any>>()

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      }}>
      <GoBackBtn infoColor={color} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(SCREENS.USER_CALORIES)
        }}>
        <Skip />
      </TouchableOpacity>
    </View>
  )
}
