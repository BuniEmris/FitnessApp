import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: RW(311),
    height: RH(33),
    marginLeft: RW(35),
    marginTop: RH(44),
  },
  text: {
    fontSize: 14,
    color: '#EB5757',
    textAlign: 'center',
    lineHeight: RH(16),
  },
  welcomeTxt: {
    marginTop: RH(25),
    color: '#828282',
    fontSize: RW(20),
    fontWeight: '400',
    lineHeight: RH(23),
    alignItems: 'center',
  },
  enterPhoneTxt: {
    marginTop: RH(10),
    width: RW(358),
    height: RH(72),
    fontSize: RW(30),
    fontWeight: 'bold',
    lineHeight: RH(35),
    color: '#333333',
  },
})
