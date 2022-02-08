import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { RH, RW } from '../../helpers/Responsive'
import AppleIcon from '../../assets/Icons/AppleIcon'
import { PhoneComponentProps } from '../../screens/Auth/LoginScreen'

type IButtonProps = {
  btnText: string
  navigation: any
  mailDesign: boolean
  icon: boolean
}

const LoginBtns = ({ btnText, navigation, mailDesign, icon }: IButtonProps) => {
  return (
    <TouchableOpacity
      style={mailDesign ? styles.mailBtn : styles.smsBtn}
      onPress={() => {
        if (btnText === 'Войти по E-mail') {
          return navigation.navigate('auth-phone', { LoginviaEmail: true })
        } else if (btnText === 'БЕСПЛАТНАЯ ПРОБНАЯ ВЕРСИЯ НА 7 ДНЕЙ') {
          return navigation.navigate('main')
        } else {
          return navigation.navigate('auth-phone')
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
        <Text style={mailDesign ? styles.mailBtnText : styles.smsBtnText}>{btnText}</Text>
      )}
    </TouchableOpacity>
  )
}
type IProps = {
  navigation: any
  offer: boolean
}
export default function LoginButtons({ navigation, offer }: IProps) {
  return (
    <View>
      {offer ? (
        <LoginBtns
          btnText="БЕСПЛАТНАЯ ПРОБНАЯ ВЕРСИЯ НА 7 ДНЕЙ"
          navigation={navigation}
          mailDesign={false}
          icon={false}
        />
      ) : (
        <View>
          <LoginBtns
            btnText="Войти по SMS"
            navigation={navigation}
            mailDesign={false}
            icon={false}
          />
          <LoginBtns
            btnText="Войти с помощью Apple"
            navigation={navigation}
            mailDesign={false}
            icon
          />
          <LoginBtns btnText="Войти по E-mail" navigation={navigation} mailDesign={true} icon />
        </View>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  smsBtn: {
    marginTop: RH(20),
    width: RW(360),
    height: RH(60),
    borderRadius: RW(15),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smsBtnText: {
    fontSize: RW(15),
    fontWeight: '600',
    color: 'black',
    lineHeight: RH(21),
    marginLeft: RW(10),
  },
  mailBtn: {
    marginVertical: RH(20),
    width: RW(360),
    height: RH(60),
    borderRadius: RW(15),
    borderWidth: 1,
    borderColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mailBtnText: {
    // fontFamily: 'Gilroy-Medium',
    fontSize: RW(18),
    fontWeight: '600',
    color: 'white',
    lineHeight: RH(21),
  },
})
