import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'

export const pickersStyles = StyleSheet.create({
  text1: {
    fontSize: RW(35),
    fontWeight: '600',
    color: 'rgba(51, 51, 51, 1)',
    fontFamily: 'Gilroy',
    lineHeight: RH(42.39),
    marginTop: RH(50),
  },
  text2: {
    fontSize: RW(28),
    fontWeight: '300',
    color: 'rgba(47, 128, 237, 1)',
    fontFamily: 'Gilroy',
    lineHeight: RH(36.33),
    fontStyle: 'normal',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    marginLeft: 10,
  },
  button: {
    marginTop: RH(50),
  },
  valueWrapper: {
    marginTop: RH(25),
    borderBottomWidth: 5,
    paddingBottom: 2,
    width: '85%',
  },
  value: {
    fontWeight: '300',
    fontSize: RW(30),
    lineHeight: RH(36.33),
    color: 'rgba(51, 51, 51, 0.5)',
  },
  acceptButton: {
    backgroundColor: 'rgba(0, 220, 146, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: RW(50),
  },
  acceptButtonText: {
    fontSize: RW(30),
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
    lineHeight: RH(36.33),
    fontFamily: 'Gilroy',
    fontStyle: 'normal',
  },

  selectText: {
    fontSize: RW(20),
    fontWeight: 'normal',
    color: '#4F4F4F',
    fontFamily: 'Gilroy',
    lineHeight: RH(24),
  },
  selectTextActive: {
    fontSize: RW(20),
    fontWeight: '600',
    color: '#4F4F4F',
    fontFamily: 'Gilroy',
    lineHeight: RH(24),
  },
})
