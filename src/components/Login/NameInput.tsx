import { View, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { RH, RW } from '@helpers/Responsive'

export default function NameInput({
  userName,
  setUserName,
  setActiveBtn,
  userMail,
  setUserMail,
  mailInput,
}: any) {
  return (
    <View style={styles.inputContainer}>
      {!mailInput ? (
        <TextInput
          value={userName}
          onChangeText={val => {
            setUserName(val)
            setActiveBtn(true)
          }}
          style={styles.input}
          placeholder="Имя"
        />
      ) : (
        <TextInput
          autoCompleteType={'email'}
          value={userMail}
          onChangeText={val => {
            setUserMail(val)
            setActiveBtn(true)
          }}
          style={styles.input}
          placeholder="fitness@gmail.com"
        />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    width: RW(360),
    height: RH(75),
    borderRadius: 25,
    backgroundColor: '#EFF7F9',
    marginTop: RH(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: RH(24),
    color: '#333333',
    fontWeight: '600',
    lineHeight: RH(30),
  },
})
