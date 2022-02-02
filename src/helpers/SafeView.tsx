import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

export default function SafeView(props: any) {
  return <SafeAreaView>{props.children}</SafeAreaView>;
}
