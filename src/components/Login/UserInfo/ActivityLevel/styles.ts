import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'
const borderWidth = 4
export const styles = StyleSheet.create({
  container: {
    width: RW(360),
    height: RH(260),
    borderRadius: 25,
    backgroundColor: '#EFF7F9',
    // backgroundColor: ' #EFF7F9',
    alignItems: 'center',
  },
  headerText: {
    marginTop: RH(20),
    width: RW(219),
    height: RH(75),
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '600',
    color: '#333333',
  },
  circleMin: {
    width: RW(30),
    height: RH(30),
    borderRadius: 50,
    backgroundColor: '#FA5C01',
    alignSelf: 'flex-start',
    left: RW(30),
    top: RW(70),
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleMax: {
    width: RW(30),
    height: RH(30),
    borderRadius: 50,
    backgroundColor: '#C4C4C4',
    alignSelf: 'flex-end',
    right: RW(30),
    top: RW(40),
    alignItems: 'center',
    justifyContent: 'center',
  },

  circleMinTxt: {
    color: 'white',
    fontSize: 12,
  },
  sliderContainer: {
    width: RW(240),
    marginLeft: 10,
    marginRight: 10,
    // alignItems: 'stretch',
    justifyContent: 'center',
  },
  activeMark: {
    borderColor: '#FA5C01',
    borderWidth,
  },
  inactiveMark: {
    borderColor: '#C4C4C4',
    borderWidth,
  },
  mainText: {
    fontSize: 16,
    color: '#4F4F4F',
    fontWeight: '600',
    marginTop: 10,
  },
  innerText: {
    color: '#828282',
    fontSize: 16,
    fontWeight: '600',
  },
})
