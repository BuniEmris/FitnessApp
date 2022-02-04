import { RH, RW } from '@helpers/Responsive'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: RW(17),
    paddingTop: RH(17),
  },
  divider: {
    marginTop: RH(25),
    marginBottom: RH(95),
  },
  addImgContainer: {
    width: RW(200),
    height: RH(200),
    borderRadius: 100,
    backgroundColor: '#EFF7F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
