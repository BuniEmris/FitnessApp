import { RH, RW } from '@helpers/Responsive'
import { shadows } from '@styles/shadows'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  next: {
    width: RW(325),
    height: RH(60),
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FA5C01',
    marginTop: RH(152),
  },
  nextActive: {
    width: RW(325),
    height: RH(60),
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FA5C01',
    marginTop: RH(152),
  },
  nextActiveReady: {
    width: RW(325),
    height: RH(60),
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FA5C01',
    marginTop: RH(70),
    ...shadows.normal,
  },
  nextInActive: {
    width: RW(325),
    height: RH(60),
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FA5C01',
    marginTop: RH(152),
    opacity: 0.2,
  },
  nextText: {
    fontFamily: 'Gilroy',
    fontSize: RH(18),
    color: 'white',
    fontWeight: 'bold',
    lineHeight: RH(22),
    alignSelf: 'center',
  },
})
