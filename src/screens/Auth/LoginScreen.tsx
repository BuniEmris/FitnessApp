import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import { RH, RW } from '@helpers/Responsive'
import MainText from '@assets/Icons/MainText'
import LoginButtons from '@components/Login/LoginButtons'
import { Assets } from '@constants/Icons/Assets'
import NetInfo from '@react-native-community/netinfo'
export type PhoneComponentProps = {}

export default function LoginScreen({}: PhoneComponentProps) {
  const [online, setOnline] = useState(true)
  const [modalVisible, setModalVisible] = useState(true)

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setOnline(!!state?.isConnected)
    })
    // SplashScreen.hide();
    return () => unsubscribe()
  }, [])

  return (
    <ImageBackground source={Assets.bg} resizeMode="cover" style={styles.imageBg}>
      <View style={styles.container}>
        <View style={styles.mainText}>
          <MainText />
        </View>
        {!online && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible)
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalHeaderText}>Отсутствует подключение к интернету </Text>
                <Text style={styles.modalText}>
                  Пожалуйста, подключитесь к интернету и попробуйте снова{' '}
                </Text>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
        <LoginButtons offer={false} />
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  // TODO стили нельзя так оставить!!
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
  mainText: {
    fontWeight: '600',
    marginRight: RW(60),
  },
  centeredView: {
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
