import { ScrollView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderName from '@components/Login/HeaderName'
import { PhoneComponentProps } from '../LoginScreen'
import AlergicText from '@assets/Icons/AlergicText'
import { styles } from './styles'
import SelectAllergicList from '@components/Login/SelectAllergicList'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { SCREENS } from '@routes/navigations.types'
import Done from '@assets/Icons/Done'
export default function AllergyList({}: PhoneComponentProps) {
  const navigation = useNavigation<StackNavigationProp<any, any>>()

  return (
    <View style={styles.container}>
      <HeaderName color={false} />
      <View style={styles.intro}>
        <AlergicText />
      </View>
      <View>
        <SelectAllergicList />
        <TouchableOpacity onPress={() => navigation.navigate(SCREENS.USER_INFO)} style={styles.btn}>
          <Done />
        </TouchableOpacity>
      </View>
    </View>
  )
}
