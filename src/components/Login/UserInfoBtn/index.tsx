import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { RH, RW } from '@helpers/Responsive'
import NextIcon from '@assets/Icons/NextIcon'
import { styles } from './styles'
type IbtnInfoProps = {
  name: string
  value: any
  sm: boolean
  kg: boolean
  textValue: string
  bottomSheet: any
  setStep: any
}
export default function UserInfoBtn({
  name,
  value,
  sm,
  kg,
  textValue,
  bottomSheet,
  setStep,
}: IbtnInfoProps) {
  return (
    <TouchableOpacity
      onPress={() => {
        if (name === 'Возраст') {
          setStep(1)
        } else if (name === 'Рост') {
          setStep(2)
        } else if (name === 'Текущий вес') {
          setStep(3)
        } else {
          setStep(4)
        }
        bottomSheet.current?.show()
      }}
      style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: RH(85),
        }}>
        {textValue ? (
          <Text style={styles.name}>{textValue}</Text>
        ) : (
          <Text style={styles.value}>
            {value}
            {sm ? <Text style={styles.sm}>{kg ? 'kg' : 'см'}</Text> : <View />}
          </Text>
        )}
        <NextIcon />
      </View>
    </TouchableOpacity>
  )
}
