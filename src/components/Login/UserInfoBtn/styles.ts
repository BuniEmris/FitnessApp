import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: RW(355),
    height: RH(75),
    marginTop: RH(30),
    backgroundColor: '#EFF7F9',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RW(25),
    paddingVertical: RH(20),
    flexDirection: 'row',
  },
  name: {
    fontSize: RW(20),
    // lineHeight: RH(24),
    color: '#333333',
    fontWeight: '600',
  },
  value: {
    fontFamily: 'Gilroy',
    fontSize: RW(36),
    lineHeight: RH(44),
    color: '#333333',
    fontWeight: '500',
    marginLeft: RW(81),
  },
  sm: {
    fontSize: RW(20),
    lineHeight: RH(24),
    color: '#333333',
    fontWeight: '500',
    marginLeft: 10,
  },
})
