/*
 * @author GennadySX
 * @created at 2022
 **/

import { SCREENS } from './navigations.types'

export type StackParamList = {
  [SCREENS.AUTH_NAME]: undefined
  [SCREENS.AUTH_CODE]: undefined
  [SCREENS.AUTH_LOGIN]: undefined
  [SCREENS.AUTH_PHONE]: undefined
  [SCREENS.USER_IMG]: undefined
  [SCREENS.USER_INFO]: undefined
  [SCREENS.ALLERGIC_PRODUCTS]: undefined
  [SCREENS.PROGRESS_USERDATA]: undefined
  [SCREENS.OFFER]: undefined
  [SCREENS.MAIN]: undefined
  [SCREENS.RULES]: undefined
  [SCREENS.RULES_DETAILS]: undefined
  [SCREENS.USER_CALORIES]: undefined
  //

  [SCREENS.HOME_TABS]: undefined
  [SCREENS.MAIN]: undefined
  [SCREENS.VIDEO]: {
    uri: string
  }
}
