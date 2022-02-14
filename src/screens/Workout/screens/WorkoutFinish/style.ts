/*
 * @author GennadySX
 * @created at 2022
 **/

import { StyleSheet } from 'react-native'
import { Colors, Spacing } from '@styles/index'
import { typography } from '@styles/typography'

export const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    bottom: 140,
    paddingHorizontal: Spacing.MEDIUM,
  },
  title: {
    ...typography.large,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: Spacing.MEDIUM,
  },
  titleDesc: {
    ...typography.medium,
    color: Colors.GRAY,
    fontSize: 17,
    textAlign: 'center',
  },
  switchContainer: {
    bottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchTitle: {
    ...typography.large,
    fontSize: 22,
    textAlign: 'center',
    marginBottom: Spacing.MEDIUM,
  },
})
