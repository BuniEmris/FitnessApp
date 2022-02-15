import { TouchableOpacity } from 'react-native'
import React from 'react'
import BackBtn from '@assets/Icons/BackIcon'
import BackBlue from '@assets/Icons/BackBlueIcon'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

type IgoBackBtnProps = {
  infoColor: boolean
}
export default function GoBackBtn({ infoColor }: IgoBackBtnProps) {
  const navigation = useNavigation<StackNavigationProp<any, any>>()

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack()
      }}>
      {infoColor ? <BackBlue /> : <BackBtn />}
    </TouchableOpacity>
  )
}
