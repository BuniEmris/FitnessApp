import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import CaloryHeader from '@assets/Icons/CaloryHeader'
import CaloryMain from '@assets/Icons/CaloryMainText'
import BottomText from '@assets/Icons/CaloryBtm'
import NextBtn from '@assets/Icons/CaloryBtn'
import { styles } from './styles'
import MySwitchSelector from '@components/Login/MySwitchSelector'
import ActivityLevel from '@components/Login/UserInfo/ActivityLevel'
import { PhoneComponentProps } from '../LoginScreen'
import { SCREENS } from '@routes/navigations.types'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export default function Calories({}: PhoneComponentProps) {
  const navigation = useNavigation<StackNavigationProp<any, any>>()

  return (
    <View style={styles.container}>
      <CaloryHeader />
      <View style={styles.intro}>
        <CaloryMain />
      </View>
      <MySwitchSelector calory={true} />
      <View>
        <ActivityLevel calory={true} />
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
