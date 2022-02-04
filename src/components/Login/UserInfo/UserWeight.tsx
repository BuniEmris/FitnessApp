import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import UserWhtTxt from '@helpers/Icons/UserWhtTxt'
import { styles } from './UserHeight'
import RNListSlider from './Slider/Index'
import Done from '@helpers/Icons/Done'
export default function UserWeight() {
  const [value, setValue] = useState(60)
  const onValueChanged = (val: any) => {
    setValue(val)
  }
  return (
    <View>
      <View style={styles.headerText}>
        <UserWhtTxt />
      </View>
      <View style={styles.containerSlider}>
        <Text style={styles.textValue}>{value}</Text>
        <RNListSlider
          multiplicity={1}
          arrayLength={240}
          value={value}
          onValueChange={onValueChanged}
        />
        <TouchableOpacity style={styles.btn}>
          <Done />
        </TouchableOpacity>
      </View>
    </View>
  )
}
