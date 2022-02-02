/*
 * @author GennadySX
 * @created at 2022
 **/
import { Stack } from '@app'
import { SCREENS } from '@routes/navigations.types'
import LoginScreen from '@screens/Auth/LoginScreen'
import LoginPhone from '@screens/Auth/LoginPhone'
import LoginPinCode from '@screens/Auth/LoginPinCode'
import LoginName from '@screens/Auth/LoginName'

export type ScreenProps = Parameters<typeof Stack['Screen']>[number]

export const RoutesScreens: (ScreenProps & { name: string })[] = [
  {
    name: SCREENS.AUTH_LOGIN,
    component: LoginScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.AUTH_PHONE,
    component: LoginPhone,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.AUTH_CODE,
    component: LoginPinCode,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.AUTH_NAME,
    component: LoginName,
    options: {
      headerShown: false,
    },
  },
]
