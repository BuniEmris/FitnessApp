import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import UserWhtTxt from '@assets/Icons/UserWhtTxt'
import { styles } from './UserHeight/styles'
import RNListSlider from './Slider/Index'
import Done from '@assets/Icons/Done'
type OwnProps = {
  userWeight: any
  setUserWeight: any
}
export default function UserWeight({ userWeight, setUserWeight }: OwnProps) {
  const onValueChanged = (val: any) => {
    setUserWeight(val)
  }
  return (
    <View>
      <View style={styles.headerText}>
        <UserWhtTxt />
      </View>
      <View style={styles.containerSlider}>
        <Text style={styles.textValue}>{userWeight}</Text>
        <RNListSlider
          multiplicity={1}
          arrayLength={240}
          value={userWeight}
          onValueChange={onValueChanged}
        />
        <TouchableOpacity style={styles.btn}>
          <Done />
        </TouchableOpacity>
      </View>
    </View>
  )
}
