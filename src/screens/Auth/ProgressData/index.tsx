import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import ProgressTx from '@assets/Icons/ProgressTx'
import ProgressBtm from '@assets/Icons/ProgressBtm'
// import * as Progress from 'react-native-progress'
import ArcSlider from 'rn-arc-slider'
import { PhoneComponentProps } from '../LoginScreen'
import { SCREENS } from '@routes/navigations.types'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export default function ProgressData({}: PhoneComponentProps) {
  const navigation = useNavigation<StackNavigationProp<any, any>>()

  const [value, setValue] = useState(67)
  useEffect(() => {
    if (value === 100) {
      navigation.navigate(SCREENS.HOME_TABS)
    }
  }, [value])

  return (
    <View style={styles.container}>
      <ProgressTx />
      <View style={styles.devider} />
      <View style={styles.bgCircle1}>
        <View style={styles.bgCircle2}>
          <View>
            <ArcSlider
              value={value}
              onChange={(val: any) => setValue(val)}
              trackColor={'#FA5C01'}
              showText={true}
              textColor={'black'}
            />
          </View>
        </View>
      </View>
      <View style={styles.devider} />
      <ProgressBtm />
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => {
          navigation.navigate(SCREENS.OFFER)
        }}>
        <Text style={{ fontWeight: '600' }}>далее</Text>
      </TouchableOpacity>
    </View>
  )
}
