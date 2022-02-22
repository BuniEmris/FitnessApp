import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'
import { hasNotch } from '@utils/normalizer'
export const styles = StyleSheet.create({
  BtnContainers: {
    marginBottom: hasNotch ? 31 : 10,
  },
  smsBtn: {
    marginTop: RH(20),
    width: RW(360),
    height: RH(60),
    borderRadius: RW(15),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerBtn: {
    marginTop: RH(20),
    width: RW(360),
    height: RH(75),
    borderRadius: RW(15),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smsBtnText: {
    // fontFamily: 'Gilroy',
    fontSize: RW(18),
    fontWeight: '600',
    color: '#333333',
    lineHeight: RH(21),
    marginLeft: RW(10),
  },
  offerBtnText: {
    fontFamily: 'Gilroy',
    fontSize: RW(16),
    fontWeight: '800',
    color: '#333333',
    lineHeight: RH(20),
  },
  mailBtn: {
    marginVertical: RH(20),
    width: RW(360),
    height: RH(60),
    borderRadius: RW(15),
    borderWidth: 1,
    borderColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mailBtnText: {
    fontSize: RW(18),
    fontWeight: '600',
    color: 'white',
    lineHeight: RH(21),
  },
})
