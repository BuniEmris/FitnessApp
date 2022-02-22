import { View, Text } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import GoBackBtn from '@ui/Buttons/GoBackBtn'
import MailText from '@assets/Icons/MailText'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import SendSms from '@components/Login/SendSms'
import ValidationText from '@components/Login/ValidationText'
import { SCREENS } from '@routes/navigations.types'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { styles } from './styles'
import { hasNotch } from '@utils/normalizer'
import VirtualKeyboard from '@components/VirtualKeyboard'
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
  useEffect(() => {
    if (pincodeValue === '1111') {
      handleNextStep()
    } else if (pincodeValue.length === 4 && pincodeValue !== '1111') {
      setShowErrorPin(true)
    }
  }, [pincodeValue])
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
          <View style={styles.details}>
            <Text style={styles.detailsText}>To the number:</Text>
            <Text style={styles.phoneText}> + 7 (978) 048-65-77</Text>
          </View>
        </View>
      )}

      <View style={styles.pinContainer}>
        <SmoothPinCodeInput
          ref={pinRef}
          // placeholder="0"
          codeLength={4}
          value={pincodeValue}
          onTextChange={(val: any) => setPincodeValue(val)}
          cellStyle={showErrorPin ? styles.WrongInputContainer : styles.inputContainer}
          textStyle={styles.inputText}
          onFulfill={handlingCode}
          cellStyleFocused={null}
        />
      </View>
      <View style={styles.validationText}>
        {showErrorPin ? <ValidationText /> : <Text style={styles.empty}></Text>}
      </View>
      <VirtualKeyboard phoneInput={pincodeValue} setPhoneInput={setPincodeValue} phone={false} />
      <SendSms showErrorPin={showErrorPin} setShowErrorPin={setShowErrorPin} />
    </View>
  )
}
