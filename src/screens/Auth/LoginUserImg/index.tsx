import { View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import HeaderName from '@components/Login/HeaderName'
import { PhoneComponentProps } from '../LoginScreen'
import { styles } from './styles'
import UserImgTxt from '@assets/Icons/UserImgTxt'
import AddImg from '@assets/Icons/AddImg'
import ContinueBtn from '@ui/Buttons/ContinueBtn'
import ImagePicker from 'react-native-image-crop-picker'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { SCREENS } from '@routes/navigations.types'

export default function LoginUserImg({}: PhoneComponentProps) {
  const navigation = useNavigation<StackNavigationProp<any, any>>()

  const [localFileImg, setlocalFileImg] = useState()

  const navAddress = () => {
    navigation.navigate(SCREENS.PROGRESS_USERDATA)
  }
  // SCREENS.PROGRESS_USERDATA
  const onFileSelected = (image: any) => {
    console.log(image, 'images')
    setlocalFileImg(image)
    console.log(localFileImg, 'img store')
  }
  return (
    <View style={styles.container}>
      <HeaderName color={false} />
      <View style={styles.divider}>
        <UserImgTxt />
      </View>
      <View style={styles.bodyWrapper}>
        <View style={styles.bgCircle1}>
          <View style={styles.bgCircle2}>
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
                  source={{ uri: localFileImg?.path }}
                />
              ) : (
                <AddImg />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <ContinueBtn userInput={localFileImg} onPress={navAddress} />
      </View>
    </View>
  )
}
