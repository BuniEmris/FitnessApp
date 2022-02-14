import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000c0',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // opacity: 0.6,
  },
  imageBg: {
    flex: 1,
  },
  mainTextContainer: {
    fontWeight: '600',
    marginRight: RW(60),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: RW(341),
    height: RH(280),
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: 'white',
  },
  textStyle: {
    color: '#2F80ED',
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalHeaderText: {
    width: RW(318),
    height: RH(60),
    marginBottom: 15,
    color: 'black',
    fontSize: 25,
    lineHeight: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
  modalText: {
    width: RW(286),
    height: RH(97),
    // marginBottom: 15,
    color: '#828282',
    fontSize: 21,
    lineHeight: 22,
    fontWeight: 'normal',
    textAlign: 'center',
  },
})
