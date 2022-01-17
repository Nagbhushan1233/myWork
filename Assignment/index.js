/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import AppRootNavigator from './src/navigation/rootNavigation'

AppRegistry.registerComponent(appName, () => AppRootNavigator);
