import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000c0',
    width: '100%',
    justifyContent: 'flex-end',
    // opacity: 0.6,
  },
  imageBg: {
    flex: 1,
  },
  mainText: {
    marginLeft: RW(10),
    fontWeight: '600',
    marginVertical: RH(10),
  },
  btn: {
    marginLeft: RW(10),
    marginBottom: RW(30),
    justifyContent: 'center',
  },
})
