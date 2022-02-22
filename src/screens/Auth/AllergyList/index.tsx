import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderName from '@components/Login/HeaderName'
import { PhoneComponentProps } from '../LoginScreen'
import AlergicText from '@assets/Icons/AlergicText'
import { styles } from './styles'
import SelectAllergicList from '@components/Login/SelectAllergicList'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { SCREENS } from '@routes/navigations.types'
import Done from '@assets/Icons/Done'
import ContinueBtn from '@ui/Buttons/ContinueBtn'
export default function AllergyList({}: PhoneComponentProps) {
  const navigation = useNavigation<StackNavigationProp<any, any>>()
  const [selected, setSelected] = useState('')
  const ToUserScreen = () => {
    navigation.navigate(SCREENS.USER_INFO)
  }
  return (
    <View style={styles.container}>
      <HeaderName color={false} />
      <View style={styles.intro}>
        <Text style={styles.introText}>Немного о себе </Text>
      </View>
      <Text style={styles.introSelectText}>Выберете продукты на которые у Вас есть аллергия </Text>
      <View>
        <SelectAllergicList selected={selected} setSelected={setSelected} />
        <ContinueBtn ready={true} userInput={''} onPress={ToUserScreen} />
      </View>
    </View>
  )
}
