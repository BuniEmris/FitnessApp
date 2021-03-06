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
import { MainScreen } from '@screens/Main'
import HomeTabs from '@layouts/HomeTabs'
import { VideoScreen } from '@screens/Video'

import LoginUserImg from '@screens/Auth/LoginUserImg'
import AllergyList from '@screens/Auth/AllergyList'
import ProgressData from '@screens/Auth/ProgressData'
import Rules from '@screens/Auth/Rules'
import Calories from '@screens/Auth/Calories'
import Offer from '@screens/Auth/Offer'
import RulesDetails from '@screens/Auth/RulesDetails'
import LoginUserInfo from '@screens/Auth/LoginUserInfo'
import { VideoPreparingScreen } from '@screens/Workout/screens/VideoPreparing'
import Video from 'react-native-video'
import { WorkoutFinishScreen } from '@screens/Workout/screens/WorkoutFinish'

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

  {
    name: SCREENS.USER_IMG,
    component: LoginUserImg,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.ALLERGIC_PRODUCTS,
    component: AllergyList,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.USER_INFO,
    component: LoginUserInfo,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.USER_CALORIES,
    component: Calories,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.PROGRESS_USERDATA,
    component: ProgressData,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.OFFER,
    component: Offer,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.RULES,
    component: Rules,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.RULES_DETAILS,
    component: RulesDetails,
    options: {
      headerShown: false,
    },
  },

  {
    name: SCREENS.MAIN,
    component: MainScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.HOME_TABS,
    component: HomeTabs,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.VIDEO,
    component: VideoScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.VIDEO_PREPARING,
    component: VideoPreparingScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: SCREENS.WORKOUT_FINISH,
    component: WorkoutFinishScreen,
    options: {
      headerShown: false,
    },
  },
]
