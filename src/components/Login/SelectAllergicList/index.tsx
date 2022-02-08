import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SelectMultiple from 'react-native-select-multiple'
import { styles } from './styles'
import unselected from '../../../assets/image/unselected.png'
import selected from '../../../assets/image/selected.png'
import Done from '@helpers/Icons/Done'
import { PhoneComponentProps } from '@screens/Auth/LoginScreen'
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
export default function SelectAllergicList({ navigation }: PhoneComponentProps) {
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
        checkboxStyle={styles.checkboxStyle}
        items={products}
        checkboxSource={unselected}
        selectedCheckboxSource={selected}
        selectedItems={selectedProducts}
        onSelectionsChange={onSelectionsChange}
        labelStyle={styles.labelStyle}
        selectedLabelStyle={styles.selectedLabelStyle}
      />
      <TouchableOpacity onPress={() => navigation.navigate('user-info')} style={styles.btn}>
        <Done />
      </TouchableOpacity>
    </View>
  )
}
