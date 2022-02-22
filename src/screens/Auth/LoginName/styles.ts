import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: RW(17),
    paddingTop: RH(17),
  },
  intro: {
    marginTop: RH(25),
    marginBottom: RH(30),
  },

  products: {
    marginTop: RH(160),
    width: RW(310),
    height: RH(42),
    marginLeft: RW(23),
  },
  productsText: {
    color: '#2F80ED',
    fontFamily: 'Gilroy',
    fontSize: 18,
    lineHeight: RH(21),
    fontWeight: 'normal',
    textAlign: 'center',
  },
})
