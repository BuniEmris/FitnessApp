import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Slider } from '@miblanchard/react-native-slider'
export default function ActivityLevel() {
  const [level, setLevel] = useState<any>(1)
  const thumbImage = require('../../../../assets/image/levelA.png')
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Увровень физической нагрузки </Text>
      <View style={styles.circleMin}>
        <Text style={styles.circleMinTxt}>Min</Text>
      </View>
      <View style={styles.circleMax}>
        <Text style={styles.circleMinTxt}>Max</Text>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          containerStyle={{ height: 50 }}
          trackStyle={{ backgroundColor: '#C4C4C4' }}
          thumbStyle={{
            backgroundColor: '#FA5C01',
            bottom: 60,
            width: 30,
            height: 30,
            borderRadius: 10,
          }}
          thumbTouchSize={{ height: 90 }}
          thumbImage={thumbImage}
          trackMarks={[1, 2, 3]}
          thumbTintColor={'blue'}
          animateTransitions={true}
          minimumTrackTintColor="#FA5C01"
          maximumValue={5}
          minimumValue={1}
          step={1}
          value={level}
          onValueChange={value => setLevel(value)}
        />
      </View>
      <Text style={styles.mainText}>
        Низкий уровень, <Text style={styles.innerText}>подойдет новичкам</Text>
      </Text>
    </View>
  )
}
