import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  checkboxStyle: {
    width: RW(20),
    height: RH(20),
    // borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FA5C01',
  },
  row: {
    flexDirection: 'row-reverse',
    borderBottomWidth: 0,
    justifyContent: 'space-between',
  },
  selectedCheckboxStyle: {
    width: RW(40),
    height: RH(40),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FA5C01',
  },
  labelStyle: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '#4F4F4F',
  },
  selectedLabelStyle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4F4F4F',
  },
  btn: {
    width: RW(287),
    height: RH(70),
    marginTop: RH(20),
    marginLeft: RW(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
})
