import { View, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { RH, RW } from '@helpers/Responsive'
import { styles } from './styles'

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
          autoComplete={'email'}
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
