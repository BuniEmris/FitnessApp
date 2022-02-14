import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import DatePicker from 'react-native-date-picker'
import DoB from '@assets/Icons/DoB'
import Done from '@assets/Icons/Done'
import { RH } from '@helpers/Responsive'
import { styles } from './styles'

type OwnProps = {
  date: any
  setDate: any
}

export default function UserDoB({ date, setDate }: OwnProps) {
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
  )
}
