import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: RW(17),
    paddingTop: RH(17),
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  pinContainer: {
    marginTop: RH(90),
    alignItems: 'center',
    marginBottom: 26,
  },
  verificationTxt: {
    marginTop: RH(25),
    color: '#828282',
    fontSize: RW(20),
    fontWeight: '400',
    lineHeight: RH(23),
    alignItems: 'center',
  },
  enterPhoneTxt: {
    marginTop: RH(10),
    width: RW(364),
    height: RH(31),
    fontSize: RW(26),
    fontWeight: 'bold',
    lineHeight: RH(30),
    color: '#333333',
    marginBottom: RH(5),
  },
  input: {
    marginTop: RH(44),
    fontSize: RW(25),
  },
  inputContainer: {
    width: RW(70),
    height: RH(90),
    marginRight: 10,
    backgroundColor: '#EFF7F9',
    borderRadius: 25,
  },
  WrongInputContainer: {
    width: RW(70),
    height: RH(90),
    marginRight: 10,
    backgroundColor: 'rgba(235, 87, 87, 0.1)',
    borderRadius: 25,
  },
  details: {
    flexDirection: 'row',
  },
  detailsText: {
    fontFamily: 'Gilroy',
    fontSize: 18,
    fontWeight: '300',
    lineHeight: RH(21),
    color: '#828282',
  },
  phoneText: {
    fontFamily: 'Gilroy',
    fontSize: 18,
    fontWeight: '300',
    lineHeight: RH(21),
    color: '#565FFF',
  },
  inputText: {
    fontSize: RW(25),
    letterSpacing: 4,
    fontWeight: 'bold',
    lineHeight: RH(30),
    color: '#333333',
  },
  validationText: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 26,
  },
  empty: {
    color: 'white',
    height: RH(33),
  },
})
