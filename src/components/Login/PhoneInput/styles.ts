import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#EFF7F9',
    width: RW(360),
    height: RH(75),
    borderRadius: 25,
    marginTop: RH(82),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainerGreen: {
    width: RW(360),
    height: RH(75),
    borderRadius: 25,
    marginTop: RH(82),
    flexDirection: 'row',
    paddingVertical: RH(20),
    paddingHorizontal: RW(28),
    justifyContent: 'center',
    alignItems: 'center',
    // opacity: 0.1,
  },
  inputTextContainer: {
    width: RW(33),
    height: RH(55),
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    fontSize: RW(28),
    fontWeight: 'bold',
    color: '#333333',
  },
  inputMaskContainer: {
    width: RW(243),
    height: RH(55),
    justifyContent: 'center',
  },
  inputMask: {
    fontWeight: 'bold',
    color: '#333333',
    fontSize: RW(28),
  },
  input: {
    marginTop: RH(44),
  },
  doneBtn: {
    position: 'absolute',
    width: RW(40),
    height: RH(40),
    bottom: 0,
    paddingLeft: RW(45),
  },
})
