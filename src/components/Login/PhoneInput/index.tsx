import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { RH, RW } from '@helpers/Responsive'
import { TextInputMask } from 'react-native-masked-text'
import { PhoneComponentProps } from '@screens/Auth/LoginScreen'
import NextBtn from '@assets/Icons/NextBtn'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { SCREENS } from '@routes/navigations.types'
import { styles } from './styles'
import VirtualKeyboard from '@components/VirtualKeyboard'

export default function PhoneInput({}: PhoneComponentProps) {
  const navigation = useNavigation<StackNavigationProp<any, any>>()

  const [phoneInput, setPhoneInput] = useState('')
  return (
    <View>
      <View style={styles.inputContainer}>
        <View style={styles.inputTextContainer}>
          <Text style={styles.inputText}>+ 7 </Text>
        </View>
        <View style={styles.inputMaskContainer}>
          <TextInputMask
            type={'custom'}
            options={{ mask: '(999) 999-99-99' }}
            value={phoneInput}
            editable={false}
            placeholder={'(978) 048-65-75'}
            style={styles.inputMask}
          />
        </View>
      </View>
      <VirtualKeyboard phoneInput={phoneInput} setPhoneInput={setPhoneInput} phone={true} />
    </View>
  )
}
