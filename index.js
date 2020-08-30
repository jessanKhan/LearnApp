/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './app/app.js';
import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));