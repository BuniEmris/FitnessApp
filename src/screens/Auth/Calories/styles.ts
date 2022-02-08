import { RH, RW } from '@helpers/Responsive'
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
    marginBottom: RH(30),
  },
  btn: {
    width: RW(287),
    height: RH(70),
    marginTop: RH(60),
    marginLeft: RW(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTxt: {
    marginVertical: RH(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
})
