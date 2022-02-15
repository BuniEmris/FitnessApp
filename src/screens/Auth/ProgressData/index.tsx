import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import ProgressTx from '@assets/Icons/ProgressTx'
import ProgressBtm from '@assets/Icons/ProgressBtm'
// import * as Progress from 'react-native-progress'
import ArcSlider from 'rn-arc-slider'
import { PhoneComponentProps } from '../LoginScreen'
import { SCREENS } from '@routes/navigations.types'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { styles as s } from '@screens/Workout/styles'
// import { styles } from '@screens/Workout/screens/VideoPreparing/styles'
import CircularProgress from 'react-native-circular-progress-indicator'
import { Colors } from '@styles/index'
import { WIDTH } from '@utils/normalizer'

export default function ProgressData({}: PhoneComponentProps) {
  const navigation = useNavigation<StackNavigationProp<any, any>>()

  return (
    <View style={styles.container}>
      <ProgressTx />
      <View style={styles.devider} />
      <View style={s.circleBlock}>
        <View style={[s.circle, { width: WIDTH * 0.85, height: WIDTH * 0.85 }]}>
          <View style={[s.circle, s.circleSecondary, { width: WIDTH * 0.7, height: WIDTH * 0.7 }]}>
            <CircularProgress
              value={100}
              clockwise
              valueSuffix={'%'}
              circleBackgroundColor={Colors.WHITE}
              inActiveStrokeColor={Colors.LIGHT_ORANGE}
              radius={120}
              duration={2000}
              onAnimationComplete={() => {
                navigation.navigate(SCREENS.OFFER)
              }}
              textColor={Colors.BLACK}
              activeStrokeSecondaryColor={Colors.PRIMARY}
              activeStrokeColor={Colors.PRIMARY_DARKER}
              maxValue={100}
              activeStrokeWidth={20}
            />
          </View>
        </View>
      </View>

      <View style={styles.devider} />
      <ProgressBtm />
    </View>
  )
}
