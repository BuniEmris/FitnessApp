import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SelectMultiple from 'react-native-select-multiple'
import { styles } from './styles'
import Done from '@assets/Icons/Done'
import { PhoneComponentProps } from '@screens/Auth/LoginScreen'
import { Assets } from '@constants/Icons/Assets'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {SCREENS} from "@routes/navigations.types";

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
  const navigation = useNavigation<StackNavigationProp<any, any>>()

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
      <TouchableOpacity onPress={() => navigation.navigate(SCREENS.USER_INFO)} style={styles.btn}>
        <Done />
      </TouchableOpacity>
    </View>
  )
}
