import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerSlider: {
    marginTop: RH(20),
    // flex: 1,
    // width: '100%',

    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerText: {
    marginTop: RH(60),
    marginLeft: RW(20),
  },
  btn: {
    width: RW(287),
    height: RH(70),
    marginTop: RH(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
})
