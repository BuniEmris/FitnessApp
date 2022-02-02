import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import BackBtn from '../assets/Icons/BackIcon';
import BackBlue from '../assets/Icons/BackBlueIcon';

type IgoBackBtnProps = {
  navigation: any;
  infoColor: boolean;
};
export default function GoBackBtn({navigation, infoColor}: IgoBackBtnProps) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      {infoColor ? <BackBlue /> : <BackBtn />}
    </TouchableOpacity>
  );
}
