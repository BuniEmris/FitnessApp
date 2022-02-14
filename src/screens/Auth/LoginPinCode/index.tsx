import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useRef } from 'react'
import { RH, RW } from '@helpers/Responsive'
import GoBackBtn from '@ui/Buttons/GoBackBtn'
import PhoneNo from '@assets/Icons/PhoneText'
import MailText from '@assets/Icons/MailText'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import SendSms from '@components/Login/SendSms'
import ValidationText from '@components/Login/ValidationText'
import { SCREENS } from '@routes/navigations.types'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { styles } from './styles'
import { hasNotch } from '@utils/normalizer'
export default function LoginPinCode({ route }: any) {
  const navigation = useNavigation<StackNavigationProp<any, any>>()

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
      <View style={{ marginTop: hasNotch ? 40 : 20 }}>
        <GoBackBtn infoColor={false} />
      </View>
      <Text style={styles.verificationTxt}>Верификация</Text>
      {route?.params?.userMailTxt ? (
        <MailText />
      ) : (
        <View>
          <Text style={styles.enterPhoneTxt}>Мы отправили вам СМС код</Text>
          <PhoneNo />
        </View>
      )}

      <View style={styles.pinContainer}>
        <SmoothPinCodeInput
          ref={pinRef}
          value={pincodeValue}
          onTextChange={(val: any) => setPincodeValue(val)}
          cellStyle={styles.inputContainer}
          textStyle={styles.inputText}
          onFulfill={handlingCode}
          autoFocus
        />
      </View>
      {showErrorPin && <ValidationText />}
      <SendSms showErrorPin={showErrorPin} setShowErrorPin={setShowErrorPin} />
    </View>
  )
}
