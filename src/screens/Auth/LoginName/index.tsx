import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { RH, RW } from '@helpers/Responsive'
import Introduction from '@assets/Icons/Introduction'
import HeaderName from '@components/Login/HeaderName'
import MySwitchSelector from '@components/Login/MySwitchSelector'
import NameInput from '@components/Login/NameInput'
import ContinueBtn from '@ui/Buttons/ContinueBtn'
import { SCREENS } from '@routes/navigations.types'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigatorProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { styles } from './styles'
export default function LoginName({}) {
  const navigation = useNavigation<NativeStackNavigatorProps>()

  const [userName, setUserName] = useState('')
  const [activeBtn, setActiveBtn] = useState(false) // TODO
  const activeStatus = () => {
    console.log(userName, 'name of USer')

    if (userName) {
      return setActiveBtn(true)
    } else {
      return setActiveBtn(false)
    }
  }

  const ToUserScreen = () => {
    navigation.navigate(SCREENS.USER_INFO)
  }
  return (
    <View style={styles.container}>
      <HeaderName color={false} />
      <View style={styles.intro}>
        <Introduction />
      </View>
      <MySwitchSelector calory={false} />
      <NameInput
        mailInput={false}
        setActiveBtn={setActiveBtn}
        userName={userName}
        setUserName={setUserName}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS.ALLERGIC_PRODUCTS)}
        style={styles.products}>
        <Text style={styles.productsText}>Выбрать продукты, на которые у меня аллергия</Text>
      </TouchableOpacity>
      <ContinueBtn userInput={userName} onPress={ToUserScreen} ready={false} />
      {/*    TODO userName для чего ?  dlya disable enable btn */}
    </View>
  )
}
