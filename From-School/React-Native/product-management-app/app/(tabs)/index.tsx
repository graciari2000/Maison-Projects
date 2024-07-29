// index.tsx
import { AppRegistry } from 'react-native';
import App from '../../App'; // Adjust import path
import { name as appName } from '../../package.json';

AppRegistry.registerComponent(appName, () => App);