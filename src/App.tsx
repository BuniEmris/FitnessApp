import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './screens/Auth/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPhone from './screens/Auth/LoginPhone';
import LoginPinCode from './screens/Auth/LoginPinCode';
import LoginName from './screens/Auth/LoginName';
import LoginUserInfo from './screens/Auth/LoginUserInfo';
const Stack = createNativeStackNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  // const [isLogged, setIsLogged] = useState(false);

  // const routeNavigator = () => {
  //   switch (isLogged) {
  //     case true: {
  //       return <TabNavigator />;
  //     }
  //     case false: {
  //       return <AuthStack />;
  //     }
  //   }
  // };
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar
        translucent
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="auth-phone" component={LoginPhone} />
            <Stack.Screen name="auth-pincode" component={LoginPinCode} />
            <Stack.Screen name="name" component={LoginName} />
            <Stack.Screen name="user-info" component={LoginUserInfo} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
  },
});

export default App;
