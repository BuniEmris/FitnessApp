import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Slider } from '@miblanchard/react-native-slider'
import { Assets } from '@constants/Icons/Assets'

type IProps = {
  calory: boolean
}
export default function ActivityLevel({ calory }: IProps) {
  const [level, setLevel] = useState<any>(0)
  const thumbImage = Assets.levelA
  const caloryImage = Assets.calory
  console.log(level, 'sss')
  const trackData = [1, 2, 3]
  return (
    <View style={calory ? styles.caloryContainer : styles.container}>
      <Text style={styles.headerText}>
        {calory ? 'Выбери сам, передвигая ползунок' : 'Увровень физической нагрузки'}
      </Text>
      <View style={styles.circleMinActive}>
        <Text style={styles.circleMinTxt}>Min</Text>
      </View>
      <View style={level >= 4 ? styles.circleMaxActive : styles.circleMaxInActive}>
        <Text style={styles.circleMaxTxt}>Max</Text>
      </View>
      <View style={styles.sliderContainer}>
        {!calory ? (
          <Slider
            containerStyle={{ height: 50 }}
            trackStyle={{ backgroundColor: '#C4C4C4' }}
            thumbStyle={{
              backgroundColor: '#FA5C01',
              bottom: 60,
              width: 6,
              height: 20,
              borderTopRightRadius: 0,
            }}
            thumbTouchSize={{ height: 90, width: 0 }}
            thumbImage={thumbImage}
            trackMarks={trackData}
            thumbTintColor={'blue'}
            animateTransitions={true}
            renderTrackMarkComponent={(index: number) => {
              const currentMarkValue = trackData[index]
              const currentSliderValue = level || (Array.isArray(level) && level[0]) || 0

              return (
                <View
                  style={{
                    borderRadius: 10,
                    width: 10,
                    height: 10,
                    backgroundColor:
                      currentMarkValue > Math.max(currentSliderValue) ? '#C4C4C4' : '#FA5C01',
                  }}>
                  {/* <Text>{index}</Text> */}
                </View>
              )
            }}
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
            thumbTouchSize={{ height: 90, width: 1 }}
            thumbImage={caloryImage}
            thumbTintColor={'blue'}
            animateTransitions={true}
            minimumTrackTintColor="#FA5C01"
            maximumValue={4}
            minimumValue={0}
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
