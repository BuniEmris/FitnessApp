import { View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SelectMultiple from 'react-native-select-multiple'
import { styles } from './styles'
import { PhoneComponentProps } from '@screens/Auth/LoginScreen'
import { Assets } from '@constants/Icons/Assets'

const products = [
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
export default function SelectAllergicList({}: PhoneComponentProps) {
  const [selectedProducts, setSelectedProducts] = useState([])
  const onSelectionsChange = (val: any) => {
    setSelectedProducts(val)
  }
  return (
    <View>
      <SelectMultiple
        style={styles.container}
        rowStyle={styles.row}
        selectedCheckboxStyle={styles.selectedCheckboxStyle}
        // checkboxStyle={styles.checkboxStyle}
        items={products}
        checkboxSource={Assets.unselected}
        selectedCheckboxSource={Assets.selected}
        selectedItems={selectedProducts}
        onSelectionsChange={onSelectionsChange}
        labelStyle={styles.labelStyle}
        selectedLabelStyle={styles.selectedLabelStyle}
      />
    </View>
  )
}
