import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import {
  NavigationContainer,
  NavigationContainerRef,
  ParamListBase,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackParamList } from '@routes/stackParams'
import { Colors } from '@styles/index'
import { RoutesScreens, ScreenProps } from '@routes/routes'

export const Stack = createNativeStackNavigator<StackParamList>()
export let NavigationRef = React.createRef<NavigationContainerRef<ParamListBase>>()

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
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
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
  },
})

export default App
