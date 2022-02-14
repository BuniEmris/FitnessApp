import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  inputContainer: {
    width: RW(360),
    height: RH(75),
    borderRadius: 25,
    backgroundColor: '#EFF7F9',
    marginTop: RH(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: RH(24),
    color: '#333333',
    fontWeight: '600',
    lineHeight: RH(30),
  },
})
