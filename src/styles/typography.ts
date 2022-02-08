/*
 * @author GennadySX
 * @created at 2022
 **/

import { PixelRatio, StyleSheet } from 'react-native'
import { Colors } from './index'

export const typography = StyleSheet.create({
  sfPro: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 34,
    lineHeight: 40,
    color: Colors.BLACK,
  },
  regular: {
    fontFamily: 'Gilroy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 18,
    color: Colors.BLACK,
  },
  large: {
    fontFamily: 'Gilroy',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: PixelRatio.getFontScale() * 1.07 * 24,
    lineHeight: 30,
    color: Colors.BLACK,
  },
  largeBold: {
    fontFamily: 'Gilroy',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: PixelRatio.getFontScale() * 1.07 * 24,
    lineHeight: 30,
    color: Colors.BLACK,
  },
  small: {
    fontFamily: 'Gilroy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 16,
    color: Colors.BLACK,
  },
  bold: {
    fontFamily: 'Gilroy-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 18,
    color: Colors.BLACK,
  },
  medium: {
    fontFamily: 'Gilroy-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 20,
    color: Colors.BLACK,
  },
})
