import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import DatePicker from 'react-native-date-picker';
import DoB from '@helpers/Icons/DoB';
import Done from '@helpers/Icons/Done';
import {RH} from '../../../helpers/Responsive';

type OwnProps = {
  date: any;
  setDate: any;
};

export default function UserDoB({date, setDate}: OwnProps) {
  return (
    <View>
      <View style={styles.doB}>
        <DoB />
      </View>
      <View style={styles.doBPicker}>
        <DatePicker mode="date" date={date} onDateChange={setDate} />
      </View>
      <TouchableOpacity style={styles.doBPicker}>
        <Done />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  doB: {
    marginTop: RH(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  doBPicker: {
    marginTop: RH(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
