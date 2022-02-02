import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {PhoneComponentProps} from '../screens/Auth/LoginScreen';
import {RH, RW} from './Responsive';

export default function ContinueBtn({navigation}: PhoneComponentProps) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('user-info');
      }}
      style={styles.next}>
      <Text style={styles.nextText}>Продолжить</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  next: {
    width: RW(325),
    height: RH(60),
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FA5C01',
    marginTop: RH(152),
  },
  nextText: {
    fontSize: RH(18),
    color: 'white',
    fontWeight: 'bold',
    lineHeight: RH(22),
    alignSelf: 'center',
  },
});
