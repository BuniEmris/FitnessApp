import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import GoBackBtn from '@ui/Buttons/GoBackBtn'
import { RH, RW } from '@helpers/Responsive'
import Docs from '@assets/Icons/TextTemporary'
import PhoneInput from '@components/Login/PhoneInput'
import WelcomeTxt from '@components/Login/WelcomeTxt'
import NameInput from '@components/Login/NameInput'
import ContinueBtn from '@ui/Buttons/ContinueBtn'
import { SCREENS } from '@routes/navigations.types'
import { styles } from './styles'
import { hasNotch } from '@utils/normalizer'
export default function LoginPhone({ route, navigation }: any) {
  const [userMail, setUserMail] = useState('')
  const [activeBtn, setActiveBtn] = useState(false)
  const ToUserScreen = () => {
    navigation.navigate(SCREENS.AUTH_CODE, { userMailTxt: true })
  }

  return (
    <View style={styles.container}>
      <StatusBar animated={true} barStyle="dark-content" />
      <View style={{ marginTop: hasNotch ? 40 : 20 }}>
        <GoBackBtn infoColor={false} />
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
          <ContinueBtn ready={false} userInput={userMail} onPress={ToUserScreen} />
        </View>
      ) : (
        <View>
          <PhoneInput />
          <View style={styles.docsBtn}>
            <Text style={styles.docsMainText}>Продолжая авторизацию, вы соглашаетесь с</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(SCREENS.RULES)
              }}>
              <Text style={styles.docsBtnText}>пользовательским соглашением</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  )
}
