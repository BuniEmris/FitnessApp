import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: RW(17),
    paddingTop: RH(17),
  },

  docsBtn: {
    marginTop: RH(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  docsMainText: {
    fontFamily: 'Gilroy',
    fontWeight: 'normal',
    color: '#828282',
    fontSize: 16,
    lineHeight: RH(18),
  },
  docsBtnText: {
    color: '#565FFF',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: RH(18),
  },
  devider: {
    marginTop: RH(200),
  },
})
