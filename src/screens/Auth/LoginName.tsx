import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RH, RW } from '../../helpers/Responsive'
import SwitchSelector from 'react-native-switch-selector'
import Introduction from '@helpers/Icons/Introduction'
import Products from '@helpers/Icons/Products'
import Continue from '@helpers/Icons/Continue'
import { PhoneComponentProps } from './LoginScreen'
import HeaderName from '../../components/Login/HeaderName'
import MySwitchSelector from '../../components/Login/MySwitchSelector'
import NameInput from '../../components/Login/NameInput'
import ContinueBtn from '@ui/Buttons/ContinueBtn'
import { SCREENS } from '@routes/navigations.types'
export default function LoginName({ navigation }: PhoneComponentProps) {
  const [userName, setUserName] = useState('')
  const [activeBtn, setActiveBtn] = useState(false)
  const activeStatus = () => {
    console.log(userName, 'name of USer')

    if (userName) {
      return setActiveBtn(true)
    } else {
      return setActiveBtn(false)
    }
  }

  const ToUserScreen = SCREENS.USER_INFO
  return (
    <View style={styles.container}>
      <HeaderName navigation={navigation} color={false} />
      <View style={styles.intro}>
        <Introduction />
      </View>
      <MySwitchSelector />
      <NameInput
        mailInput={false}
        setActiveBtn={setActiveBtn}
        userName={userName}
        setUserName={setUserName}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS.ALLERGIC_PRODUCTS)}
        style={styles.products}>
        <Products />
      </TouchableOpacity>
      <ContinueBtn userName={userName} navigation={navigation} address={ToUserScreen} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: RW(17),
    paddingTop: RH(17),
  },
  intro: {
    marginTop: RH(25),
    marginBottom: RH(30),
  },

  products: {
    marginTop: RH(160),
    justifyContent: 'center',
    alignItems: 'center',
  },
})
