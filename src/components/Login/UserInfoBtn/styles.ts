import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: RW(360),
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
    lineHeight: RH(23),
    color: '#333333',
    fontWeight: '500',
    marginRight: RW(22),
  },
  value: {
    fontSize: RW(26),
    color: '#333333',
    fontWeight: 'bold',
    marginLeft: RW(81),
    marginRight: RW(22),
  },
  sm: {
    fontSize: RW(20),
    lineHeight: RH(24),
    color: '#333333',
    fontWeight: '500',
    marginBottom: RH(30),
  },
})
