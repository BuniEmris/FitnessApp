import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {RH, RW} from '../../helpers/Responsive';

export default function NameInput() {
  const [userName, setUserName] = useState('');

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={userName}
        onChangeText={val => setUserName(val)}
        style={styles.input}
        placeholder="Имя"
      />
    </View>
  );
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
});
