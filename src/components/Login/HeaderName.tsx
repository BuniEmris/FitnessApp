import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import GoBackBtn from '../../helpers/GoBackBtn';
import {PhoneComponentProps} from '../../screens/Auth/LoginScreen';
import Skip from '../../helpers/Skip';

type IOwnProps = {
  navigation: any;
  color: boolean;
};
export default function HeaderName({navigation, color}: IOwnProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      }}>
      <GoBackBtn navigation={navigation} infoColor={color} />
      <Skip />
    </View>
  );
}
