import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { pickersStyles } from './styles'
import { shadows } from '@styles/shadows'
const DATA = [
  'Коровье молоко',
  'Куриное яйцо',
  'Арахис',
  'Грецкие орехи',
  'Орех-пекан',
  'Фисташки',
  'Кешью',
  'Орехи букового дерева',
  'Каштаны',
]
type Props = {
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}
const SelectAllergicList = ({ selected, setSelected }: Props) => {
  console.log(selected)

  const data = DATA
  return (
    <ScrollView>
      {data?.map((item, index) => (
        <TouchableOpacity onPress={() => setSelected(item)} key={index + selected}>
          <View style={pickersStyles.row}>
            <Text
              style={selected === item ? pickersStyles.selectTextActive : pickersStyles.selectText}>
              {item}
            </Text>
            <BouncyCheckbox
              isChecked={selected === item}
              size={20}
              fillColor="#FA5C01"
              unfillColor="#FFFFFF"
              iconStyle={{
                borderColor: 'rgba(250, 92, 1, 0.5)',
                borderWidth: 2,
              }}
              textStyle={{ fontFamily: 'Gilroy' }}
              onPress={(isChecked: boolean) => {
                setSelected(item)
              }}
            />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default SelectAllergicList
