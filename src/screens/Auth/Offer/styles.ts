import { RH, RW } from '@helpers/Responsive'
import { PRIMARY } from '@styles/colors'
import { hasNotch } from '@utils/normalizer'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000c0',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  imageBg: {
    flex: 1,
  },
  cancel: {
    marginTop: hasNotch ? 40 : 20,
    marginRight: RW(10),
    marginBottom: RH(350),
  },
  mainText: {
    marginRight: RW(70),
    fontWeight: '600',
    marginVertical: RH(10),
  },
  mainTextContainer: {
    height: RH(100),
    width: RW(360),
    marginRight: RW(10),
  },
  freeText: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '500',
    fontFamily: 'Gilroy',
    fontStyle: 'normal',
    color: '#BDBDBD',
  },
  weekTextContainer: {
    width: RW(175),
    height: RH(35),
    backgroundColor: PRIMARY,
    borderRadius: 5,
    alignItems: 'center',
  },
  weekText: {
    fontSize: 26,
    lineHeight: 31,
    fontWeight: '500',
    fontFamily: 'Gilroy',
    fontStyle: 'normal',
    color: 'white',
  },
  btn: {
    marginRight: RW(10),
    marginBottom: RW(30),
    justifyContent: 'center',
  },
})
