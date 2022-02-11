/*
 * @author GennadySX
 * @created at 2022
 **/
import React from 'react'
import {
  ActivityIndicator,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  TouchableOpacityProps,
  View,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { _style } from '@ui/PrimaryButton/styles'
import { Colors, Spacing } from '@styles/index'

type PrimaryButtonProps = {
  title: string
  onPress?: () => void
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  loading?: boolean
} & TouchableOpacityProps

export const PrimaryButton = ({
  title,
  loading,
  textStyle,
  onPress,
  style,
  ...props
}: PrimaryButtonProps) => {
  return (
    <View style={{ top: 0 }}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => onPress && onPress()}
        style={[
          _style.block,
          style,
          { paddingVertical: 0 },
          {
            height: 50,
          },
        ]}
        {...props}>
        <LinearGradient
          style={[
            style as ViewStyle,
            {
              padding: Spacing.MEDIUM,
              width: '100%',
              alignItems: 'center',
              height: 60,
              bottom: 0,
              borderRadius: Spacing.MEDIUM,
            },
          ]}
          colors={['#F2521F', Colors.PRIMARY, '#FF8D4E']}
          start={{ x: 0.09, y: 0.5 }}
          end={{ x: 1, y: 0.009 }}
          locations={[0.005, 1, 0.9]}>
          {loading ? (
            <ActivityIndicator color={Colors.WHITE} size={'small'} style={{ width: 40 }} />
          ) : (
            <Text style={[_style.title, textStyle]}>{title}</Text>
          )}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}
