import { View } from 'react-native'
import React, { useState } from 'react'
import SwitchSelector from 'react-native-switch-selector'

type Iprops = {
  calory: boolean
}
export default function MySwitchSelector({ calory }: Iprops) {
  const [gender, setGender] = useState('')
  const [myCalory, setMyCalory] = useState('')

  return (
    <View>
      {calory ? (
        <SwitchSelector
          initial={0}
          onPress={(value: any) => setMyCalory(value)}
          textColor={'black'} //'#7a44cf'
          selectedColor={'white'}
          buttonColor={'#FA5C01'}
          borderColor="transparent"
          height={60}
          backgroundColor={'#EFF7F9'}
          hasPadding
          options={[
            { label: '1200', value: '1200' },
            { label: '1400', value: '1400' },
            { label: '1500', value: '1500' },
          ]}
        />
      ) : (
        <SwitchSelector
          initial={0}
          onPress={(value: any) => setGender(value)}
          textColor={'black'} //'#7a44cf'
          selectedColor={'white'}
          buttonColor={'#FA5C01'}
          borderColor="transparent"
          height={60}
          backgroundColor={'#EFF7F9'}
          hasPadding
          options={[
            { label: 'Я мужчина', value: 'm' },
            { label: 'Я женщина', value: 'f' },
          ]}
          testID="gender-switch-selector"
          accessibilityLabel="gender-switch-selector"
        />
      )}
    </View>
  )
}
