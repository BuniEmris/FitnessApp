import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Slider } from '@miblanchard/react-native-slider'
import CaloryIcon from '@helpers/Icons/CalorySliderTxt'
type IProps = {
  calory: boolean
}
export default function ActivityLevel({ calory }: IProps) {
  const [level, setLevel] = useState<any>(0)
  const thumbImage = require('../../../../assets/image/levelA.png')
  const caloryImage = require('../../../../assets/image/calory.png')
  console.log(level, 'sss')
  const trackData = [1, 2, 3]
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        {calory ? 'Выбери сам, передвигая ползунок' : 'Увровень физической нагрузки'}
      </Text>
      <View style={level.value === '5' ? styles.circleMinInactive : styles.circleMinActive}>
        <Text style={styles.circleMinTxt}>Min</Text>
      </View>
      <View style={level.value === '5' ? styles.circleMaxActive : styles.circleMaxInActive}>
        <Text style={styles.circleMinTxt}>Max</Text>
      </View>
      <View style={styles.sliderContainer}>
        {!calory ? (
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
            trackMarks={trackData}
            // trackStyle={{ backgroundColor: 'red', width: 10, height: 10 }}
            thumbTintColor={'blue'}
            animateTransitions={true}
            renderTrackMarkComponent={(index: number) => (
              <View
                style={{
                  borderRadius: 10,
                  width: 10,
                  height: 10,
                  backgroundColor: index === Number(trackData) ? 'grey' : 'red',
                }}>
                {/* <Text>{index}</Text> */}
              </View>
            )}
            minimumTrackTintColor="#FA5C01"
            maximumValue={4}
            minimumValue={0}
            step={1}
            value={level}
            onValueChange={value => setLevel(value)}
          />
        ) : (
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
            thumbImage={caloryImage}
            // trackMarks={trackData}
            thumbTintColor={'blue'}
            animateTransitions={true}
            // renderTrackMarkComponent={(index: number) => (
            //   <View
            //     style={{
            //       borderRadius: 10,
            //       width: 10,
            //       height: 10,
            //       backgroundColor: index === Number(trackData) ? 'grey' : 'red',
            //     }}>
            //     {/* <Text>{index}</Text> */}
            //   </View>
            // )}
            minimumTrackTintColor="#FA5C01"
            maximumValue={4}
            minimumValue={0}
            // step={1}
            value={level}
            onValueChange={value => setLevel(value)}
          />
        )}
      </View>
      {!calory && (
        <Text style={styles.mainText}>
          Низкий уровень, <Text style={styles.innerText}>подойдет новичкам</Text>
        </Text>
      )}
    </View>
  )
}
