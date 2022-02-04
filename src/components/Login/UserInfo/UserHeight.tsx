import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { RH, RW } from '../../../helpers/Responsive'
import UserHeightText from '@helpers/Icons/UserHeightText'
import Done from '@helpers/Icons/Done'
// import RNListSlider from 'react-native-list-slider'
import RNListSlider from './Slider/Index'
import LinearGradient from 'react-native-linear-gradient'
type OwnProps = {
  userHeight: any
  setUserHeight: any
}

export default function UserHeight({ userHeight, setUserHeight }: OwnProps) {
  const [value, setValue] = useState(175)
  const onValueChanged = (val: any) => {
    setValue(val)
  }
  return (
    <View>
      <View style={styles.headerText}>
        <UserHeightText />
      </View>
      <View style={styles.containerSlider}>
        <Text style={styles.textValue}>{value}</Text>
        <RNListSlider
          multiplicity={1}
          arrayLength={290}
          value={value}
          onValueChange={onValueChanged}
        />
        <TouchableOpacity style={styles.btn}>
          <Done />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export const styles = StyleSheet.create({
  containerSlider: {
    marginTop: RH(113),
    // flex: 1,
    // width: '100%',

    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerText: {
    marginTop: RH(60),
    marginLeft: RW(20),
  },
  textValue: {
    fontSize: 72,
    fontWeight: '600',
    color: '#000000',
  },

  btn: {
    width: RW(287),
    height: RH(70),
    marginTop: RH(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})
