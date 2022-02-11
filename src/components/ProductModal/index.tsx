/*
 * @author GennadySX
 * @created at 2022
 **/

import React, { Fragment } from 'react'
import { ModalBottom } from '@components/Modal'
import {
  FlatList,
  Pressable,
  ScrollView,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Product } from '@reducers/entities/Product/product.types'
import { HEIGHT } from '@utils/normalizer'
import { VideoPlayer } from '@components/VideoPlayer'
import { styles } from '@components/ProductModal/styles'
import { Container } from '@layouts/Container'
import { BadgeCarousel } from '@components/BadgeCarousel'
import { ProductContainsMock, ProductItems } from '@mocks/products.mock'
import { ProductCard } from '@components/ProductCard'
import { typography } from '@styles/typography'
import { Colors } from '@styles/index'

type ProductModalProps = {
  item: Product
  onClose: () => void
  isVisible: boolean
}

export const ProductModal = ({ item: product, onClose, isVisible }: ProductModalProps) => {
  return (
    <ModalBottom
      hideHeader
      statusBarTranslucent
      modalStyle={{
        paddingHorizontal: 0,
        height: HEIGHT - 110,
        paddingTop: 0,
        zIndex: 5,
        marginBottom: 0,
        paddingBottom: 0,
      }}
      onClose={onClose}
      swipeDirection={undefined}
      propagateSwipe
      isVisible={isVisible}>
      <ScrollView nestedScrollEnabled bounces scrollEventThrottle={15}>
        <VideoPlayer closeModal={onClose} poster={{ uri: product.imgUri }} />
        <Container>
          <Text style={styles.title}>{product.description}</Text>
          <Text style={styles.desc}>
            Сытное блюдо на скорую руку - яичница-глазунья в хрустящей гренке. Отличный вариант
            эффектного завтрака из самых простых продуктов.
          </Text>
        </Container>
        <Container unPaddingBottom>
          <Text style={styles.containBlockTitle}>Ценность</Text>
        </Container>
        <View>
          <BadgeCarousel
            data={ProductContainsMock}
            contentContainerStyle={{ paddingLeft: 5 }}
            itemStyle={{ paddingHorizontal: 9, marginRight: 10 }}
          />
        </View>
        <Container
          unPaddingBottom
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.containBlockTitle}>Продукты</Text>
          <TouchableOpacity style={{ bottom: 5 }}>
            <Text style={styles.moreBtnText}>См. все</Text>
          </TouchableOpacity>
        </Container>
        <FlatList
          data={ProductItems}
          horizontal
          contentContainerStyle={{ paddingLeft: 10, marginTop: 10, paddingRight: 25 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => <ProductCard item={item} key={index} />}
        />
        <Container unPaddingBottom>
          <Text style={styles.containBlockTitle}>Рецепт</Text>
        </Container>
        <View style={styles.descCardBlock}>
          <View style={styles.descCard}>
            <Text style={styles.descCardTitle}>1</Text>
            <Text style={styles.descCardText}>
              Налейте растительное масло в чистую сковороду и поставьте на огонь.
            </Text>
          </View>
          <View style={styles.descCard}>
            <Text style={styles.descCardTitle}>2</Text>
            <Text style={styles.descCardText}>
              Разбейте яйца и вылейте их на сковороду, тараясь не повредить желток.
            </Text>
          </View>
          <View style={styles.descCard}>
            <Text style={styles.descCardTitle}>3</Text>
            <Text style={styles.descCardText}>
              Посолите по вкусу и жарьте 2-3 минуты. Лопаткой аккуратно переложите яичницу на
              тарелку и подавайте на стол.
            </Text>
          </View>
        </View>
      </ScrollView>
    </ModalBottom>
  )
}
