import { RH, RW } from '@helpers/Responsive'
import { PRIMARY } from '@styles/colors'
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
  cancel: {
    marginBottom: RH(320),
    marginLeft: RW(340),
  },
  mainText: {
    marginLeft: RW(10),
    fontWeight: '600',
    marginVertical: RH(10),
  },
  mainTextContainer: {
    height: RH(100),
    width: RW(360),
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
    marginLeft: RW(10),
    marginBottom: RW(30),
    justifyContent: 'center',
  },
})
