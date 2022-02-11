/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { Colors } from '@styles/index'

export const shadows = StyleSheet.create({
  normal: {
    shadowColor: Colors.LIGHT_GRAY,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
  },
})
