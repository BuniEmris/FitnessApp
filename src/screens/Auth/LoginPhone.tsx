import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import GoBackBtn from '@ui/Buttons/GoBackBtn';
import {RH, RW} from '../../helpers/Responsive';
import Docs from '@helpers/Icons/TextTemporary';

import {PhoneComponentProps} from './LoginScreen';
import PhoneInput from '../../components/Login/PhoneInput';
import WelcomeTxt from '../../components/Login/WelcomeTxt';

export default function LoginPhone({navigation}: PhoneComponentProps) {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 20}}>
        <GoBackBtn navigation={navigation} infoColor={false} />
      </View>
      <WelcomeTxt />
      <PhoneInput navigation={navigation} />
      <TouchableOpacity style={styles.docsBtn}>
        <Docs />
      </TouchableOpacity>
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

  docsBtn: {
    marginTop: RH(50),
  },
});
