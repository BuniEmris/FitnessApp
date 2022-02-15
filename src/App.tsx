import React, { useEffect } from 'react'

import {
  NavigationContainer,
  NavigationContainerRef,
  ParamListBase,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackParamList } from '@routes/stackParams'
import { Colors } from '@styles/index'
import { RoutesScreens, ScreenProps } from '@routes/routes'
import { AppBlock } from '@layouts/AppBlock'
import RNBootSplash from 'react-native-bootsplash'
import { SCREENS } from "@routes/navigations.types";

export const Stack = createNativeStackNavigator<StackParamList>()
export let NavigationRef = React.createRef<NavigationContainerRef<ParamListBase>>()

const App = () => {

  useEffect(() => {
     setTimeout(async () => await RNBootSplash.hide({ fade: true }), 2000)
  }, [])

  return (
    <AppBlock>
      <NavigationContainer ref={NavigationRef}>
        <Stack.Navigator
          screenOptions={{
            animation: 'simple_push',
            contentStyle: { backgroundColor: Colors.WHITE },
          }}>
          {RoutesScreens.map((screen: ScreenProps) => (
            <Stack.Screen key={screen.name} {...screen} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </AppBlock>
  )
}

export default App
