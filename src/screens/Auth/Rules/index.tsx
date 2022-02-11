import { View } from 'react-native'
import React from 'react'
import GoBackBtn from '@ui/Buttons/GoBackBtn'
import { PhoneComponentProps } from '../LoginScreen'
import { styles } from './styles'
import RulesText from '@assets/Icons/Rules'
import RulesBtn from '@components/Login/RulesBtn'

export default function Rules({}: PhoneComponentProps) {
  const rulesData = [
    'Политика конфиденциальности',
    'Пользовательское соглашение',
    'Согласие на обработку ПД',
    'Правила продажи товаров',
  ]
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <GoBackBtn infoColor={false} />
      </View>
      <View style={{ marginTop: 20 }}>
        <RulesText />
      </View>
      <View style={{ marginTop: 30 }}>
        {rulesData.map((item, i) => (
          <RulesBtn key={i} text={item} />
        ))}
      </View>
    </View>
  )
}
