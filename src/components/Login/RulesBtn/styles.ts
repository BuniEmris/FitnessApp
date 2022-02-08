import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: RW(360),
    height: RH(55),
    borderBottomWidth: 0.5,
    borderColor: '#BDBDBD',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
})
