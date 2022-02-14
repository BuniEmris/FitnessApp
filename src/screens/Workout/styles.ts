/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { Colors, Spacing } from '@styles/index'
import { typography } from '@styles/typography'
import { WIDTH } from '@utils/normalizer'

export const styles = StyleSheet.create({
  block: {
    flex: 1,
    paddingVertical: Spacing.MEDIUM + 4,

    paddingHorizontal: Spacing.MEDIUM,
  },
  headerContainer: {
    paddingVertical: Spacing.MEDIUM,
  },
  title: {
    ...typography.large,
    fontWeight: 'bold',
    marginBottom: Spacing.TINY,
  },
  headerDesc: {
    ...typography.large,
    color: Colors.GRAY,
  },
  circleBlock: {
    paddingTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: WIDTH * 0.8,
    height: WIDTH * 0.8,
    borderWidth: 3,
    borderColor: 'rgba(250,92,1,0.1)',
    backgroundColor: Colors.WHITE,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleSecondary: {
    width: WIDTH * 0.65,
    height: WIDTH * 0.65,
    borderWidth: 5,
    borderColor: Colors.LIGHT_ORANGE,
  },
  circleTiny: {
    width: WIDTH * 0.5,
    height: WIDTH * 0.5,
    backgroundColor: Colors.PRIMARY_DARKER,
    borderRadius: 100,
  },
  circleBtnTitle: {
    ...typography.large,
    fontSize: 45,
    lineHeight: 55,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
})
