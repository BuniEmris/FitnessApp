import {View, Text} from 'react-native';
import React, {useState} from 'react';
import SwitchSelector from 'react-native-switch-selector';

export default function MySwitchSelector() {
  const [gender, setGender] = useState('');

  return (
    <View>
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
          {label: 'Я мужчина', value: 'm'},
          {label: 'Я женщина', value: 'f'},
        ]}
        testID="gender-switch-selector"
        accessibilityLabel="gender-switch-selector"
      />
    </View>
  );
}
