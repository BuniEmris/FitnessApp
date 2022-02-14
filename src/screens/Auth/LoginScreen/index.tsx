import React, { useEffect, useState } from 'react'
import { View, ImageBackground, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native'
import { RH, RW } from '@helpers/Responsive'
import MainText from '@assets/Icons/MainText'
import LoginButtons from '@components/Login/LoginButtons'
import { Assets } from '@constants/Icons/Assets'
import NetInfo from '@react-native-community/netinfo'
import { styles } from './styles'

export type PhoneComponentProps = {}

export default function LoginScreen({}: PhoneComponentProps) {
  const [online, setOnline] = useState(true)
  const [modalVisible, setModalVisible] = useState(true)

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setOnline(state.isConnected)
    })
    // SplashScreen.hide();
    return () => unsubscribe()
  }, [])

  return (
    <ImageBackground source={Assets.bg} resizeMode="cover" style={styles.imageBg}>
      <View style={styles.container}>
        <View style={styles.mainTextContainer}>
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
            <View style={styles.modalContainer}>
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
