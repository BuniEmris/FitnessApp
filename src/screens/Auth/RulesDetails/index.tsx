import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import GoBackBtn from '@ui/Buttons/GoBackBtn'
import { PhoneComponentProps } from '../LoginScreen'
import { styles } from './styles'
import { typography } from '@styles/typography'

export default function RulesDetails({}: PhoneComponentProps) {
  // const [shadowActive, setshadowActive] = useState(false)
  const onContentSizeChange = (contentHeight: any) => {
    if (contentHeight > 0) {
      // setshadowActive(true) TODO @buniEmris и зачем же если нигде используешь shadowActive ???
    }
  }
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <GoBackBtn infoColor={false} />
      </View>
      <View style={styles.shadowInActiveText}>
        <Text style={typography.largeBold}>Политика конфиденциальности</Text>
      </View>
      <View style={styles.shadowActiveText} />
      <ScrollView
        style={styles.body}
        onContentSizeChange={onContentSizeChange}
        showsVerticalScrollIndicator={false}>
        <Text style={typography.regular}>
          Значимость этих проблем настолько очевидна, что консультация с широким активом позволяет
          выполнять важные задания по разработке позиций, занимаемых участниками в отношении
          поставленных задач. Равным образом реализация намеченных плановых заданий обеспечивает
          широкому кругу (специалистов) участие в формировании новых предложений. Идейные
          соображения высшего порядка, а также рамки и место обучения кадров играет важную роль в
          формировании существенных финансовых и административных условий. С другой стороны
          дальнейшее развитие различных форм деятельности требуют определения и уточнения
          соответствующий условий активизации. Идейные соображения высшего порядка, а также
          дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по
          разработке форм развития. Товарищи! начало повседневной работы по формированию позиции
          требуют определения и уточнения дальнейших направлений развития. Задача организации, в
          особенности же рамки и место обучения кадров позволяет оценить значение форм развития.
          Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм
          деятельности позволяет оценить значение позиций, занимаемых участниками в отношении
          поставленных задач. Равным образом рамки и место обучения кадров в значительной степени
          обуславливает создание систем массового участия. Не следует, однако забывать, что
          дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и
          модернизации модели развития. С другой стороны укрепление и развитие структуры требуют
          определения и уточнения дальнейших направлений развития.
        </Text>
      </ScrollView>
    </View>
  )
}
