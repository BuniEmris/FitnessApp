import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { RH, RW } from '@helpers/Responsive'
import GoalText from '@helpers/Icons/GoalText'
import GoalBtn from '@helpers/Icons/GoalBtn'
import Done from '@helpers/Icons/Done'

export default function UserGoal() {
  return (
    <View>
      <View style={styles.headerText}>
        <GoalText />
      </View>
      <View style={styles.containerSlider}>
        <GoalBtn />
        <TouchableOpacity style={styles.btn}>
          <Done />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export const styles = StyleSheet.create({
  containerSlider: {
    marginTop: RH(20),
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
  btn: {
    width: RW(287),
    height: RH(70),
    marginTop: RH(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
})
