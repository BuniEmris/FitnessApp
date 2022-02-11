/*
 * @author GennadySX
 * @created at 2022
 **/

import React from 'react'
import {
  BottomTabBar,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { TabsScreens } from '@routes/tabRoutes'
import { useMemo } from 'react'
import { styles } from '@layouts/HomeTabs/styles'
import { Colors } from '@styles/index'
import { BlurView } from '@react-native-community/blur'
import { HEIGHT, WIDTH } from '@utils/normalizer'
import { _styles } from '@components/Modal/styles'
import { ImageBackground, View } from 'react-native'
import { Assets } from '@constants/Icons/Assets'

export const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  const TabsScreensList = useMemo(
    () => TabsScreens.map(props => <Tab.Screen key={props.name} {...props} />),
    [],
  )

  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      detachInactiveScreens={false}
      sceneContainerStyle={{ backgroundColor: Colors.WHITE }}
      /*    tabBar={props => (
        <ImageBackground source={Assets.blur} blurRadius={15} style={{backgroundColor: 'yellow'}}>
          <BottomTabBar {...props} />
        </ImageBackground>
      )}*/
      screenOptions={defaultTabBarOptions}>
      {TabsScreensList}
    </Tab.Navigator>
  )
}
export default HomeTabs

const defaultTabBarOptions: BottomTabNavigationOptions = {
  //Whether the tab bar is hidden when the keyboard opens.
  tabBarHideOnKeyboard: true,
  tabBarInactiveTintColor: Colors.GRAY,
  tabBarActiveTintColor: Colors.PRIMARY,
  tabBarLabelStyle: styles.labelStyle,
  tabBarItemStyle: styles.tabStyle,
  tabBarStyle: styles.tabBarStyle,
}
