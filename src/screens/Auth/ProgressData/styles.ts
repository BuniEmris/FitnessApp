import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: RW(17),
    paddingTop: RH(17),
    alignItems: 'center',
    justifyContent: 'center',
  },
  devider: {
    marginTop: RH(40),
  },
  bgCircle2: {
    height: RH(220),
    width: RW(220),
    borderWidth: RW(3),
    borderColor: '#EFF7F9',
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
    // opacity: 0.26,
  },
  bgCircle1: {
    marginTop: 20,
    height: RH(250),
    width: RW(250),
    borderWidth: RW(3),
    borderColor: '#EFF7F9',
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
    // opacity: 0.12,
  },
})
