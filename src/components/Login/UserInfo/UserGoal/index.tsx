import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { RH, RW } from '@helpers/Responsive'
import GoalText from '@assets/Icons/GoalText'
import GoalBtn from '@assets/Icons/GoalBtn'
import Done from '@assets/Icons/Done'
import { styles } from './styles'

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
