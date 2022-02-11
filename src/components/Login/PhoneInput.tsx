import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { RH, RW } from '@helpers/Responsive'
import { TextInputMask } from 'react-native-masked-text'
import VirtualKeyboard from 'react-native-virtual-keyboard'
import { PhoneComponentProps } from '@screens/Auth/LoginScreen'
import NextBtn from '@assets/Icons/NextBtn'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { SCREENS } from '@routes/navigations.types'

export default function PhoneInput({}: PhoneComponentProps) {
  const navigation = useNavigation<StackNavigationProp<any, any>>()

  const [phoneInput, setPhoneInput] = useState('')
  return (
    <View>
      <View style={styles.inputContainer}>
        <View style={styles.inputTextContainer}>
          <Text style={styles.inputText}>+7</Text>
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
      <VirtualKeyboard
        rowStyle={styles.input}
        color="black"
        pressMode="string"
        tintColor="red"
        onPress={(val: any) => setPhoneInput(val)}
      />
      {phoneInput.length === 10 ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(SCREENS.AUTH_CODE)
          }}
          style={styles.doneBtn}>
          <NextBtn />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#EFF7F9',
    width: RW(360),
    height: RH(75),
    borderRadius: 25,
    marginTop: RH(82),
    flexDirection: 'row',

    // paddingVertical: RH(20),
    // paddingHorizontal: RW(28),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainerGreen: {
    // backgroundColor: '#27AE60',
    width: RW(360),
    height: RH(75),
    borderRadius: 25,
    marginTop: RH(82),
    flexDirection: 'row',
    paddingVertical: RH(20),
    paddingHorizontal: RW(28),
    justifyContent: 'center',
    alignItems: 'center',
    // opacity: 0.1,
  },
  inputTextContainer: {
    width: RW(33),
    height: RH(55),
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    fontSize: RW(28),
    fontWeight: 'bold',
    color: '#333333',
  },
  inputMaskContainer: {
    width: RW(243),
    height: RH(55),
    justifyContent: 'center',
  },
  inputMask: {
    fontWeight: 'bold',
    color: '#333333',
    fontSize: RW(28),
  },
  input: {
    marginTop: RH(44),
  },
  doneBtn: {
    position: 'absolute',
    width: RW(40),
    height: RH(40),
    bottom: 0,
    paddingLeft: RW(45),
    // marginBottom: RH(60),
    // position: 'absolute',
    // bottom: RH(140),
    // left: RW(65),
  },
})
