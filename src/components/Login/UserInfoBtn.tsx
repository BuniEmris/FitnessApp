import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { RH, RW } from '../../helpers/Responsive'
import NextIcon from '../../assets/Icons/NextIcon'
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: RW(360),
    height: RH(75),
    marginTop: RH(30),
    backgroundColor: '#EFF7F9',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RW(25),
    paddingVertical: RH(20),
    flexDirection: 'row',
  },
  name: {
    fontSize: RW(20),
    lineHeight: RH(23),
    color: '#333333',
    fontWeight: '500',
    marginRight: RW(22),
  },
  value: {
    // height: RH(40),
    fontSize: RW(26),
    // lineHeight: RH(40),
    color: '#333333',
    fontWeight: 'bold',
    marginLeft: RW(81),
    marginRight: RW(22),
  },
  sm: {
    fontSize: RW(20),
    lineHeight: RH(24),
    color: '#333333',
    fontWeight: '500',
    marginBottom: RH(30),
  },
})
