import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import GoBackBtn from '@ui/Buttons/GoBackBtn'
import { RH, RW } from '../../helpers/Responsive'
import Docs from '@helpers/Icons/TextTemporary'
import PhoneInput from '../../components/Login/PhoneInput'
import WelcomeTxt from '../../components/Login/WelcomeTxt'
import NameInput from '@components/Login/NameInput'
import ContinueBtn from '@ui/Buttons/ContinueBtn'
import { SCREENS } from '@routes/navigations.types'

export default function LoginPhone({ route, navigation }: any) {
  const [userMail, setUserMail] = useState('')
  const [activeBtn, setActiveBtn] = useState(false)
  const ToUserScreen = () => {
    navigation.navigate('auth-pincode', { userMailTxt: true })
  }

  // ('auth-pincode', { userMailTxt: true })

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <GoBackBtn navigation={navigation} infoColor={false} />
      </View>
      <WelcomeTxt LoginviaEmail={route?.params?.LoginviaEmail} />
      {route?.params?.LoginviaEmail ? (
        <View>
          <NameInput
            mailInput={true}
            userMail={userMail}
            setUserMail={setUserMail}
            setActiveBtn={setActiveBtn}
          />
          <View style={styles.devider} />
          <ContinueBtn userName={userMail} navigation={navigation} address={ToUserScreen} />
        </View>
      ) : (
        <View>
          <PhoneInput navigation={navigation} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(SCREENS.RULES)
            }}
            style={styles.docsBtn}>
            <Docs />
          </TouchableOpacity>
        </View>
      )}
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

  docsBtn: {
    marginTop: RH(50),
  },
  devider: {
    marginTop: RH(200),
  },
})
