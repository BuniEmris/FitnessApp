import { View, Text, TouchableOpacity, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import HeaderName from '@components/Login/HeaderName'
import { PhoneComponentProps } from '../LoginScreen'
import { styles } from './styles'
import UserImgTxt from '@helpers/Icons/UserImgTxt'
import AddImg from '@helpers/Icons/AddImg'
import ContinueBtn from '@ui/Buttons/ContinueBtn'
import { SCREENS } from '@routes/navigations.types'
import ImagePicker from 'react-native-image-crop-picker'
export default function LoginUserImg({ navigation }: PhoneComponentProps) {
  const [localFileImg, setlocalFileImg] = useState()
  const navAddress = SCREENS.USER_IMG
  const onFileSelected = (image: any) => {
    console.log(image, 'images')
    setlocalFileImg(image)
    console.log(localFileImg, 'img store')
  }
  return (
    <View style={styles.container}>
      <HeaderName navigation={navigation} color={false} />
      <View style={styles.divider}>
        <UserImgTxt />
      </View>
      <View style={styles.bodyWrapper}>
        <TouchableOpacity
          onPress={() => {
            ImagePicker.openPicker({
              width: 300,
              height: 300,
              cropping: true,
              freeStyleCropEnabled: true,
            })
              .then(images => {
                setlocalFileImg(images)
              })
              .catch(error => {
                console.log('error', error)
              })
          }}
          style={styles.addImgContainer}>
          {localFileImg ? (
            <Image
              width={200}
              height={200}
              style={styles.addImgContainer}
              resizeMode="contain"
              source={localFileImg.path}
            />
          ) : (
            <AddImg />
          )}
        </TouchableOpacity>
        <ContinueBtn navigation={navigation} address={navAddress} />
      </View>
    </View>
  )
}