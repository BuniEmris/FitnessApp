import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useRef } from 'react'
import { RH, RW } from '../../helpers/Responsive'
import GoBackBtn from '@ui/Buttons/GoBackBtn'
import PhoneNo from '@helpers/Icons/PhoneText'
import SmsSend from '@helpers/Icons/SmsSend'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import { PhoneComponentProps } from './LoginScreen'
import SendSms from '../../components/Login/SendSms'
import ValidationText from '../../components/Login/ValidationText'
import { SCREENS } from '@routes/navigations.types'

export default function LoginPinCode({ navigation }: PhoneComponentProps) {
  const [pincodeValue, setPincodeValue] = useState('')
  const [showErrorPin, setShowErrorPin] = useState(false)
  const pinRef = useRef(null)
  const handleNextStep = () => navigation.navigate(SCREENS.AUTH_NAME)
  const handlingCode = (val: string) => {
    setPincodeValue(val)
    if (val === '1234') {
      handleNextStep()
    } else {
      setShowErrorPin(true)
    }
  }
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <GoBackBtn navigation={navigation} infoColor={false} />
      </View>
      <Text style={styles.verificationTxt}>Верификация</Text>
      <Text style={styles.enterPhoneTxt}>Мы отправили вам СМС код</Text>
      <PhoneNo />
      <View style={styles.pinContainer}>
        <SmoothPinCodeInput
          ref={pinRef}
          value={pincodeValue}
          onTextChange={handlingCode}
          cellStyle={styles.inputContainer}
          textStyle={styles.inputText}
          autoFocus
        />
      </View>
      {showErrorPin && <ValidationText />}
      <SendSms />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: RW(17),
    paddingTop: RH(17),
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  pinContainer: {
    marginTop: RH(90),
    alignItems: 'center',
  },
  verificationTxt: {
    marginTop: RH(25),
    color: '#828282',
    fontSize: RW(20),
    fontWeight: '400',
    lineHeight: RH(23),
    alignItems: 'center',
  },
  enterPhoneTxt: {
    marginTop: RH(10),
    width: RW(364),
    height: RH(31),
    fontSize: RW(26),
    fontWeight: 'bold',
    lineHeight: RH(30),
    color: '#333333',
    marginBottom: RH(5),
  },
  input: {
    marginTop: RH(44),
    fontSize: RW(25),
  },
  inputContainer: {
    width: RW(70),
    height: RH(90),
    backgroundColor: '#EFF7F9',
    borderRadius: 25,
  },

  inputText: {
    fontSize: RW(25),
    letterSpacing: 4,
    fontWeight: 'bold',
    lineHeight: RH(30),
    color: '#333333',
  },
})
