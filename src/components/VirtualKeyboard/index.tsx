import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import NextBtn from '@assets/Icons/NextBtn'
import BackArrow from '@assets/Icons/KeyboardBack'
type IProps = {
  setPhoneInput: any
  phoneInput: any
  phone: boolean
}
export default function VirtualKeyboard({ phoneInput, setPhoneInput, phone }: IProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any, any>>()

  const handleCount = (e: any) => {
    setPhoneInput((prevCount: any) => {
      if (prevCount + e) {
        return prevCount + e
      } else {
        return prevCount
      }
    })
  }
  const handleCut = (phoneInput: any) => {
    setPhoneInput(phoneInput.slice(0, -1))
  }
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          disabled={
            (phone && phoneInput.length === 10) || (!phone && phoneInput.length === 4)
              ? true
              : false
          }
          onPress={() => handleCount('1')}
          style={styles.numberContainer}>
          <Text style={styles.numbers}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCount('2')}
          disabled={
            (phone && phoneInput.length === 10) || (!phone && phoneInput.length === 4)
              ? true
              : false
          }
          style={styles.numberContainer}>
          <Text style={styles.numbers}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={
            (phone && phoneInput.length === 10) || (!phone && phoneInput.length === 4)
              ? true
              : false
          }
          onPress={() => handleCount('3')}
          style={styles.numberContainer}>
          <Text style={styles.numbers}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          disabled={
            (phone && phoneInput.length === 10) || (!phone && phoneInput.length === 4)
              ? true
              : false
          }
          onPress={() => handleCount('4')}
          style={styles.numberContainer}>
          <Text style={styles.numbers}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={
            (phone && phoneInput.length === 10) || (!phone && phoneInput.length === 4)
              ? true
              : false
          }
          onPress={() => handleCount('5')}
          style={styles.numberContainer}>
          <Text style={styles.numbers}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={
            (phone && phoneInput.length === 10) || (!phone && phoneInput.length === 4)
              ? true
              : false
          }
          onPress={() => handleCount('6')}
          style={styles.numberContainer}>
          <Text style={styles.numbers}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          disabled={
            (phone && phoneInput.length === 10) || (!phone && phoneInput.length === 4)
              ? true
              : false
          }
          onPress={() => handleCount('7')}
          style={styles.numberContainer}>
          <Text style={styles.numbers}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={
            (phone && phoneInput.length === 10) || (!phone && phoneInput.length === 4)
              ? true
              : false
          }
          onPress={() => handleCount('8')}
          style={styles.numberContainer}>
          <Text style={styles.numbers}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={
            (phone && phoneInput.length === 10) || (!phone && phoneInput.length === 4)
              ? true
              : false
          }
          onPress={() => handleCount('9')}
          style={styles.numberContainer}>
          <Text style={styles.numbers}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowBottomContainer}>
        <TouchableOpacity onPress={() => handleCut(phoneInput)} style={styles.numberContainer}>
          <BackArrow />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={
            (phone && phoneInput.length === 10) || (!phone && phoneInput.length === 4)
              ? true
              : false
          }
          onPress={() => handleCount('0')}
          style={styles.numberContainer}>
          <Text style={styles.numbers}>0</Text>
        </TouchableOpacity>
        {phoneInput.length === 10 && phone && (
          <TouchableOpacity
            onPress={() => navigation.navigate('auth-pincode', { phoneInput })}
            style={{ ...styles.numberContainerNext, marginTop: 5 }}>
            <NextBtn />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}
