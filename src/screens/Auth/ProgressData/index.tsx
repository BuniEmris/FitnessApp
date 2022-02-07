import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import ProgressTx from '@helpers/Icons/ProgressTx'
import ProgressBtm from '@helpers/Icons/ProgressBtm'
// import * as Progress from 'react-native-progress'
import ArcSlider from 'rn-arc-slider'
import { PhoneComponentProps } from '../LoginScreen'
import { SCREENS } from '@routes/navigations.types'
export default function ProgressData({ navigation }: PhoneComponentProps) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (value === 100) {
      navigation.navigate(SCREENS.MAIN)
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
    </View>
  )
}
