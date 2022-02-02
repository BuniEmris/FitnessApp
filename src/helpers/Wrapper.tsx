import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {RW} from './Responsive';

export default function Wrapper(props: any) {
  return <View style={styles.container}>{props.children}</View>;
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: RW(49),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
