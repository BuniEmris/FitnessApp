import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#EFF7F9',
    width: RW(360),
    height: RH(75),
    borderRadius: 25,
    marginTop: RH(82),
    marginBottom: RH(92),
    flexDirection: 'row',
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
    height: RH(36),
    marginLeft: RW(30),
  },
  inputText: {
    fontSize: RW(30),
    fontFamily: 'Gilroy',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#333333',
    lineHeight: RH(36),
  },
  inputMaskContainer: {
    width: RW(243),
    marginLeft: 8,
  },
  inputMask: {
    fontFamily: 'Gilroy',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: RH(35),
    color: 'black',
    fontSize: RW(30),
  },
  // inputMaskActive: {
  //   fontSize: RW(30),
  //   lineHeight: RH(37),
  //   fontFamily: appStyles.MONTSERRAT,
  //   fontWeight: "normal",
  //   color: Colors.MAIN_GREEN,
  // },
  // inputMaskInActive: {
  //   fontSize: RW(30),
  //   lineHeight: RH(37),
  //   fontFamily: appStyles.MONTSERRAT,
  //   fontWeight: "normal",
  //   color: Colors.RED,
  // },
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
