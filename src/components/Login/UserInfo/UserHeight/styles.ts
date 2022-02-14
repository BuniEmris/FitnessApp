import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerSlider: {
    marginTop: RH(113),
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
  textValue: {
    fontSize: 72,
    fontWeight: '600',
    color: '#000000',
  },

  btn: {
    width: RW(287),
    height: RH(70),
    marginTop: RH(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})
