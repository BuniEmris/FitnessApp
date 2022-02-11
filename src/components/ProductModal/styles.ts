/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { typography } from '@styles/typography'
import { Colors, Spacing } from '@styles/index'

export const styles = StyleSheet.create({
  block: {},
  title: {
    ...typography.large,
    fontWeight: '900',
    marginBottom: Spacing.SMALL,
  },
  desc: {
    ...typography.medium,
    color: Colors.GRAY,
  },
  containBlockTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.GRAY,
  },
  moreBtnText: {
    ...typography.medium,
    fontWeight: '700',
    color: Colors.PRIMARY,
  },
  descCardBlock: {
    marginTop: 20,
    marginBottom: 100,
  },
  descCard: {
    flexDirection: 'row',
    paddingHorizontal: 35,
    paddingLeft: 25,
    alignItems: 'flex-start',
    marginBottom: Spacing.MEDIUM,
  },
  descCardTitle: {
    ...typography.bold,
    fontWeight: 'bold',
    fontSize: 58,
    paddingRight: 15,
    lineHeight: 72,
    color: Colors.PRIMARY,
    bottom: 12,
  },
  descCardText: {
    ...typography.medium,
    color: Colors.GRAY,
    maxWidth: '90%',
  },
})
