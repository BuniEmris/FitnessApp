/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { Colors, Spacing } from '@styles/index'
import { typography } from '@styles/typography'
import { shadows } from '@styles/shadows'

export const _style = StyleSheet.create({
  block: {
    width: '100%',
    backgroundColor: Colors.WHITE,
    marginBottom: Spacing.MEDIUM,
    ...shadows.normal,
    flexDirection: 'row',
    borderRadius: 25,
    paddingVertical: Spacing.MEDIUM,
    paddingHorizontal: Spacing.MEDIUM,
    paddingRight: Spacing.TINY,
    alignItems: 'center',
    elevation: 15,
  },
  infoContainer: {
    width: '65%',
    paddingBottom: Spacing.SMALL,
  },
  timeBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: Spacing.TINY,
  },
  hour: {
    ...typography.large,
    fontWeight: '900',
    letterSpacing: 0.3,
  },
  dayTime: {
    ...typography.large,
    fontWeight: '700',
  },
  desc: {
    ...typography.medium,
    color: Colors.GRAY,
    fontSize: 20,
    paddingBottom: Spacing.SMALL,
  },
  containInfo: {
    ...typography.medium,
    color: Colors.GRAY,
  },
  contains: {
    color: Colors.LIGHT_GRAY,
  },
  img: {
    width: '35%',
    flexGrow: 1,

    height: '100%',
    borderRadius: 20,
    resizeMode: 'cover',
  },
})
