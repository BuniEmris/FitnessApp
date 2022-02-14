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
    marginTop: RH(50),
  },
  devider: {
    marginTop: RH(200),
  },
})
