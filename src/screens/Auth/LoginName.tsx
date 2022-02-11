import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { RH, RW } from '@helpers/Responsive'
import Introduction from '@assets/Icons/Introduction'
import Products from '@assets/Icons/Products'
import { PhoneComponentProps } from './LoginScreen'
import HeaderName from '../../components/Login/HeaderName'
import MySwitchSelector from '../../components/Login/MySwitchSelector'
import NameInput from '../../components/Login/NameInput'
import ContinueBtn from '@ui/Buttons/ContinueBtn'
import { SCREENS } from '@routes/navigations.types'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigatorProps } from 'react-native-screens/lib/typescript/native-stack/types'
export default function LoginName({}: PhoneComponentProps) {
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
        <Products />
      </TouchableOpacity>
      <ContinueBtn userName={userName} address={ToUserScreen} />
      {/*    TODO userName для чего ?*/}
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
