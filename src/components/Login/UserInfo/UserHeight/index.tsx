import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { RH, RW } from '@helpers/Responsive'
import UserHeightText from '@assets/Icons/UserHeightText'
import Done from '@assets/Icons/Done'
import RNListSlider from '../Slider/Index'
import { styles } from './styles'

type OwnProps = {
  userHeight: any
  setUserHeight: any
}

export default function UserHeight({ userHeight, setUserHeight }: OwnProps) {
  const onValueChanged = (val: any) => {
    setUserHeight(val)
  }
  return (
    <View>
      <View style={styles.headerText}>
        <UserHeightText />
      </View>
      <View style={styles.containerSlider}>
        <Text style={styles.textValue}>{userHeight}</Text>
        <RNListSlider
          multiplicity={1}
          arrayLength={290}
          value={userHeight}
          onValueChange={onValueChanged}
        />
        <TouchableOpacity style={styles.btn}>
          <Done />
        </TouchableOpacity>
      </View>
    </View>
  )
}
