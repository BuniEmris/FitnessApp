/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import { SafeAreaProvider } from 'react-native-safe-area-context/src/SafeAreaContext'
import { Provider } from 'react-redux'
import store from '@store'
import { Colors } from '@styles/index'

const BaseApp = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: Colors.WHITE }}>
      <Provider store={store}>
        <App />
      </Provider>
    </SafeAreaProvider>
  )
}

AppRegistry.registerComponent(appName, () => BaseApp)
