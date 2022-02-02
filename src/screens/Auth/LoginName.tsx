import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {RH, RW} from '../../helpers/Responsive';
import SwitchSelector from 'react-native-switch-selector';
import Introduction from '../../helpers/Introduction';
import Products from '../../helpers/Products';
import Continue from '../../helpers/Continue';
import {PhoneComponentProps} from './LoginScreen';
import HeaderName from '../../components/Login/HeaderName';
import MySwitchSelector from '../../components/Login/MySwitchSelector';
import NameInput from '../../components/Login/NameInput';
import ContinueBtn from '../../helpers/ContinueBtn';
export default function LoginName({navigation}: PhoneComponentProps) {
  return (
    <View style={styles.container}>
      <HeaderName navigation={navigation} color={false} />
      <View style={styles.intro}>
        <Introduction />
      </View>
      <MySwitchSelector />
      <NameInput />
      <View style={styles.products}>
        <Products />
      </View>
      <ContinueBtn navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: RW(17),
    paddingTop: RH(17),
  },
  intro: {
    marginTop: RH(25),
    marginBottom: RH(30),
  },

  products: {
    marginTop: RH(160),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
