import { RH, RW } from '@helpers/Responsive'
import { shadows } from '@styles/shadows'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    // marginTop: RH(63),
    height: RH(270),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: RH(70),
  },
  rowBottomContainer: {
    flexDirection: 'row',
    height: RH(70),
  },
  numberContainer: {
    width: RW(120),
    height: RH(55),
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberContainerNext: {
    width: RW(120),
    height: RH(55),
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.normal,
  },
  numbers: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: RH(29),
    letterSpacing: 4,
    color: '#333333',
    height: RH(29),
  },
})
