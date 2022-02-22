import { RH, RW } from '@helpers/Responsive'
import { hasNotch } from '@utils/normalizer'
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
    marginBottom: RH(10),
  },
  introText: {
    color: '#828282',
    fontWeight: 'normal',
    fontFamily: 'Gilroy',
    fontSize: 20,
    lineHeight: RH(23),
  },
  introSelectText: {
    width: RW(364),
    height: RH(65),
    color: '#333333',
    fontSize: 25,
    lineHeight: RH(31),
    fontWeight: 'bold',
    marginBottom: 25,
  },
  btn: {
    width: RW(287),
    height: RH(70),
    marginTop: RH(60),
    marginBottom: RH(40),
    marginLeft: RW(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
})
