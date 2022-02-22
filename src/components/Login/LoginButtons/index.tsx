import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { RH, RW } from '@helpers/Responsive'
import AppleIcon from '@assets/Icons/AppleIcon'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '@routes/navigations.types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { PhoneComponentProps } from '@screens/Auth/LoginScreen'
import { typography } from '@styles/typography'
import { styles } from './styles'

type IButtonProps = {
  btnText: string
  mailDesign: boolean
  icon: boolean
  offer: boolean
}

const LoginBtns = ({ btnText, mailDesign, icon, offer }: IButtonProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  return (
    <TouchableOpacity
      style={mailDesign ? styles.mailBtn : offer ? styles.offerBtn : styles.smsBtn}
      onPress={() => {
        if (btnText === 'Войти по E-mail') {
          return navigation.navigate(SCREENS.AUTH_PHONE, { LoginviaEmail: true })
        } else if (btnText === 'БЕСПЛАТНАЯ ПРОБНАЯ ВЕРСИЯ НА 7 ДНЕЙ') {
          return navigation.navigate(SCREENS.HOME_TABS)
        } else {
          return navigation.navigate(SCREENS.AUTH_PHONE)
        }
      }}>
      {icon ? (
        <View
          style={{
            flexDirection: 'row',
          }}>
          <AppleIcon />

          <Text style={mailDesign ? styles.mailBtnText : styles.smsBtnText}>{btnText}</Text>
        </View>
      ) : (
        <Text
          style={mailDesign ? styles.mailBtnText : offer ? styles.offerBtnText : styles.smsBtnText}>
          {btnText}
        </Text>
      )}
    </TouchableOpacity>
  )
}
type IProps = {
  offer: boolean
}
export default function LoginButtons({ offer }: IProps) {
  return (
    <View style={styles.BtnContainers}>
      {offer ? (
        <LoginBtns
          offer={true}
          btnText="БЕСПЛАТНАЯ ПРОБНАЯ ВЕРСИЯ НА 7 ДНЕЙ"
          mailDesign={false}
          icon={false}
        />
      ) : (
        <View>
          <LoginBtns offer={false} btnText="Войти по SMS" mailDesign={false} icon={false} />
          <LoginBtns offer={false} btnText="Войти с помощью Apple" mailDesign={false} icon />
          <LoginBtns offer={false} btnText="Войти по E-mail" mailDesign={true} icon />
        </View>
      )}
    </View>
  )
}
