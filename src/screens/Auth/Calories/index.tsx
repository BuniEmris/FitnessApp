import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CaloryHeader from '@helpers/Icons/CaloryHeader'
import CaloryMain from '@helpers/Icons/CaloryMainText'
import BottomText from '@helpers/Icons/CaloryBtm'
import NextBtn from '@helpers/Icons/CaloryBtn'
import { styles } from './styles'
import MySwitchSelector from '@components/Login/MySwitchSelector'
import ActivityLevel from '@components/Login/UserInfo/ActivityLevel'
import { PhoneComponentProps } from '../LoginScreen'
import { SCREENS } from '@routes/navigations.types'
export default function Calories({ navigation }: PhoneComponentProps) {
  return (
    <View style={styles.container}>
      <CaloryHeader />
      <View style={styles.intro}>
        <CaloryMain />
      </View>
      <MySwitchSelector calory={true} />
      <View style={{ marginVertical: 32 }}>
        <ActivityLevel />
      </View>
      <View style={styles.bottomTxt}>
        <BottomText />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(SCREENS.PROGRESS_USERDATA)
        }}>
        <NextBtn />
      </TouchableOpacity>
    </View>
  )
}
