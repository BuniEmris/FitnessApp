/* @flow */
import * as React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { Slider } from '@miblanchard/react-native-slider'

// styles
import {
  aboveThumbStyles,
  componentThumbStyles,
  customStyles,
  customStyles2,
  customStyles3,
  customStyles4,
  customStyles5,
  customStyles6,
  customStyles7,
  customStyles8,
  customStyles9,
  iosStyles,
  styles,
  trackMarkStyles,
} from './styles'

const thumbImage = require('./img/thumb.png')

const DEFAULT_VALUE = 0

const CustomThumb = () => (
  <View style={componentThumbStyles.container}>
    <Text>Any</Text>
  </View>
)

const renderAboveThumbComponent = () => {
  return <View style={aboveThumbStyles.container} />
}

const SliderContainer = (props: {
  caption: string
  children: React.ReactElement
  sliderValue?: Array<number>
  trackMarks?: Array<number>
}) => {
  const { caption, sliderValue, trackMarks } = props
  const [value, setValue] = React.useState(sliderValue ? sliderValue : DEFAULT_VALUE)
  let renderTrackMarkComponent: React.ReactNode

  if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
    renderTrackMarkComponent = (index: number) => {
      const currentMarkValue = trackMarks[index]
      const currentSliderValue = value || (Array.isArray(value) && value[0]) || 0
      const style =
        currentMarkValue > Math.max(currentSliderValue)
          ? trackMarkStyles.activeMark
          : trackMarkStyles.inactiveMark
      return <View style={style} />
    }
  }

  const renderChildren = () => {
    return React.Children.map(props.children, (child: React.ReactElement) => {
      if (!!child && child.type === Slider) {
        return React.cloneElement(child, {
          onValueChange: setValue,
          renderTrackMarkComponent,
          trackMarks,
          value,
        })
      }

      return child
    })
  }

  return (
    <View style={styles.sliderContainer}>
      <View style={styles.titleContainer}>
        <Text>{caption}</Text>
        <Text>{Array.isArray(value) ? value.join(' - ') : value}</Text>
      </View>
      {renderChildren()}
    </View>
  )
}

const SliderComp = () => (
  <SafeAreaView>
    <ScrollView contentContainerStyle={styles.container}>
      <SliderContainer caption="" sliderValue={[1]} trackMarks={[2, 3, 4]}>
        <Slider maximumValue={15} minimumValue={0} step={1} />
      </SliderContainer>
    </ScrollView>
  </SafeAreaView>
)

export default SliderComp
